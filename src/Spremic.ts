// @ts-nocheck
interface SpeechRecognition {
  startRecognition(): void
  stopRecognition(): void
  getRecognizedText(): string
  textToSpeech(text: string): void
}

export default class Spremic implements SpeechRecognition {
  private recognition: SpeechRecognition | null = null
  private recognizedText: string = ''
  private onRecognitionEndCallback: (() => void) | null = null

  constructor() {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      this.recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)()
      this.setupRecognition()
    } else {
      console.error('Speech recognition is not supported in this browser.')
    }
  }

  private setupRecognition() {
    if (this.recognition) {
      this.recognition.continuous = true

      this.recognition.onresult = (event: SpeechRecognition) => {
        const lastResult = event.results[event.results.length - 1]
        this.recognizedText = lastResult[0].transcript
      }

      this.recognition.onerror = (event: SpeechRecognitionResult) => {
        console.error('Speech recognition error:', event)
      }

      this.recognition.onend = () => {
        if (this.onRecognitionEndCallback) {
          this.onRecognitionEndCallback()
        }
      }
    }
  }

  startRecognition(): void {
    if (this.recognition) {
      this.recognition.start()
    }
  }

  stopRecognition(): void {
    if (this.recognition) {
      this.recognition.stop()
    }
  }

  getRecognizedText(): string {
    return this.recognizedText
  }

  textToSpeech(text: string): void {
    const utterance = new SpeechSynthesisUtterance(text)
    window.speechSynthesis.speak(utterance)
  }

  public set onRecognitionEnd(callback: () => void) {
    this.onRecognitionEndCallback = callback
  }
}

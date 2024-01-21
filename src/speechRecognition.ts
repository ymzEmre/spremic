// src/speechRecognition.ts

class SpeechRecognitionLibrary {
  private recognition: SpeechRecognition;

  constructor() {
    this.recognition = new window.SpeechRecognition();
    this.recognition.lang = 'en-US';
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 1;
  }

  startRecognition(callback: (result: string) => void): void {
    this.recognition.onresult = (event) => {
      const result = event.results[0][0].transcript;
      callback(result);
    };

    this.recognition.start();
  }

  stopRecognition(): void {
    this.recognition.stop();
  }
}

export default SpeechRecognitionLibrary;

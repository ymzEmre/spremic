class Test {
  recognition: any
  lang: any
  continuous: any
  interimResults: any
  onresult: any
  transcriptRes: any

  constructor() {
    this.recognition = new (window as any).webkitSpeechRecognition()
    this.lang = 'en-US'
    this.continuous = true
    this.interimResults = false
    this.onresult = function (event: any) {
      const transcript = event.results[0][0].transcript
      this.transcriptRes = transcript
      console.log('Speech Recognition Result:', transcript)
    }
  }
  start() {
    this.recognition.lang = this.lang
    this.recognition.continuous = this.continuous
    this.recognition.interimResults = this.interimResults
    this.recognition.onresult = this.onresult
    this.recognition.start()
    console.log('Speech Recognition Started')
  }

  handleResult(event: any) {
    const transcript = event.results[0][0].transcript
    console.log('Speech Recognition Result:', transcript)
  }
}

const test = new Test()
test.start()

test.onresult = function (event: any) {
  const transcript = event.results[0][0].transcript
  console.log('Speech Recognition Result:', transcript)
}

export default Test

// @ts-nocheck
class SpeechRecognitionHandler {
    private recognition: SpeechRecognition | undefined;

    constructor() {
        this.recognition = this.createSpeechRecognition();
        this.initializeEventListeners();
    }
c 
     createSpeechRecognition(): SpeechRecognition | undefined {
        if ('SpeechRecognition' in window) {
            return new window.SpeechRecognition();
        } else if ('webkitSpeechRecognition' in window) {
            return new window.webkitSpeechRecognition();
        } else {
            alert('Not supported in your browser.');
            return undefined;
        }
    }

     initializeEventListeners(): void {
        if (this.recognition) {
            this.recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                document.getElementById('output').textContent = 'Result: ' + transcript;
            };

            this.recognition.onerror = (event) => {
                console.error('Error:', event.error);
            };

            this.recognition.onstart = () => {
                console.log('Speech recognition started');
            };

            this.recognition.onend = () => {
                console.log('Speech recognition ended');
            };

            const startButton = document.getElementById('startButton');
            if (startButton) {
                startButton.addEventListener('click', () => {
                    this.startRecognition();
                });
            }
        }
    }

     startRecognition(): void {
        if (this.recognition) {
            this.recognition.start();
        }
    }
}

export default SpeechRecognitionHandler
// typings/speech-recognition.d.ts

interface SpeechRecognitionEventMap {
  results: SpeechRecognitionEvent;
}

interface SpeechRecognition extends EventTarget {
  // @ts-ignore
  onresult: ((this: SpeechRecognition, ev: SpeechRecognitionEventMap['result']) => any) | null;
  start(): void;
  stop(): void;
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
}

interface SpeechRecognitionEvent extends Event {
  // Burada SpeechRecognitionEvent tipini tanımlayabilirsiniz.
  // İhtiyacınıza bağlı olarak diğer özellikleri ekleyebilirsiniz.
}

declare var SpeechRecognition: {
  prototype: SpeechRecognition;
  new (): SpeechRecognition;
};

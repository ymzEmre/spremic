// Spremic.test.js

import Spremic from '../src/Spremic'

describe('Spremic', () => {
  let spremicInstance

  beforeEach(() => {
    spremicInstance = new Spremic()
  })

  test('startRecognition() should start recognition', () => {
    const startSpy = jest.spyOn(spremicInstance.recognition, 'start')
    spremicInstance.startRecognition()
    expect(startSpy).toHaveBeenCalled()
  })

  test('stopRecognition() should stop recognition', () => {
    const stopSpy = jest.spyOn(spremicInstance.recognition, 'stop')
    spremicInstance.stopRecognition()
    expect(stopSpy).toHaveBeenCalled()
  })

  test('getRecognizedText() should return recognized text', () => {
    const expectedText = 'Hello, Jest!'
    spremicInstance.recognizedText = expectedText
    const result = spremicInstance.getRecognizedText()
    expect(result).toBe(expectedText)
  })

  test('textToSpeech() should speak the given text', () => {
    const speakSpy = jest.spyOn(window.speechSynthesis, 'speak')
    const text = 'Testing with Jest!'
    spremicInstance.textToSpeech(text)
    expect(speakSpy).toHaveBeenCalledWith(expect.any(SpeechSynthesisUtterance))
  })

  test('onRecognitionEndCallback should be called on recognition end', () => {
    const callbackMock = jest.fn()
    spremicInstance.onRecognitionEnd = callbackMock
    spremicInstance.recognition.onend() // Simulate recognition end
    expect(callbackMock).toHaveBeenCalled()
  })

  // You can add more tests based on your requirements
})

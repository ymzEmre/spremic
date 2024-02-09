# Spremic

[![npm version](https://badge.fury.io/js/spremic.svg)](https://badge.fury.io/js/spremic)

## Table of Contents

- [Introduction](#introduction)
- [Motivation](#motivation)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [License](#mit-license)

## Introduction

Spremic is a simple speech recognition api that uses the JavaScript Web speech recognition api. It is designed to be easy to use and to be easily integrated into any project.

Spremic equates to "Speech Recognition Microphone".

## Motivation

I like use to speech recognition api my projects. I am developing this api to make it eaiser to implement and to avoid
having to adjust the inital configurations every time I start a new project.

## Features

- leightweight 6kb minified & gzipped
- Easy to use
- Simple to integrate
- No dependencies
- No need to adjust initial configurations
- No magic

## Installation

```
npm install spremic
```

## Usage

```JavaScript
import { Spremic } from 'spremic'

const Spremic = new Spremic()
```

##### `startRecognition()`

This method starts the speech recognition.

```JavaScript
Spremic.startRecognition()
```

##### `stopRecognition()`

This method stops the speech recognition.

```JavaScript
Spremic.stopRecognition()
```

##### `getRecognizedText()`

This method returns the recognized text.

```JavaScript
const recognizedText = Spremic.getRecognizedText()
```

##### `textToSpeech()`

This method transforms the recognized text into speech.

```JavaScript
Spremic.textToSpeech('Hello World')
```

#### Sample Usage

```JavaScript

const read = async (durationInMilliseconds?: number) => {
  Spremic.startRecognition()

  await new Promise<void>((resolve) => {
    setTimeout(() => {
      Spremic.stopRecognition()
      resolve()
    }, durationInMilliseconds || 5000)
  })

  const recognizedText = Spremic.getRecognizedText()

  console.log('Recognized Text:', recognizedText)

  Spremic.textToSpeech(recognizedText)
}
```

## Contribution

I am open to contributions. Please feel free to open an issue or a pull request.

## License

Copyright (c) 2024 Emre Yilmaz

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

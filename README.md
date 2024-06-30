# AakashCipher

[![npm version](https://img.shields.io/npm/v/aakashcipher)](https://www.npmjs.com/package/aakashcipher)
[![Build Status](https://img.shields.io/travis/username/aakashcipher)](https://travis-ci.org/username/aakashcipher)
[![Downloads](https://img.shields.io/npm/dm/aakashcipher)](https://www.npmjs.com/package/aakashcipher)

A simple module to encode and decode messages with a secret key.

## Features

- **Simple to use**: Encode and decode messages with ease.
- **Secure**: Utilizes a secret key for encoding and decoding.
- **Flexible**: Supports any length of input messages.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Encoding a Message](#encoding-a-message)
  - [Decoding a Message](#decoding-a-message)
- [API](#api)
  - [encodeMessage](#encodemessage)
  - [decodeMessage](#decodemessage)
- [Contributing](#contributing)
- [License](#license)
- [Links](#links)

## Installation

Install the package using npm:

```bash
npm install aakashcipher
```

Usage
Encoding a Message
```bash
const { encodeMessage } = require('aakashcipher');

const data = "Hello, Aakash Kandel. How are you today?";
const secretKey = "Secret123";

try {
    const encodedData = encodeMessage(data, secretKey);
    console.log(encodedData); // Encoded message
} catch (error) {
    console.error(error.message);
}

```
Decoding a Message
```bash

const { decodeMessage } = require('aakashcipher');

const encodedData = "your_encoded_message_here";
const secretKey = "Secret123";

try {
    const decodedData = decodeMessage(encodedData, secretKey);
    console.log(decodedData); // Decoded message
} catch (error) {
    console.error(error.message);
}

```

API
encodeMessage
```bash
encodeMessage(data, secretKey)
```
data: string - The message to encode.
secretKey: string - The secret key used for encoding.
Returns: string - The encoded message.

decodeMessage
```bash
decodeMessage(encodedData, secretKey)
```
encodedData: string - The message to decode.
secretKey: string - The secret key used for decoding.
Returns: string - The decoded message.

Contributing
Contributions are welcome! Please open an issue or submit a pull request.

License
This project is licensed under the ISC License.

Links
GitHub Repository
Issue Tracker

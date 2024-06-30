function encodeMessage(data, secretKey) {
    data = data.toLowerCase();
    if (secretKey.length < 5) {
        throw new Error("Secret must be more than 5 characters");
    }

    let encodemessage = [];

    function masterKeyCode(index) {
        let limit = secretKey.length;
        return secretKey.charCodeAt(index % limit);
    }

    function encodeFunction(code) {
        if (code > 26) {
            code = 97 + code - 26 - 1;
        } else {
            code = 97 + code - 1;
        }
        encodemessage.push(String.fromCharCode(code));
    }

    for (let i = 0; i < data.length; i++) {
        let keycode = masterKeyCode(i);
        let messagecode = data.charCodeAt(i);
        let sumcode = (keycode - 97) + (messagecode - 97) + 2;
        encodeFunction(sumcode);
    }

    return encodemessage.join('');
}

function decodeMessage(encodedData, secretKey) {
    let decodemessage = [];

    function masterKeyCode(index) {
        let limit = secretKey.length;
        return secretKey.charCodeAt(index % limit);
    }

    function decodeFunction(decodecode) {
        decodemessage.push(String.fromCharCode(decodecode + 97 - 1));
    }

    for (let i = 0; i < encodedData.length; i++) {
        let decodekey = masterKeyCode(i);
        let decodesecretkey = encodedData.charCodeAt(i);
        let subcode = (decodesecretkey - 97) - (decodekey - 97);
        if (subcode < 0) {
            subcode += 26;
        }
        decodeFunction(subcode);
    }

    return decodemessage.join('').replace(/:/g, ' ');
}

module.exports = { encodeMessage, decodeMessage };


let data = "hey lalit k cha khabar";
data = data.toLowerCase();
let secretkey = "evefdsafds";

if (secretkey.length < 5) {
    console.log("Secret must be more than 5 character");
    return;

}
function masterkeycode(index) {
    let limit = secretkey.length;
    return secretkey.charCodeAt(index % limit);
}
let encodemessage = [];
let decodemessage = []


function encodefunction(code) {
    if (code > 26) {
        code = 97 + code - 26 - 1;

    }
    else {
        code = 97 + code - 1;
    }
    encodemessage.push(String.fromCharCode(code));
}

//encodig code
for (i = 0; i < data.length; i++) {
    let keycode = masterkeycode(i);
    let messagecode = data.charCodeAt(i);

    let sumcode = (keycode - 97) + (messagecode - 97) + 2;

    encodefunction(sumcode);

}


let joinencodemessage = encodemessage.join('')
console.log(joinencodemessage);





//decoding code

function decodefunction(decodecode) {
    decodemessage.push(String.fromCharCode(decodecode + 97 - 1))

}


for (i = 0; i < encodemessage.length; i++) {
    let decodekey = masterkeycode(i);
    let decodesecretkey = joinencodemessage.charCodeAt(i);

    let subcode = (decodesecretkey - 97) - (decodekey - 97);
    if (subcode < 0) {
        subcode += 26;
    }

    decodefunction(subcode)

}


let normalmsg = decodemessage.join('');
normalmsg = normalmsg.replace(/:/g, ' ');
console.log(normalmsg);


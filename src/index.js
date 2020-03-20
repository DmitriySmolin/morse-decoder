const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    const binaryDictionary = {
        "10": ".",
        "11": "-",
        "00": ""
    };

    let expArr = expr.replace(/(\S{10})/g, "$1,")
        .slice(0, (expr.replace(/(\S{10})/g, "$1,")).length - 1)
        .split(',');

    let word = [];

    cutElem(expArr);

    function cutElem(expArr) {
        let stack = expArr;

        let binaryArr = [];

        for (let i = 0; i < stack.length; i++) {

            if (binaryArr.length === 1) break;

            if (stack[i] === "**********") {
                word.push(' ');
                stack.splice(stack.indexOf(stack[i]), 1)
            };

            if (stack[i] !== "" && stack.length !== 0) {
                binaryArr.push(stack[i]);
                stack.splice(stack.indexOf(stack[i]), 1);
            }
        }

        let binaryCode = binaryArr.join("").match(/.{1,2}/g);;

        let morseCode = "";

        for (let i = 0; i < binaryCode.length; i++) {
            if (binaryCode.length === 0) break;

            morseCode += binaryDictionary[binaryCode[i]];
        }

        word.push(MORSE_TABLE[morseCode]);

        stack.length !== 0 ? cutElem(stack) : stack;
    }
    return word.join("");
}

module.exports = {
    decode
}
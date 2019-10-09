const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    const binaryDictionary = {
        '10': '.',
        '11': '-',
        '00': ''
    };

    const wordsBinary = expr.split('**********');

    let resStr = '';

    for (let word of wordsBinary) {

        const lettersBinary = word.match(/.{1,10}/g);

        let wordAlphabetical = '';

        for (let letter of lettersBinary) {

            const charsBinary = letter.match(/.{1,2}/g);

            let letterMorse = '';

            for (let binaryMorseCode of charsBinary) {

                letterMorse += binaryDictionary[binaryMorseCode];

            }

            wordAlphabetical += MORSE_TABLE[letterMorse];
        }

        resStr += wordAlphabetical + ' ';
    }
    
    return resStr.slice(0, resStr.length - 1);
}

module.exports = {
    decode
}
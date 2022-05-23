const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type) {
    this.type = type;
  }

  encrypt() {
    // console.log('encrypt');
    if (arguments.length < 2 || (typeof arguments[0] != 'string')) {
      throw new Error('Incorrect arguments!')
    }
    const str = arguments[0].toUpperCase();
    const koef = Math.ceil(str.length/arguments[1].length);
    const key = arguments[1].repeat(koef).toUpperCase();
    let keyCounter = 0;
    let result = [];
    // console.log(str);
    // console.log(koef);
    // console.log(key);
    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
        const letterNum = (key.charCodeAt(keyCounter)-65) + (str.charCodeAt(i)-65) + 65;
        // console.log(letterNum)
        if (letterNum > 90) {
          result.push(String.fromCharCode(letterNum-26));
        } else {
          result.push(String.fromCharCode(letterNum));
        }
        keyCounter++;
      } else {
        result.push(str[i])
      }
    }

    if (this.type === false) {
      return result.reverse().join('');
    }

    return result.join('');
  }
  decrypt() {
    // console.log('DEcrypt');
    if (arguments.length < 2 || typeof arguments[0] != 'string') {
      throw new Error('Incorrect arguments!')
    }
    const str = arguments[0];
    const koef = Math.ceil(str.length/arguments[1].length);
    const key = arguments[1].repeat(koef).toUpperCase();
    let keyCounter = 0;
    let result = [];
    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
        const letterNum = (str.charCodeAt(i)-65) - (key.charCodeAt(keyCounter)-65) + 65;
        // console.log(letterNum)
        if (letterNum < 65) {
          result.push(String.fromCharCode(letterNum + 26));
        } else {
          result.push(String.fromCharCode(letterNum));
        }
        keyCounter++;
      } else {
        result.push(str[i])
      }
      // console.log(result);
    }

    if (this.type === false) {
      return result.reverse().join('');
    }


    return result.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};

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
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let encryptedMessage = '';
    let j = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      if (/[A-Z]/.test(char)) {
        const charCode = ((char.charCodeAt(0) - 65) + (key.charCodeAt(j) - 65)) % 26 + 65;
        encryptedMessage += String.fromCharCode(charCode);
        j = (j + 1) % key.length;
      } else {
        encryptedMessage += char;
      }
    }

    return this.direct ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let message = '';
    let j = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      const char = encryptedMessage[i];
      if (/[A-Z]/.test(char)) {
        const charCode = ((char.charCodeAt(0) - 65) - (key.charCodeAt(j) - 65) + 26) % 26 + 65;
        message += String.fromCharCode(charCode);
        j = (j + 1) % key.length;
      } else {
        message += char;
      }
    }

    return this.direct ? message : message.split('').reverse().join('');
  }
}





module.exports = {
  VigenereCipheringMachine
};

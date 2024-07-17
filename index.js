/**
 * Converts each letter of the string to its opposite case.
 * Lowercase letters are converted to uppercase and vice versa.
 *
 * @return {string} The string with each letter's case swapped.
 */
String.prototype.toSwapCase = function() {
  let letter = this.split("");

  for (let i = 0; i < letter.length; i++) {
    if (letter[i] === letter[i].toLowerCase()) {
      letter[i] = letter[i].toUpperCase();
    } else {
      letter[i] = letter[i].toLowerCase();
    }
  }

  return letter.join("");
}

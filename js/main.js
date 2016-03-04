var aLetter = prompt('Enter a letter, darling:');
var aLetterString = aLetter;

for (a = 0; a < 10; a++) {
  document.write(aLetterString);
  document.write('<br>');
  aLetterString += aLetter;

}

export const getRndInteger = (min, max) => {
  let result = 0
  do {
    result = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (result === 0)

  return result
}

/**  
 * Copy-pasted from Stack overflow. Shuffles an array in place. 
 */
export const shuffleArray = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

export const formatToNiceNumber = (number, padding) => {
  let pad = ""
  if (padding) {
    pad = "⠀"  // U+2800 = empty character!!
  }
  if (number < 0) {
    return "−" + Math.abs(number) + pad
  }
  return number
}

/**  
 * Copy-pasted from Stack overflow :)
 */
export const choose = (choices) => {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}
/* 
  Write a function that accepts a string as an arg and capitalizes every other letter, 
  then returns the modified string

  @params: string
  @returns: modified string
*/

const cApItalIzeSes = string => {
  let arr = [...string]
  let outputArr = []
  for (let i = 0; i < arr.length; i++) {
    // ['h', 'e', 'l', 'l', 'o', ' ', 't'] ect
    // don't actually need to do this - brain got odly focused on the whitespace when thinking about the problem 
    if (arr[i] === ' ') {
      outputArr.push(arr[i])
      continue;
    }
    if (i % 2 === 0) {
      outputArr.push(arr[i])
      continue;
    }
    outputArr.push(arr[i].toUpperCase())
  }

  // i overcomplicated this, could just use .join('') but I didn't think of it at the time. 
  let final = outputArr.toLocaleString().replace(/([,])/g,'')
  return final
}

console.log(cApItalIzeSes('hello there'));

// tricky part about this is needing to preserve the whitespace in the string. 
// so add an if statement to see if the current index is == ' ' and then go to next iteration
// "hello there" -> "hElLo ThErE"


// simplier solution

const capitalizeOther = string => {
  let result = ''
  for (let i = 0; i < string.length; i++) {
    result += i % 2 === 0 ? string[i] : string[i].toUpperCase()
  }
  return result
}

console.log(capitalizeOther('hello there'))
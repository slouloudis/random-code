// i did this question wrong initially- found the index of the repeated element instead of returning the element here. 
// leaving it incase useful later.
// function findFirstRepeated(gifts) {
//   let map = new Map()
//   for (let i = 0; i < gifts.length ; i++) {
//     if (map.has(gifts[i])) return map.get(gifts[i])
//     map.set(gifts[i], i)
//   console.log(map)
//   }
//   return -1
// }

// findFirstRepeated([2, 1, 3, 5, 3, 2])
console.log(findFirstRepeated([2, 1, 3, 5, 3, 2]))
console.log(findFirstRepeated([1, 2, 3, 4]))
console.log(findFirstRepeated([5, 1, 5, 1]))

// this ver reutrns the element correctly.
function findFirstRepeated(gifts) {
  let map = new Map()
  for (let i = 0; i < gifts.length ; i++) {
    if (map.has(gifts[i])) return gifts[map.get(gifts[i])]
    map.set(gifts[i], i)
  }
  return -1
}


// loop through array. 
// see if we had a previous id that matched current id in map if so return that index
// set map - id, index
// 
// [2, 1, 3, 5, 3, 2]
// 2, 0
// 1, 1
// 3, 2
// 5, 3
// 3, 4
// 2, 5

//Find the first identification number that has been repeated, where the second occurrence has the smallest index!
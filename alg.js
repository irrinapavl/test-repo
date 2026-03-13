//1
const mostFrequent = (arr) => {
  if (arr.length === 0) return null
  const countObj = {}
  for (let num of arr) {
    countObj[num] = (countObj[num] || 0) + 1;
  }
  const frequency = Object.values(countObj)
  const highest = Math.max(...frequency)
  const countArr = Object.entries(countObj)
  let winner = null
  for (let [num, freq] of countArr) {
    if (freq === highest) winner = num
  }
  return {element: Number(winner), count: highest}
}

console.log(mostFrequent([1, 3, 3, 2, 1, 3, 4, 4, 4, 4, 4, 4, 3]))

//2
const areAnagrams = (str1, str2) => {
  if (str1.length !== str2.length) return false
  const arr1 = [...str1.toLowerCase()].sort()
  const arr2 = [...str2.toLowerCase()].sort()
  return arr1.every((value, index) => value === arr2[index])
}

//console.log(areAnagrams("silent", "tIlens"))

//3
const flattenNested = (arr) => {
  if (arr.length === 0) return arr;
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      return acc.concat(flattenNested(curr))
    } else {
      return acc.concat(curr)
    }
  }, []) 
}

//console.log(flattenNested([[[1, 2], 3, 7], [[2], 5], [[6, [7, [8]], 3]], [2]]))

/*
const flattenArr = (arr) => {
  return arr.reduce((acc, curr) => acc.concat(curr))
}
console.log(flattenArr([[1, 2, 3], [2, 5], [6, 7, 8, 3], [2]]))
*/

//4
const groupBy = (arr, prop) => {
  if (typeof(prop) !== "string") throw new Error("The property must be a string")
  if (prop.length === 0) throw new Error("A property must be specified")
  arr.reduce((acc, person) => {
    const key = person.prop
    if (!acc[key]) acc[key] = []
    acc[key].push(person)
    return acc
  }, {})
}

console.log(groupBy([
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
  { name: "Diana", age: 30 }
], "age"))
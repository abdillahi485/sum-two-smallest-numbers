// Good Luck 💪🏾
function sumTwoSmallestNums(numbers) {  
    let first = Math.min(...numbers)
    numbers.splice(numbers.indexOf(first), 1)
    let second = Math.min(...numbers)
    return first + second
  }


console.log(sumTwoSmallestNums([12, 5, 24, 55, 18]) )
console.log(sumTwoSmallestNums([190, 300, 230, 800]) )
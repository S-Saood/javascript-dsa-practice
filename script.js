//1- ARRAY BY LARA


// ESSENTIAL

// let arr = new Array(5).fill(true)
// console.log(arr)


// let arr = [1, 2, 3, 4]
// arr.push(5)
// arr.pop()
// arr.shift()
// arr.unshift(5)
// console.log(arr)






// 1	Read the first half of an array.

// let arr = [1,2 ,2, 3, 5, 6, , 7, 9, 9]

// for(let i = 0; i < Math.floor(arr.length / 2); i++){
//   console.log(arr[i])
// }




// 2	Read the second half of an array.

// let arr = [1, 2, 3, 5, 6, 4, 7, 9]

// for(let i = Math.floor(arr.length / 2); i < arr.length; i++){
//   console.log(arr[i])
// }






// 3	Read alternate elements starting from the first element.


// let arr = [1, 2, 3, 4, 5, 6,  7, 8, 9]

// for(let i = 0; i < arr.length; i+=2){
//   console.log(arr[i])
// }







// 4	Read the array in reverse order.


// let arr = [1, 2, 3, 4, 5, 6,  7, 8, 9]

// for(let i = arr.length -1; i >= 0; i--){
//   console.log(arr[i])
// }






// 5	Read the first half in reverse.

// let arr = [1, 2, 3, 4, 5, 6,  7, 8, 9]

// for(let i = Math.floor(arr.length / 2)-1; i >= 0; i--){
//   console.log(arr[i])
// }






// 6	Read the second half in reverse.


// let arr = [1, 2, 3, 4, 5, 6,  7, 8, 9]

// for(let i = arr.length -1; i >= Math.floor(arr.length / 2); i--){
//   console.log(arr[i])
// }







// 7	Read alternate elements in reverse.


// let arr = [1, 2, 3, 4, 5, 6,  7, 8, 9]

// for(let i = arr.length -1; i >= 0; i-=2){
//   console.log(arr[i])
// }





// 8	Print the first and last element.

// let arr = [1, 2, 3, 4, 5, 6,  7, 8, 9]

// console.log(arr[0])
// console.log(arr[arr.length -1])







// 9	Print the middle element.


// let arr = [1, 2, 3, 4, 5, 6,  7, 8, 9]

// let middle = Math.floor(arr.length / 2)
// console.log(arr[middle])




// 11	Find the sum of all elements

// let arr = [1, 2, 3, 4, 5, 6,  7, 8, 9]

// let sum = 0

// for(let i = 0; i < arr.length; i++){
//   sum = sum + arr[i]
// }
// console.log(sum)






// 12	Find the average of all elements.


// let arr = [1, 2, 3, 4, 5, 6,  7, 8, 9]
// let sum = 0

// for(let i = 0; i < arr.length; i++){
//   sum = sum + arr[i]
// }
// console.log(sum / arr.length)








// 13	Find the average of the first half.

// let arr = [1, 2, 3, 4, 5, 6,  7, 8, 9]
// let sum = 0

// for(let i = 0; i < Math.floor(arr.length / 2); i++){
//   sum = sum + arr[i]
// }
// console.log(sum / Math.floor(arr.length / 2))





// 13	Find the average of the second half.

// let arr = [1, 2, 3, 4, 5, 6,  7, 8, 9]
// let sum = 0

// let middle = Math.floor(arr.length / 2)

// for(let i = middle; i < arr.length ; i++){
//   sum = sum + arr[i]
// }
// console.log(sum / (arr.length - middle))






// 14	Find whether the left half or right half has the greater sum.

// let arr = [1, 2, 3, 4, 5, 6,  7, 8, 9]
// let leftSum = 0
// let rightSum = 0

// for(let i = 0; i < Math.floor(arr.length / 2); i++){
//   leftSum = leftSum + arr[i]
// }


// for(let i = Math.floor(arr.length / 2); i < arr.length; i++){
//   rightSum = rightSum + arr[i]
// }


// if(leftSum > rightSum){
//   console.log("Left sum is greatest")
// } else {
//   console.log("Right sum is greatest")
// }





// 16	Find the minimum element.

// let arr = [1, 2, 3, 4, 5, 6,  7, 8, 9]

// let minElement = arr[0]

// for(let i = 0; i < arr.length; i++){
//   if(arr[i] < minElement){
//     minElement = arr[i]
//   }
// }

// console.log("Mininum elenent :",minElement)






// 17	Find the maximum element from array

// let arr = [1, 2, 3, 4, 5, 6,  7, 8, 9]

// let maxElement = arr[0]

// for(let i = 0; i < arr.length; i++){
//   if(arr[i] > maxElement){
//     maxElement = arr[i]
//   }
// }

// console.log("Maximum elenent :",maxElement)





// 17.1	Find the second maximum element from array

// let arr = [1, 2, 3, 4, 5, 6,  7, 8, 9]

// let largest = Math.max(arr[0], arr[1])
// let secondLargest = Math.min(arr[0], arr[1])

// for(let i = 2; i < arr.length; i++){
//   if(arr[i] > largest){
//     secondLargest = largest
//     largest = arr[i]
//   }

//   else if(arr[i] > secondLargest && arr[i] < largest){
//     secondLargest = arr[i]
//   }

// }





// 18	Change/update array elements.


// let arr = [1, 2, 3, 4, 5, 6,  7, 8, 9]
// arr[0] = 100

// console.log(arr)





// 19	Swap two elements of an array.

// let arr = [1, 2, 3, 4]
// console.log(arr)

// let temp = arr[0]
//   arr[0] = arr[3]
//   arr[3] = temp


// console.log(arr)






// 20	Left shift by 1.

// let arr = [1, 2, 3, 4, 5, 6,  7, 8, 9]


// for(let i = 0; i < arr.length-1; i++){
//   arr[i] = arr[i + 1]
// }
// console.log(arr)






// 21	Right shift by 1.

// let arr = [1, 2, 3, 4, 5, 6,  7, 8, 9]

// for(let i = arr.length-1; i > 0; i--){
//   arr[i] = arr[i - 1]
// }

// console.log(arr)







// 22	Left rotate by 1.

// let arr = [1, 2, 3, 4, 5, 6,  7, 8, 9]

// let first = arr[0]

// for(let i = 0; i < arr.length-1; i++){
//   arr[i] = arr[i + 1]
// }

// arr[arr.length -1] = first
// console.log(arr)





// 23	Right rotate by 1.

// let arr = [1, 2, 3, 4, 5, 6,  7, 8, 9]
// let last = arr[arr.length-1]

// for(let i = arr.length-1; i >0; i--){
//   arr[i] = arr[i - 1]
// }

// arr[0] = last

// console.log(arr)





// 24	Left shift by 2.

// let arr = [1, 2, 3, 4, 5, 6,  7, 8, 9]

// for(let i = 0; i < arr.length -2; i++){
//   arr[i] = arr[i + 2]
// }

// console.log(arr)




// 25	Left rotate by 2.

// let arr = [1, 2, 3, 4, 5, 6,  7, 8, 9]


// let first = arr[0]
// let second = arr[1]

// for(let i = 0; i < arr.length -2; i++){
//   arr[i] = arr[i + 2]
// }

// arr[arr.length -1] = second
// arr[arr.length -2] = first
// console.log(arr)




// 26	Remove elements from an array (single element, multiple elements, or a range).

// let arr = [1, 2, 3, 4, 5, 6,  7, 8, 9]

// arr.splice(2, 3)

// console.log(arr)





// 28	Insert element(s) at a specific index.

// let arr = [1, 2, 3, 4, 5, 6,  7, 8, 9]

// arr.splice(0, 0, 200, 300, 400)

// console.log(arr)





// 30	Add new element(s) to the end of an array.

// let arr = [1, 2, 3, 4, 5, 6,  7, 8, 9]

// arr.push(2000)  //to last
// arr.unshift(1000) //on start
// arr.pop() //remove last
// arr.shift() //remoeve first


// console.log(arr)




// 31	Merge/concatenate two arrays.


// using spread opr

// let arr = [1, 2, 3, 4]
// let arr2 = [5, 6,  7, 8, 9]

// let arr3 = [...arr, ...arr2]
// console.log(arr3)



// concat

// console.log(arr.concat(arr2))



// push()

// arr.push(...arr2)
// console.log(arr)





// 31  Reverse an entire array.


// let arr = [1, 2, 3, 4, 5, 6,  7, 8, 9]



// using reverse
// console.log(arr.reverse())



// using loop
// let newArr = []
// for(let i = arr.length-1; i >= 0; i--){
//   newArr.push(arr[i])
// }

// console.log(newArr)



// using 2 pointer
// let left = 0
// let right = arr.length-1


// while(left < right){
//   let temp = arr[left]
//   arr[left] = arr[right]
//   arr[right] = temp

//   left++
//   right--
// }

// console.log(arr)




// 32 Sort an array in ascending order.

// let arr = [10, 2, 30, 45, 5, 6,  7, 8, 9]


// arr.sort((a, b)=>a - b)
// console.log(arr)


// // in descending 
// arr.sort((a, b)=> b - a)
// console.log(arr)



// new added questions

// 4	Convert a array into an object.

// let arr = [1, 2, 3, 4, 5]

// let obj = Object.assign(arr)
// console.log(obj)




// let obj = {...arr}

// console.log(obj)




// 33 - all zeros in left 
// let arr = [0, 2, 30, 45, 0, 6,  0, 8, 0]


// for(let i = 0; i < arr.length; i++){
//   for(let j = 0; j < i; j++){
//     if(arr[i] !== 0){
      
//     }
//   }
// }




//---------------END--------------





// STRING BY LARA
//---------------START--------------

// 1 - Read chr in reverse

// let str =  "String"

// using for loop
// for(let i = str.length -1; i >= 0; i--){
//   console.log(str[i])
// }



// Using for of loop
// let newStr = ""
// for(let chr of str){
//   newStr = chr + newStr
// }

// console.log(newStr)


// using reverse
// let str = "string"

// console.log(str.split('').reverse().join(''))





// using 2 pointer
// let str = "string"
// let arr = str.split('')
// let left = 0
// let right = str.length-1


// while(left < right){
//   let temp = arr[left]
//   arr[left] = arr[right]
//   arr[right] = temp

//   left++
//   right--
// }
// console.log(arr)






// 2	Read a particular character.

// let str = "string"

// console.log(str[0])
// console.log(str[4])
// console.log(str[str.length -1])






// 3	Convert a string into an array.

// let str = "string"
// console.log(str.split())







// 4	Convert a string into an object.

// let str = "string"

// let obj = {}

// for(let char of str){
//   obj[char] = true
// }

// console.log(obj)






// 5 - Are the first and last chr are same

// let str = "strings"

// if(str[0] == str[str.length-1]){
//   console.log("Both are equal")
// } else {
//   console.log("Both are not equal")
// }







// 6 Get the chr of a givin index

// let str = "string"

// console.log(str.charAt(0))
// console.log(str.indexOf("s"))







// 7 - Convert to Uppercase
// let str = "string"

// console.log(str.toUpperCase())
// console.log(str.toLowerCase())







// 8 - Case-Sensitive includes() in JavaScript

// let str = "string"
// console.log(str.includes("sp"))








// 9 - check if str is plaimdrome

// let str = "string"

// let original = str

// function isPlaindrome(str) {
//   let newStr = ""
//   for(let i = str.length-1; i >= 0; i--){
//     newStr = newStr + str[i]
//   }

//   return newStr
// }
// console.log(isPlaindrome(str))


// if(newStr === original){
//   console.log("Palindrome")
// } else {
//   console.log("Not a plaindrome")
// }






















//---------------END--------------





// NUMBER BY LARA
//---------------START--------------

//1- print number till n
// let num = 15

// for(let i = 1; i < num + 1; i++){
//   console.log(i)
// }





//2- print number from n to 0
// let num = 15

// for(let i = num; i >= 1; i--){
//   console.log(i)
// }






// 3 - taken a num from inp and print table

// let num = 7

// for(let i = 1; i <= 10; i++){
//   console.log(`${num} * ${i} = ${num * i}`)
// }







// 4 - sum upto n 

// let num = 5

// sum = 0
// for(let i =1; i <= num; i++){
//   sum = sum + i
// }

// console.log("Sum :", sum)








// 5 - factorial upto n 

// let num = 5

// factorial = 1
// for(let i =1; i <= num; i++){
//   factorial = factorial * i
// }

// console.log("factorial :", factorial)








// 6 -sum of even and odd numbers, in a reange

// let a = 10
// let b = 15

// let evenSum = 0
// let oddSum = 0


// if(a > b){
//   let temp = a
//   a = b
//   b = temp
// }


// for(let i = a; i <= b; i++){
//   if(i % 2 == 0){
//     evenSum = evenSum + i
//   } else {
//     oddSum = oddSum + i
//   }
// }

// console.log("Even sum: ",evenSum)
// console.log("Odd sum: ",oddSum)







// 7 - factor of a number

// let num = 50

// for(let i = 1; i <= num; i++){
//   if(num%i == 0){
//     console.log("factor :", i)
//   }
// }




//optimize way n / 2

// let num = 50

// for(let i = 1; i <= num/2; i++){
//   if(num%i == 0){
//     console.log("factor :", i)
//   }
// }
// console.log("factor :", 50)







// // 8 - prime or not
// // Divisible by 1 or itself
// 2 is only one prime no, rest are odds
// let num = 7
// let count = 0

// for(let i = 1; i <= num; i++){
//   if(num%i === 0){
//     count++
//   } 
// }


// if(count === 2){
//   console.log("Prime no")
// } else {
//   console.log("Not prime no")
// }


// ****// 2nd way optimize

// let num = 4
// let count = 0

// for(let i = 1; i <=num / 2; i++){
//   if(num%i ==0){
//     count++
//   }
// }


// if(count === 1){
//   console.log("Prime")
// } else {
//   console.log("Not prime")
// }





















// ----------------------------------


// Type Coercion
// let a = 1
// let b = "1"

// console.log(a - b)
// console.log(a + b) //because + have 2 works

// means runtime pr type change kr deta he





// // 2 - way
// let a = 10
// let b = 20

// a = a + b
// b = a - b
// a = a - b 

// console.log(a, b)




// 3 - way
// let a = 10
// let b = 20

// [a,b] = [b,a]

// console.log(a, b)



// ------------class 

//convert to positive value

// console.log(Math.abs(-10))




// //convert to ceil value

// console.log(Math.ceil(10.1))




// //convert to floor value

// console.log(Math.floor(10.9))




// //convert to round figure

// console.log(Math.round(10.4))




//remove decimal value

// console.log(Math.trunc(10.4000))



//for power
// console.log(Math.pow(10, 3))


// give max value
// console.log(Math.max(10, 15, 89, 78))



// give max value
// console.log(Math.min(10, 15, 89, 78))



//generate random value
// console.log(Math.random())


// toFiexd


// genearting 4 digit OTP
// let otp = Math.floor(1000 + Math.random() * 9999)
// console.log("OTP ->", otp)




//=============IF-ELSE==============

// leap year
// let year = Number(prompt("Enter a year: "))

// if(year % 400 == 0){
//   console.log("Leap year")
// } else if (year % 4 == 0 && year % 100 !== 0){
//   console.log("Leap Year")
// } else {
//   console.log("Not a leap year")
// }





// Discount Amount question

// let shoping = Number(prompt("Enter a shoping amount"))

// let discount = 0
// if(shoping < 5000){
//   console.log("There is no discount, Your payable amount is -", shoping)
// } else if (shoping > 5001 && shoping <= 7000) {
//   console.log("Your discount is 5%, Your payable amount is -", shoping - (shoping * 5 / 100))
// } else if (shoping > 7001 && shoping <= 9000) {
//   console.log("Your discount is 10%, Your payable amount is -", shoping - (shoping * 10 / 100))
// } else if (shoping > 9000) {
//   console.log("Your discount is 20%, Your payable amount is -", shoping - (shoping * 20 / 100))
// } else {
//   console.log("Contact manangement")
// }


//switch

// let day = 

// switch(day){
//   case 1: 
//   console.log("Sunday")
//   break

//   case 2: 
//   console.log("Monday")
//   break

//   case 3: 
//   console.log("Tuesday")
//   break

//   case 4: 
//   console.log("Wetnesday")
//   break
//   case 5: 
//   console.log("Firday")
//   break

//   case 6: 
//   console.log("Saturday")
//   break

//   case 7: 
//   console.log("Sunday")
//   break

//   defaut: 
//   console.log("Invalid input")
//   break

// }





// PRime number

// let n = Number(prompt("Enter a number"))

// let count = 0

// for(let i = 1; i <= n/2; i++){
//   if(n%i == 0){
//     count++
//   }
// }


// if(count === 1) console.log("Prime")
// else console.log("Not prime")


// let num = 1

// while(num < 10){
//   console.log("Hello", num)
//   num++
// }






// calculate bill

// unit 0-100 = 4/unit
// unit 101-200 = 6/unit
// unit 201-400 = 8/unit
// unit more then 400 = 13/unit


// function calculateBill(unit) {
//   let payableAmount = 0

//   if(unit <= 100){
//     payableAmount = unit * 4

//   } else if (unit <= 200){
//     payableAmount = 100 * 4 + (unit - 100) * 6
  
//   } else if(unit <= 400){
//     payableAmount = 100 * 4 + 100 * 6 + (unit - 200) * 8

//   } else {
//     payableAmount = 100 * 4 + 100 * 6 + 200 * 8 + (unit - 400) * 13
//   }
//   return payableAmount
// }


// console.log(calculateBill(400))



// ==============LOOP==============

// Loops are up of 2 types
// Entry control loop - for, while
// Exist control loop - do while



// 1 - factorail of a number

// let num = 5
// let factorail = 1

// for(let i = 1; i <= num; i++){
//   factorail = factorail * i
// }

// console.log(factorail)





// 2 - take a number and print its table

// let num = 5

// for(let i = 1; i <= 10; i++){
//   console.log(`${5} * ${i} = ${5*i}`)
// }






// 3 - sum upto n terms

// let num = 5
// let sum = 0
// for(let i = 1; i <= 5; i++){
//   sum = sum + i
// }

// console.log(sum)



// 4 - print the sum of even and odd in range
// let a = 0
// let b = 40
// let evenSum = 0
// let oddSum = 0

// if(a > b){
//   let temp = a
//   a = b
//   b = temp
// }

// for(let i = a; i <= b; i++){
//   if(i % 2 == 0){
//     evenSum = evenSum + i
//   } else {
//     oddSum = oddSum + i
//   }
// }


// console.log("Even Sum : ", evenSum)
// console.log("Odd Sum : ", oddSum)






// all factors of a number

// let num = 50

// for(let i =1; i <= num; i++){
//   if(num % i == 0){
//     console.log("Factors :", i)
//   }
// }




// prime or not

// let num  = 7

// if(num <= 1){
//   console.log("Not a prime no", num)
// } 

// for(let i = 2; i < num; i++){
//   if(num % i == 0){
//     console.log("Prime no", num)
//     break
//   } else {
//     console.log("Not prime", num)
//     break
//   }
// }





// 2nd way


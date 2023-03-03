///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

// I created variables equal to 0 for each total acreage so that I can change the value later
fujiTotalAcres = 0
galaTotalAcres = 0
pinkTotalAcres = 0

// created a for loop for Fuji to get the total number of acres picked for that one crop by starting at 0 and adding the number at each index
for( let i = 0; i < fujiAcres.length; i++){
    fujiTotalAcres += fujiAcres[i]
} 

// created a for loop for Gala to get the total number of acres picked for that one crop by starting at 0 and adding the number at each index
for( let i = 0; i < galaAcres.length; i++){
    galaTotalAcres += galaAcres[i]
} 

// created a for loop for Gala to get the total number of acres picked for that one crop by starting at 0 and adding the number at each index
for( let i = 0; i < pinkAcres.length; i++){
    pinkTotalAcres += pinkAcres[i]
} 

//Created a variable for total acres that adds all three crops together and prints out the total number acres of all 3 crops for the week
totalAcres = (fujiTotalAcres + galaTotalAcres + pinkTotalAcres)
console.log(totalAcres)



// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

// Created an average daily acres varialble that takes the totalAcre picked and divides it by the number of days that the orchard was picked(7), to get the average acres picked. You can divide it
//by the length of any crop because they were all 7 days long or just by 7
averageDailyAcres = totalAcres / (fujiAcres.length)
console.log(averageDailyAcres)




// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE

// I created a while loop that ran until acresLeft was 0. In order to get acresLeft to change I reassigned it to acresLeft minus avg and then added a day after it did that, on day 1 nine acres
//were completed and so on. After 20 days of subtracting that avg from acresLeft the value was under 0 so when I console logged days the output was 20. 

while(acresLeft > 0){
    acresLeft = acresLeft - averageDailyAcres
    days += 1
}

console.log(days)


// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

// I created empy arrays to be able to push things to later

 let fujiTons = []
 let galaTons = []
 let pinkTons = []

 //I created a variable that would be a number that I could multiply things by and used it for all three crops
let tonsFuji = 6.5

// This for loop goes through each item in fujiAcres and muliplies each index by 6.5 or the variable I created above and reassigns the weightFuji variable then pushes that new weightFuji into
//my fuji tons array. I did the same for gala and pink as well. 
 for(let i = 0; i < fujiAcres.length; i++){
    weightFuji = tonsFuji * fujiAcres[i]
    fujiTons.push(weightFuji)
    
 }

 log.console(fujiTons)


for(let i = 0; i < galaAcres.length; i++){
    weightGala = tonsFuji * galaAcres[i]
    galaTons.push(weightGala)
    
 }

console.log(galaTons)


for(let i = 0; i < pinkAcres.length; i++){
    weightPink = tonsFuji * pinkAcres[i]
    pinkTons.push(weightPink)
    
 }

console.log(pinkTons)



// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 


// set variables = 0 so that I can reassign them later
 let fujiPounds = 0
 let galaPounds = 0
 let pinkPounds = 0


 //I assigned a varibale that I could muliply things by to get the right pounds
 let pounds = 2000


 // Created a for loop that take each item in the Tons arrays and adds them together to have a sum in the Pounds variables
for(let i = 0; i < fujiTons.length; i++){
    fujiPounds += fujiTons[i]
}
fujiPounds = fujiPounds * pounds

for(let i = 0; i < galaTons.length; i++){
    galaPounds += galaTons[i]
}
galaPounds = galaPounds * pounds

for(let i = 0; i < pinkTons.length; i++){
    pinkPounds += pinkTons[i]
}
pinkPounds = pinkPounds * pounds

console.log(fujiPounds)
console.log(galaPounds)
console.log(pinkPounds)





// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE


// I created the profit variable by mulitplying pounds by the price
let fujiProfit = fujiPounds * fujiPrice
let galaProfit = galaPounds * galaPrice
let pinkProfit = pinkPounds * pinkPrice



// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

totalProfit = (fujiProfit + galaProfit + pinkProfit)

console.log(totalProfit)

console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count){
    if(count > 0){
      for(let i = 0; i <= count; i++){
        if( i % 2 != 0) {
            console.log(i);
        }   
      }
    } else {
      for(let i = 0; i >= count; i--){
        if (i % 2 !=0){
            console.log(i);
        }
      }
    }   
}    
printOdds(-21);
printOdds(17);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName,age){
  let aboveSixteen = `Congrats ${userName}, you can drive!`;
  let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`
 if (age<16 || age == undefined){
  console.log(belowSixteen);
 } else {
  console.log(aboveSixteen);
 }
}

checkAge("Ripal",35)
checkAge("Krisha",3)
checkAge("Kripa",38)
checkAge("Trisha")

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function box(x, y){
  if (x > 0 && y > 0){
    return "1";
  } else if (x > 0 && y < 0){
    return "2";
  } else if (x < 0 && y < 0){
    return "3";
  } else if (x < 0 && y > 0){
    return "4";
  } else if (x == 0 && y != 0){
    return "x"; 
  } else if (x != 0 && y == 0){
    return "y";
  } else{
    return "origin";
  }
} 

console.log(box(0, 0));
console.log(box(3, -4));
console.log(box(-3, -23));
console.log(box(6, -11));
console.log(box(-3, 5));
console.log(box(9, -21));
console.log(box(0, -18));
console.log(box(12, 0));

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function triangle(a, b , c){
  if (a == b && b== c){
  return "equilateral triangle";
} else if (a!=b && b==c){
  return "isosceles triangle";
} else if (a!=b && b!=c){
  return "scalene triangle";
} else{
  return "invalid triangle"
}
}

console.log(triangle(3,3,3));
console.log(triangle(1,2,2));
console.log(triangle(1,2,3));
console.log(triangle(1,1,3));

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function dataUsage(planLimit, day, usage){
  let length = 30;
  let average = usage / day;
  let exceedingUsage = planLimit / average;
  let remainingUsage = (planLimit - usage) / (length - day)
  console.log(`${day} days used, ${length - day} day's remaining`);
  console.log(`Average daily use : ${usage / length} GB/day`);
  console.log(`You are EXCEEDING your average daily use by (${average} GB/day),continuing this high usage,you'll exceed your data plan by ${exceedingUsage} GB.`)
  console.log(`To stay below your data plan limit, use no more then ${remainingUsage} GB/day.`)
}
dataUsage(50,23,40)
dataUsage(100,23,20)
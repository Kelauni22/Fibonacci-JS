//Fibonacci JavaScript

// Use a for or while loop to print out the first 40 places of the fibonacci series.
// The series is as follows: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55...
// Each number is the sum of the two numbers before it
// Your output can have each number on its own line




var fib_array = [];
i = 2;
fib_array[0] = 1;
fib_array[1] = 1;

while (i < 40){
	
	fib_array[i] = fib_array[i - 2] + fib_array[i - 1];
	i++;
	
	
}

console.log(fib_array);


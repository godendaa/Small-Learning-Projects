/*

Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one 
of the given numbers differs from the others. Bob observed that one number usually differs from 
the others in evenness. Help Bob — to check his answers, he needs a program that among the given 
numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements 
start from 1 (not 0)

##Examples :

iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

*/

/* Solution (needs to be refined) */

function iqTest(numbers) {
	let numbersArray = numbers.split(" ");
	let i = 0;
	let oddCount = 0;
	let evenCount = 0;
	while (i < numbersArray.length) {
		if (numbersArray[i] % 2 == 0) {
			evenCount++;
		} else {
			oddCount++;
		}
		i++;
	}
	let j = 0;
	if (evenCount >= oddCount) {
		while (numbersArray[j] % 2 == 0) {
			j++;
		}
	} else {
		while (numbersArray[j] % 2 != 0) {
			j++;
		}
	}
	return j + 1;
}

/* Tests */

iqTest("2 4 7 8 10");
iqTest("1 2 2");

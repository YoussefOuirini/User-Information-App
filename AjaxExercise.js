// given an array of values, write a function that finds the index of where the value is located, and if nothing is found, returns -1.
// example: for ['apple', 'orange', 'pineapple']
// 'orange' returns '1'
// 'durian' returns '-1'

// now, write a function that finds all the indexes of where the value is located and returns them in an array, and if nothing is found, returns -1
// example: ['apple', 'orange', 'orange', 'pineapple']
// 'orange' returns [1,2]

var arrayOfVal = ['apple','orange', 'orange', 'pineapple']

function findIndex (value) {
	var found = 0
	for (var i=0; i < arrayOfVal.length; i++){
		if (arrayOfVal[i] === value) {
			found= i
		} 
	}
	if (found >= 0) {
		return found
	} else {
		return -1
	}
}

console.log(findIndex('orange'))

console.log(findIndex('apple'))

console.log(findIndex('pineapple'))

function findAllIndexes (value) {
	var found = 0 ;
	var newArray= [];
	for (var i=0; i < arrayOfVal.length; i++) {
		if (arrayOfVal[i]=== value) {
			newArray.push(i);
			found++
		}
	}
	if (found === 0) {
		return -1
	} else {
		return newArray
	}
}

console.log(findAllIndexes('orange'))

console.log(findAllIndexes('pineapple'))
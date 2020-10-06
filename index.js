'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: This function will return the first input value.
 * 
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 */
function identity(value){
    return value;
}
module.exports.identity = identity;


/**
 * typeof: Return the data-type that the input value is. This 
 *  returns as a string.
 * 
 * @param {*} value Any value.
 * @returns {string} Returns the type of <value> as a string
 */
function typeOf(value){
    if(value === null){
        return 'null';
    }else if(typeof value === 'number'){
        return 'number';
    }else if(typeof value === 'string'){
		return 'string';
	}else if(typeof value === 'undefined'){
		return 'undefined';
	}else if(typeof value === 'boolean'){
		return 'boolean';
	}else if(typeof value === 'function'){
		return 'function';
	}else if(Object.prototype.toString.call(value) === "[object Date]"){
		return 'date';
	}else if(Array.isArray(value)){
		return 'array';
	}else {
		return 'object';
	}
}
module.exports.typeof = typeOf;


 /**
 * first: Takes an <array> and a <number>for an input and returns the first 'nth' 
 * elements in the  input <array>. If the input <array> value is not an array then 
 * return an empty array []. If the input <number> is not given or not a number 
 * then return the first element of the input <array>. 
 * 
 * @param {Array} array: the input value
 * @param {Number} number: number: the 'nth' value of the <array>
 * @returns{*} Returns the first 'nth' element of <array>
 */
function first(array, number){
   let result = [];
        if(!Array.isArray(array)){
            return result;
        }else if(!number){
            return array[0];
        }else if(number < 0){
            return result;
        }else if(number > array.length){
            return array;
        }else {
            result = array.slice(0, number);
        }
    return result;
}
module.exports.first = first;
 
 
/**
 * last: Takes an <array> and a <number> for input and returns the last 'nth' 
 * elements in the input <array>. If the input <array> value is not an array then
 * return an empty array []. If the input <number> is not give or not a number 
 * then return the last element of the input <array>.
 * 
 * @param {Array} array: the input value
 * @param {Number} number: the 'nth' value of the <array>
 * @returns {*} Return the last  'nth' elements of the <array>
 */ 
 function last(array, number){
    let result = [];
		if(!Array.isArray(array)){
			return result;
		}else if(!number){
			let last = array.pop();
			return last;
		}else if(number < 0){
			return result;
		}else if(number > array.length){
			return array;
		}else {
			result = array.slice(Math.max(array.length - number));
		}	
	return result;
 }
module.exports.last = last;


/**
 * indexOf: Takes an <array> and any value <value> as inputs. Returns the first
 * occurrence of <number> within <array>. If the <value> is not in <array>, 
 * then return -1. 
 * 
 * @param {Array} array: input array to be checked
 * @param {*} value The value to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 * 
 */
function indexOf(array, value){
    for(let i = 0; i < array.length; i++){
		if(array[i] === value){
			return i;
		}
	}  
	return -1;
}
module.exports.indexOf = indexOf;


/**
 * contains: Takes an <array> and any <value> as inputs. Returns true if <array>
 * contains <value> inside of it. If <value> is not, return false. 
 * 
 * @param {Array} array: input array to be checked
 * @param {*} value: the value to search for.
 * @returns {boolean} Returns 'true' if <array> contains <value>. 
 *      Return false otherwise. 
 */
function contains(array, value){
 	for(let i = 0; i < array.length; i++){
		if(array[i] === value){
			return true;
		}
	}
	return false;   
}
module.exports.contains = contains;


/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * unique: Designed to take an array as inputs and returns a new array with all
 * of the elements from <array> with any duplicates removed. Leaving the 'unique'
 * elements to remain.
 * 
 * @param {Array} array: input <array> to be checked
 * @returns {Array} Returns a new array with all duplicates removed from <array> 
 */
function unique(array){
    let result = [];
	for(let i = 0; i < array.length; i++){
		if(result.indexOf(array[i]) === -1){
			result.push(array[i]);
		}
	}
	return result;    
}
module.exports.unique = unique;


/**
 * filter: Designed to take a function <func> and an array as inputs and returns
 * a new array for which calling the <func> returns true. Filter will call <func> 
 * for all the elements in <array> using the arguments (e, i, a).
 * 
 * @param {Array} array: input <array> to be checked
 * @param {Function} function: callback function that will be used on the elements
 *      inside of <array>
 * @returns {Array} Returns a new array[] with all elements of <array> that 
 *      passed <func> 
 */
function filter(array, func){
	let result = [];
	array.forEach(function(ele, i, array){
		if(func(ele, i, array)){
			result.push(array[i]);
		}
	});
	return result;    
} 
module.exports.filter = filter;


/**
 * reject: The logical inverse of '_.filter'. This method is designed to return a new 
 * array of elements for which the callback function <func> returns false. reject will
 * call <func> for all elements in <array> using the arguments (e, i, a).
 * 
 * @param {Array} array: input <array> to be checked
 * @param {Function} function: callback function that will be used on the elements
 *      inside of <array>
 * @returns {Array} Returns a new array[] with all elements of <array> that 
 *      failed <func>
 */
function reject(array, func){
    let results = [];
	array.filter(function(ele, i, array){
		if(!array[i] === func(ele, i, array)){
			results.push(array[i]);
		}
	});
	return results;
}
module.exports.reject = reject;

/**
 * partition: Designed to take an array and a function and return a new array of
 * elements split into two sub-arrays. The first sun-array will be elements that
 * the callback function <func> return true for. The second sub-array will be 
 * elements that returned false.
 * 
 * @param {Array} array: array to be partitioned
 * @param {Function} function: callback function that will be used on the elements
 *      inside of <array>
 * @returns {Array} Returns an array that is made up of 2 sub-arrays. One with
 *      truthy values, and one with falsey values. 
 */
function partition(array, func){
	let str1 = [];
	let num1 = [];
	let results = [str1, num1];

	array.filter(function(ele, i, array){
		if(func(ele, i, array)){
			str1.push(array[i]);
		}else {
			num1.push(array[i]);
		}
	});
	return results;   
}
module.exports.partition = partition;


/**
 * map: Designed to take a collection (Array || Object) as inputs. Returns a new
 * array of values by passing each element in the collection through a 
 * callback function <func> using the arguments (ele, i/key, collection).
 * 
 * @param {Array|Object} collection: the Collection to be iterated over
 * @param {Function} function: the callback function used each iteration
 * @returns {Array} Returns the new mapped array.
 */
 function map(collection, func){
 	let result = [];
	if(Array.isArray(collection)){
		collection.each(collection, function(ele, i, array) {
		    result.push(func(collection[i], i, collection));
		});
	}else {
		collection.each(collection, function(value, key, collection){
			func(value, key, collection);
		result.push(func(value, key, collection));
		});
	}
	return result;   
 }
 module.exports.map = map;
 
 
/**
 * pluck: Designed to take an array of objects and a key as inputs. The method will
 * return an array containing the value of <key> for every element in <array>
 * 
 * @param {Array} array: array of objects to be checked
 * @param {Property} key: key to be searched for in <array>
 * @returns {Array} Returns an array containing the value of <key> for every
 *      element in <array>
 */
function pluck(array, key){
    return array.map(function(obj){
        return obj[key];
    });
}
module.exports.pluck = pluck;


/**
 * every: Takes a collection and a callback function as inputs. Returns true if
 * the return value of every element passed through <func> is true. If even one 
 * element is false then it returns false. Lastly, if the function is not 
 * given then every() will return true if element is truthy and false for falsey.
 * 
 * @param {Array|Object} collection: Collection to be checked
 * @param {Function} function: the callback function used each iteration
 * @returns {Boolean} Returns true ONLY if every value passed through <func> is true. 
 */
 function every(collection, func){
	let result = true;
	if(typeof func === 'undefined'){
		collection.each(collection, function(ele, i, collection){
			if(collection[i]){
				result = true;
			}else {
				result = false;
			}
		});
	} else {
		collection.each(collection, function(ele, i, collection){
			if(!(collection[i] && func(ele, i, collection))){
				result = false;
			}
		});
	}
	return result;    
 }
module.exports.every = every;

/**
 * some: Takes a collection and a callback function as inputs. Returns true if
 * the return value of just one element passed through <func> is true. If every 
 * element is false then it returns false. Lastly, if the function is not 
 * given then some() will return true if one element is truthy, otherwise
 * return false.
 * 
 * @param {Array|Object} collection: Collection to be checked
 * @param {Function} function: the callback function used each iteration
 * @returns {Boolean} Returns true if just ONE value passed through <func> is true. 
 */ 
function some(collection, func){
	let result = true;
		if(!func){
			collection.each(collection, function(ele, i, collection){
				if(collection[i]){
					return result;
				}else {
					result = false;
				}
			});
			return result;
		}	
	return !(collection.every(collection, function(ele, i, collection){
		return !func(ele, i, collection);  
	}));
}
module.exports.some = some;


/**
 * reduce: Designed to take a array, a callback function, and a seed as inputs
 * The method will reduce the array to an accumulated result. This is done 
 * through an input callback function <func>. With each successive iteration the return
 * value is used as the 'previous' result for the next iteration. The first iteration
 * will use a <seed> as the initial value. If no <seed> is given, then the first
 * element of the <array> will act as a <seed>. Once all iterations are
 * complete the return value of the final <func> call will be returned.
 * 
 * @param {Array} array: array to be iterated over
 * @param {Function} function: Function used for each iteration
 * @param {*} seed: The initial value
 * @returns {*} Returns the accumulated value of the collection 
 */
function reduce(array, func, initialValue){
	if(initialValue !== undefined){
		let result = initialValue;
		array.each(array, function(ele, i, array){
			result = func(result, ele, i, array);
		});
		return result;
	}else {
		let result = array[0];
		array.each(array, function(ele, i, array) {
		    if( i !== 0) {
		    	result = func(result, ele, i, array);
		    }
		});
		return result; 
	}
}
module.exports.reduce = reduce;


/**
 * extend: Takes two or more objects and copies their key/value pairs to the
 * first object argument <object 1>. Objects should be copied in the order 
 * they are passed in.
 * 
 * @param {Object} object: The destination object
 * @param {...Object} [sources]: source objects
 * @returns {Object} Returns <object 1> with key/value pairs copied to <object 1> 
 */
function extend(object){
	object.each(arguments, function(extendObj){
		for(let key in extendObj){
			object[key] = extendObj[key];
		}
	});
	return object;
}
module.exports.extend = extend;
 

 



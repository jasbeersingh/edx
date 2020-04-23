## Javascript introduction
### Variables
- declared as 
    - var some_variable = <value>;
    - variable type not defined
    - type of value of the variable can be changed at run time
- Types:
    - Number
    - String
    - Boolean
    - Null
    - undefined
- Note that Null and undefined are two separate types. Null means that the variable contains a Null value. While in case of undefined, the variable doesnpt have a value assigned to it yet.
eg: 
```
var a = Null;  // here the variable has been assigned a value
var b;         // Here, the variable does exist, but it doesn't have any value assigned to it.
```

### Arrays 
- Javascript arrays appear to be __somewhat stupid__.
- they don't have a fixed size
- any element could be assigned to any index
eg:
```
var myArray = ["somestring", 12, True]
myArray[4] = "4th element"      // this value will be assigned at the 4th index and 3rd index will be marked as undefined
myArray[-5] = "-5th element"    // while for this, the array will contain a mapping betweeen the index and the value
```
All the statements above are correct in terms of javascript code. __i DONOT UNDERSTAND WHY DO WE HAVE SUCH AN IMPLEMENTATION IN JAVASCRIPT__

- Add/remove element to array
    - push and pop
    ```
    myArray.push(234)       // adds item at the end of the array
    myArray.pop()       // removes item from the end of the array

    ```

    - unshift/shift
    ```
    myArray.unshift('begin')        // Adds item at the start of the array
    myArray.shift()        // removes items from the start of the array
    ```

### Objects
- This, what I suppose, is the JSON object
- it looks similar to python dictionaries, PLUS SOME STUPID BEHAVIOUR
- syntax
```
var person = {
    name: 'Rohan',
    age: 22,
    isMale: True,
    personality: ['loyal', 'patient', 'happy'],
    company: {name: 'edx', id: 2874}
}
```
- Accessing elements
    - person.age
    - person['age']
- PLEASE NOTE, THERE ARE TWO WAYS TO ACCESS THE ELEMENTS OF AN OBJECT
    - using dot(.) operator
        - this one seems logical, since the properties(similar to python dict keys), are not treated as strings and mentioned without any quotes.
    - using the property as an index of the object, but with quotes. NOW THIS PART SEEMS A BIT ODD. When defining the object, the properties are mentioned without any quotes, but to access them, quotes are required or else it'll return undefined error.

### Control Structures

comparison operators
- == double equals operator
    - checks whether the value of two variables is same or not
    - returns true even if the types of the two vars is different
    - eg: 2 == '2' // returns true
        - although here one is a number and other is string
- === triple equals operator 
    - checks for both value as well as type of the variables
    - eg 2 === 2 // returns true
    - 2 == '2'     // returns false 
- rest are similar

### functions
INTERESTINGLY, javascript functions also act as objects. So similar to other objects, they can also be assigned to variables and passed on as arguments as well


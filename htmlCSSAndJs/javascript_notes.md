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

```
var add = function (a,b){
    return a+b
}

console.log(add(2,3))
```

Note that in the above code, we defined a variable as a function


It can be handy if we want a function to be a part of some other object. Such as in the below snippet

```
var John = {
    name: 'John Doe',
    age: 24,
    greeting: function(){
        return 'Hello! Nice to meet you!!'; 
    }
}

console.log(John.greeting());
```

So in the above above, it acts similar to a class object with some values and some methods. But its not exactly the same way as a class object. 

NOTE: I NEED TO STOP LOOKING AT JAVASCRIPT FROM THE GLASSES OF PYTHON OR ANY OTHER LANGUAGE THAT I HAVE LEARNT SO FAR.

- The parameters passed to a function could be
    - passed as value
    - or passed as reference

- When passed as value
    - the original variable doesn't get affected by the modifications that are done to the passed item
    - primitives, such as integers or strings are passed as value
- But when passed as a reference, 
    - the original object too gets affected.
    - objects are passed as reference
- Now this seems to be a bit similar to python

### PROTOTYPE
Now this thing sounds a bit similar to a class, but in javascript perspective its a little bit different.

```
function Person(name, age){
    this.name = name;
    this.age = age;
    this.greeting = function() {
        return 'Hello!! My name is ' + this.name;
    }
}

var John = new Person('John Doe', 24);
var Neha = new Person('Neha S', 22);
```

This prototype seems similar to a class, but its actually declared as a function.
For both the var(i.e. John and Neha), it returns two separate object.
THOUGH, i cannot find any return statement in that. So its some different type of function, indeed.

#### Extending a prototype
And this is what we call inheritance

```
function Student(name, age, school){
    this.__proto__ = new Person(name, age);
    this.school = school;
}
var rohit = new Student('Rohit', 34, 'IIM-L')
rohit instanceof Person     //True
```
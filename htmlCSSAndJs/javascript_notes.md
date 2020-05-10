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

### Strings
- First thing first. THEY ARE IMMUTABLE
- i.e 
```
var animal = 'cat'
console.log(animal.chatAt(0))       // prints c
console.log(animal[0])      // prints c
animal[0] = 'r'             

console.log(animal)     // cat
```
- as can be understood form the above snippet, 
    - the chars of the string can be accessed 
        - like array index
        - using method charAt
    - Both the method use the index to access the char
    - Also, note that the string is immutable
        - so trying to change the value of some index.
        - ODD THING IS THAT IT DOESN'T GIVE ANY ERROR EITHER. So a naive developer would just KEEP THINKING ABOUT WHAT WENT WRONG


__Here is something to understand about the immutable stuff__

When a string is assigned to a variable, the var just points to a memory location where the string reside.
Now, this string will always be immutable. its indexes cannot be changed or updated.
BUT, here is the confusing part that needs to be understood.
The variable can be made to point to a whole new string. That way, it simply starts pointing to a new memory location. 
See the below code

```
animal = animal.toUppercase
console.log(animal)     //prints CAT
```

previously, we could not modify the char at an index because the string is immutable. But here, the function returned a whole new string. so the vaiable now is assigned to a new string. The previous string one continues to be wherever is was and is still immutable. But the variable has been modified and assigned a new string now.

#### Searching Strings

The below functions return BOOLEAN and are all case-sensitive
```
Var msg = "This is a text"
msg.startsWith('This')      // True
msg.startsWith('THIS')      // False 
msg.endsWith('test')        // False
msg.endsWith('text')        // True
msg.includes('is')          // True
msg.include('his')          // True Note that its looking for substrings abd note words
```

Getting index of substring
```
Var msg = "This is a text"

msg.search('is')        // returns  2 ==> returns the index of the first occurance. 
msg.('hell')            // returns -1 ==> string not found
```

### REGEX in strings
it can be used directly with in the search method of a string
```
var msg = "This is a text."
msg.search(/text/)      // 10
msg.search(/Text/)      // -1 case sensitive
msg.search(/Text/i)     // 10 ==> 'i' means case Insensitive
```

- here /text/ is not a string but a regular expression.
- It is an object in itself.
- has its own methods as well

```
var myRegex = /text/
myRegex.test("this is a text")      // True
```


__Some points about the regular expression__

```
var mreg = \[0-9][a-z][0-9]\
```
It matches for
- a single digit
- followd by a single char
- than again a single digit
- this pattern could be anywhere in the 
eg
```
mreg.test('344d9')      // True  ==> 4d9
mreg.test('2wws34')     // False
```
---

```
var mreg = \[0-9][a-z]?[0-9]\
```
- here the digit is optional 
- so there can 0 or 1 digit

``` 
mreg.test('22334')      //True has number followed by 0 digit and another number
mreg.test('jk3e4')      //True 3e4
mreg.test('eer3')       // False
```
---
```
/^[0-9]/   ==> begins with the pattern
/[0-9]$/   ==> ends with the pattern
```
# Using Bootstrap
- based on grid system
- each element of the grid is rearranged depending upon the size of the user screen.
- a block in the grid is created by added the respective elements to a div and adding the div to a "container" class, as shown below.
```
<div class="container"></div>
```

- all the content is organinsed in rows.


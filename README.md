

## mutating
In JavaScript, only objects and arrays are mutable, not primitive values. A mutable object is an object whose state can be modified after it is created. Immutables are the objects whose state cannot be changed once the object is created.
prototype. pop()
prototype. push()
prototype. shift()
prototype. unshift()
prototype. reverse()
prototype. sort()
prototype. splice()



 when changing the data of a created object, all other objects that point to the same address location on the heap are being changed also.

Non-mutating methods do not change the object after the method has been used. The count and index methods are both non-mutating. Count returns the number of occurrences of the argument given but does not change the original string or list.



**Immutable array operations
**Push
**Unshift
**Pop
**Shift
**Removal and inserting of items
**Sort and reverse
**Immutable object operations
**Modify and/or add property
**Remove a property
**Complex structures
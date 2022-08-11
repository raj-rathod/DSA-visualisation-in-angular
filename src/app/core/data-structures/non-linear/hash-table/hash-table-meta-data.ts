import { Helper } from 'src/app/helper/helper';
import { DS } from 'src/app/shared/interfaces/data-structure.interface'

const hashTable = {
    defination:"A <b>hash table</b> is a type of data structure that stores key-value pairs. The key is sent to a hash function that performs arithmetic operations on it. The result (commonly called the hash value or hash) is the index of the key-value pair in the hash table.<br>Hashing is a technique which uses less key comparisons and searches the element in O(n) time in the worst case and in an average case it will be done in O(1) time",
    example: 'assets/ds-image/hash-table.jpg',
    terminologies: [
        "<b>Hash function</b>: As we’ve already seen, the hash function determines the index of our key-value pair. Choosing an efficient hash function is a crucial part of creating a good hash table. You should always ensure that it’s a one-way function, i.e., the key cannot be retrieved from the hash. Another property of a good hash function is that it avoids producing the same hash for different keys",
        "<b>Array</b>: The array holds all the key-value entries in the table. The size of the array should be set according to the amount of data expected"
    ],
    properties: [
        "The hash function is easy to understand and simple to compute",
        "The hash function should produce the keys which will get distributed, uniformly over an array",
        "A number of collisions should be less while placing the data in the hash table",
        "The hash function is a perfect hash function when it uses all the input data"
    ],
    types:[
        "<b> Division method</b>: In this the hash function is dependent upon the remainder of a division. For example:-if the record 52,68,99,84 is to be placed in a hash table and let us take the table size is 10.<br> h(key)=record% table size.",
        "<b>Mid square method</b>: In this method firstly key is squared and then mid part of the result is taken as the index. For example: consider that if we want to place a record of 3101 and the size of table is 1000. So 3101*3101=9616201 i.e. h (3101) = 162 (middle 3 digit)",
        "<b>Digit folding method</b>: In this method the key is divided into separate parts and by using some simple operations these parts are combined to produce a hash key. For example: consider a record of 12465512 then it will be divided into parts i.e. 124, 655, 12. After dividing the parts combine these parts by adding it.<br>H(key)=124+655+12",
    ],
    operations:[
        "<b>Search</b>: Searches an element in a hash table",
        "<b>Insert</b>: inserts an element in a hash table",
        "<b>delete</b>: Deletes an element from a hash table"
    ],
    advantages: [
        "Hash provides better synchronization than other data structures",
        "Hash tables are more efficient than search trees or other data structures",
        "Hash provides constant time for searching, insertion and deletion operations on average",
    ],
    disadvantages: [
        "Hash is inefficient when there are many collisions",
        "Hash collisions are practically not be avoided for large set of possible keys",
        "Hash does not allow null values"
    ],
    applications:[
        "Hash is used in databases for indexing",
        "Hash is used in disk based data structures",
        "In some programming languages like Python, JavaScript hash is used to implement objects",
        "Hash is used for cache mapping for fast access of the data",
        "Hash can be used for password verification",
        "Hash is used in cryptography as a message digest",
        "P1:Check if two arrays are equal or not",
        "P2:The intersection of two unsorted array",
        "P3:Longest Consecutive Sequence",
        "P4:Valid Anagram",
        "P5:Majority Element",
        "P6:Sort characters by frequency",
        "P7:Triplet with 0 sum",
        "P8:First missing positive",
        "P9:Largest subarray with 0 sum",
        "P10:Max points on the straight line"
    ],
    other:[
        "If there is a problem of collision occurs then it can be handled by apply some technique. These techniques are called as collision resolution techniques",
        "<b>Chaining</b>:It is a method in which additional field with data i.e. chain is introduced. A chain is maintained at the home bucket. In this when a collision occurs then a linked list is maintained for colliding data",
        "<b>Linear probing</b>:It is very easy and simple method to resolve or to handle the collision. In this collision can be solved by placing the second record linearly down, whenever the empty place is found. In this method there is a problem of clustering which means at some place block of a data is formed in a hash table",
        "<b>Quadratic probing</b>:This is a method in which solving of clustering problem is done. In this method the hash function is defined by the H(key)=(H(key)+x*x)%table size. Let us consider we have to insert following elements that are:-67, 90,55,17,49",
        "<b>Double hashing</b>: It is a technique in which two hash function are used when there is an occurrence of collision. In this method 1 hash function is simple as same as division method. But for the second hash function there are two important rules which are <br>1.It must never evaluate to zero.<br> 2.Must sure about the buckets, that they are probed",
    ]
}

export const hashTableMetaData: DS = {
    defination: Helper.setHeader(hashTable.defination),
    properties: Helper.setListwithTitleHtml('Hash Funtion Properties', hashTable.properties),
    type: Helper.setListwithTitleHtml('Hash Funtion Types', hashTable.types),
    example: Helper.setExampleImage('Example', hashTable.example),
    operations: Helper.setListwithTitleHtml('Operations', hashTable.operations),
    terminologies: Helper.setListwithTitleHtml('Components of a hash table', hashTable.terminologies),
    other: Helper.setListwithTitleHtml('Collision resolution technique', hashTable.other),
    advantage: Helper.setListwithTitleHtml('Advantages', hashTable.advantages),
    disadvantage: Helper.setListwithTitleHtml('Disadvantages', hashTable.disadvantages),
    applications: Helper.setListwithTitleHtml('Applications', hashTable.applications),
}
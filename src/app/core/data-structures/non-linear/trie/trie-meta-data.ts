import { Helper } from 'src/app/helper/helper';
import { DS } from 'src/app/shared/interfaces/data-structure.interface';

const trie = {
    defination: "Trie is a sorted tree-based data-structure that stores the set of strings. It has the number of pointers equal to the number of characters of the alphabet in each node. It can search a word in the dictionary with the help of the word's prefix. For example, if we assume that all strings are formed from the letters 'a' to 'z' in the English alphabet, each trie node can have a maximum of 26 points <br> Trie is also known as the digital tree or prefix tree. The position of a node in the Trie determines the key with which that node is connected",
    example: 'assets/ds-image/trie.jpg',
    properties: [
        "The root node of the trie always represents the null node",
        "Each child of nodes is sorted alphabetically",
        "Each node can have a maximum of 26 children (A to Z)",
        "Each node (except the root) can store one letter of the alphabet"
    ],
    operations: [
        "Insertion of a node: <br> Every letter of the input key (word) is inserted as an individual in the Trie_node. Note that children point to the next level of Trie nodes.<br>The key character array acts as an index of children.<br>If the present node already has a reference to the present letter, set the present node to that referenced node. Otherwise, create a new node, set the letter to be equal to the present letter, and even start the present node with this new node.<br> The character length determines the depth of the trie",
        "Searching a node in Trie: The searching operation is similar to the insertion operation. The search operation is used to search a key in the trie",
        "Deletion of a node in the Trie:<br> If the key is not found in the trie, the delete operation will stop and exit it.<br>If the key is found in the trie, delete it from the trie."
    ],
    applications: [
        "<b>Spell Checker</b>:Spell checking is a three-step process. First, look for that word in a dictionary, generate possible suggestions, and then sort the suggestion words with the desired word at the top.<br>Trie is used to store the word in dictionaries. The spell checker can easily be applied in the most efficient way by searching for words on a data structure. Using trie not only makes it easy to see the word in the dictionary, but it is also simple to build an algorithm to include a collection of relevant words or suggestions",
        "<b>Auto-complete</b>:Auto-complete functionality is widely used on text editors, mobile applications, and the Internet. It provides a simple way to find an alternative word to complete the word",
        "<b>Browser history</b>:It is also used to complete the URL in the browser. The browser keeps a history of the URLs of the websites you've visited"
    ],
    advantages: [
        "It can be insert faster and search the string than hash tables and binary search trees",
        "It provides an alphabetical filter of entries by the key of the node"
    ],
    disadvantages: [
       "It requires more memory to store the strings",
       "It is slower than the hash table" 
    ]
}

export const trieMetaData: DS = {
    defination: Helper.setHeader(trie.defination),
    properties: Helper.setListwithTitleHtml('Properties', trie.properties),
    example: Helper.setExampleImage("Example", trie.example),
    operations: Helper.setListwithTitleHtml("Operations", trie.operations),
    applications: Helper.setListwithTitleHtml("Applications", trie.applications),
    advantage: Helper.setListwithTitleHtml("Advantages", trie.advantages),
    disadvantage: Helper.setListwithTitleHtml("Disadvantages", trie.disadvantages),
}
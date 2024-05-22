import { InterviewQuestion } from "src/app/shared/interfaces/interview-questions.interface";

export const javascriptInterviewQuestion:InterviewQuestion[] = [
    {
        slug: "what-is-javascript",
        question: "What is JavaScript?",
        answer: `<h3 id="what-is-javascript">What is JavaScript?</h3>
        <p>JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages. It is an interpreted programming language with object-oriented capabilities.</p>
        <p>JavaScript is a single-threaded programming language that we can use for client-side or server-side development. It is a dynamically typed programming language, which means that we don’t care about variable data types while writing the JavaScript code. Also, it contains the control statements, operators, and objects like Array, Math, Data, etc.</p>
        <p>The imperative and declarative is a programming paradigm, and JavaScript follows both.</p>
        <ol>
        <li><p>Imperative JavaScript − In imperative JavaScript, we write code in the manner that the code describes the steps to get the output. So, we are concerned about the code execution flow and output both. For example, to sum all array elements, if we write code for loop, it explains each step to get the sum.</p>
        </li>
        <li><p>Declarative JavaScript − In declarative JavaScript, we don&#39;t need to worry about execution flow, but we should get the correct output at the end. For example, we use a built-in array.reduce() method to get a sum of array elements. Here, we don’t concern about how reduce() method is implemented in the library.</p>
        </li>
        </ol>
        `
    },{
        slug: "why-do-we-call-javascript-as-dynamic-language",
        question: "Why do we call JavaScript as a dynamic language",
        answer: `<h3 id="why-do-we-call-javascript-as-dynamic-language">Why do we call JavaScript as a dynamic language</h3>
        <p>JavaScript is a loosely typed or a dynamic language because variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned/reassigned with values of all types.</p>
        <pre><code class="language-javascript">
    let age = 50; // age is a number now
    age = "old"; // age is a string now
    age = true; // age is a boolean
    </code></pre>
        `
    },  
    {
        slug: "why-is-javascript-treated-as-single-threaded",
        question: "Why is JavaScript treated as Single threaded",
        answer: `
    <h3>Why is JavaScript treated as Single threaded</h3>
    <p>JavaScript is a single-threaded language. This is because the language specification does not allow the programmer to write code so that the interpreter can run parts of it in parallel in multiple threads or processes. Whereas languages like Java, Go, and C++ can make multi-threaded and multi-process programs.</p>
        `
    },  
    {
        slug: "how-javascript-runs-in-the-browser",
        question: "How javascript runs in the browser",
        answer: `<h3 id="how-javascript-runs-in-the-browser">How javascript runs in the browser</h3>
        <p>JavaScript runs in the browser through a combination of processes, including parsing, compiling, and executing code. Here&#39;s a simplified overview of how it works:</p>
        <ol>
        <li><p><strong>Parsing</strong>: When a web page is loaded in a browser, the browser&#39;s rendering engine parses the HTML and builds the Document Object Model (DOM) tree. While parsing the HTML, when the browser encounters a <code>&lt;script&gt;</code> tag with JavaScript code inside, it starts parsing that JavaScript code.</p>
        </li>
        <li><p><strong>Lexical Analysis</strong>: The parser breaks down the JavaScript code into tokens, which are the smallest units of the language, such as keywords, identifiers, operators, and punctuation.</p>
        </li>
        <li><p><strong>Abstract Syntax Tree (AST) Generation</strong>: The parser then constructs an Abstract Syntax Tree (AST) from the tokens. The AST represents the syntactic structure of the JavaScript code.</p>
        </li>
        <li><p><strong>Compilation</strong>: The browser&#39;s JavaScript engine compiles the JavaScript code from the AST into machine code. Modern JavaScript engines like V8 (used in Chrome), SpiderMonkey (used in Firefox), and JavaScriptCore (used in Safari) employ various optimization techniques during this compilation process, such as just-in-time (JIT) compilation.</p>
        </li>
        <li><p><strong>Execution</strong>: Finally, the compiled code is executed by the browser&#39;s JavaScript engine. The engine interacts with the browser&#39;s runtime environment, including the DOM, CSS Object Model (CSSOM), and other browser APIs, to manipulate the web page&#39;s content, respond to user interactions, and perform other tasks.</p>
        </li>
        </ol>
        <p>During execution, JavaScript can interact with the DOM, make network requests, handle events, and perform various other actions, enabling dynamic and interactive behavior in web applications.</p>
        `
    }, {
        slug: "explain-compiler-interpreter-and-just-in-time-jit-compiler",
        question: "Explain compiler, interpreter and Just-In-Time (JIT) compiler",
        answer: `<h3 id="explain-compiler-interpreter-and-just-in-time-jit-compiler">Explain compiler, interpreter and Just-In-Time (JIT) compiler</h3>
        <ol>
        <li><p><strong>Compiler</strong>: A compiler is a program that translates source code written in a high-level programming language (like C, C++, Java, etc.) into machine code or another lower-level form that can be executed directly by the computer&#39;s hardware. The translation process involves several stages, including lexical analysis, syntax analysis, semantic analysis, optimization, and code generation. Once compiled, the resulting machine code can be executed repeatedly without further translation.</p>
        </li>
        <li><p><strong>Interpreter</strong>: An interpreter is another type of program that executes code written in a high-level programming language. However, unlike a compiler, an interpreter translates and executes the source code line by line or statement by statement, without producing a separate executable file. Interpreters typically perform parsing, analysis, and execution concurrently. This makes them slower than compilers since they need to interpret the code every time it runs.</p>
        </li>
        <li><p><strong>Just-In-Time (JIT) Compiler</strong>: A JIT compiler combines features of both compilers and interpreters. It translates high-level code into machine code at runtime, just before executing it. This allows the JIT compiler to optimize the code based on runtime information, potentially leading to better performance compared to traditional interpreters. JIT compilation is commonly used in virtual machines for languages like Java (JVM), C# (.NET), and JavaScript (V8 engine in Chrome). The JIT compiler strikes a balance between the speed of interpretation and the efficiency of compilation.</p>
        </li>
        </ol>
        `
    },{
        slug: "what-is-an-event-loop",
        question: "What is an event loop",
        answer: `<h3 id="what-is-an-event-loop">What is an event loop</h3>
        <p>The event loop is a process that continuously monitors both the call stack and the event queue and checks whether or not the call stack is empty. If the call stack is empty and there are pending events in the event queue, the event loop dequeues the event from the event queue and pushes it to the call stack. The call stack executes the event, and any additional events generated during the execution are added to the end of the event queue.</p>
        <p><strong>Note:</strong> The event loop allows Node.js to perform non-blocking I/O operations, even though JavaScript is single-threaded, by offloading operations to the system kernel whenever possible. Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background.</p>
        <p> <img class='img-fluid col-md-5' src="assets/javascript/Javascript-event-loop.png" alt="Screenshot"></p>
        `
    },{
        slug: "what-is-call-stack",
        question: "What is call stack",
        answer: `<h3 id="what-is-call-stack">What is call stack</h3>
        <p> Call Stack is a data structure for javascript interpreters to keep track of function calls(creates execution context) in the program. It has two major actions,</p>
        <ol>
        <li>Whenever you call a function for its execution, you are pushing it to the stack.</li>
        <li>Whenever the execution is completed, the function is popped out of the stack.</li>
        </ol>
        <p> Let&#39;s take an example and it&#39;s state representation in a diagram format</p>
        <pre><code class="language-javascript">
        function hungry() {
            eatFruits();
        }

        function eatFruits() {
            return &quot;I&#39;m eating fruits&quot;;
        }
        
        // Invoke the 'hungry' function
        hungry();
        </code></pre>
        <p> The above code processed in a call stack as below,</p>
        <ol>
        <li>Add the <code>hungry()</code> function to the call stack list and execute the code.</li>
        <li>Add the <code>eatFruits()</code> function to the call stack list and execute the code.</li>
        <li>Delete the <code>eatFruits()</code> function from our call stack list.</li>
        <li>Delete the <code>hungry()</code> function from the call stack list since there are no items anymore.</li>
        </ol>
        <p> <img class='img-fluid col-md-5' src="assets/javascript/call-stack.png" alt="Screenshot"></p>
        `
    },{
        slug: "what-is-an-event-queue",
        question: "What is an event queue",
        answer: `<h3 id="what-is-an-event-queue">What is an event queue</h3>
        <p> The event queue follows the queue data structure. It stores async callbacks to be added to the call stack. It is also known as the Callback Queue or Macrotask Queue.</p>
        <p> Whenever the call stack receives an async function, it is moved into the Web API. Based on the function, Web API executes it and awaits the result. Once it is finished, it moves the callback into the event queue (the callback of the promise is moved into the microtask queue).</p>
        <p> The event loop constantly checks whether or not the call stack is empty. Once the call stack is empty and there is a callback in the event queue, the event loop moves the callback into the call stack. But if there is a callback in the microtask queue as well, it is moved first. The microtask queue has a higher priority than the event queue.</p>
        `
    },
    {
        slug: "what-is-heap",
        question: "What is heap",
        answer: `<h3 id="what-is-heap">What is heap</h3>
        <p>Heap (or memory heap) is the memory location where objects are stored when we define variables. This is the place where all memory allocations and de-allocations take place. Both heap and call-stack are two containers of JS runtime. Whenever runtime comes across variables and function declarations in the code, it stores them in the Heap.</p>
        <p><img class='img-fluid col-md-4' src="assets/javascript/heap.png" alt="Screenshot"></p>
        `
    },
    {
        slug: "what-is-an-event-table",
        question: "What is an event table",
        answer: `<h3 id="what-is-an-event-table">What is an event table</h3>
        <p>Event Table is a data structure that stores and keeps track of all the events which will be executed asynchronously like after some time interval or after the resolution of some API requests. Whenever you call a <code>setTimeout</code> function or invoke async operation, it is added to the Event Table. It doesn't execute functions on its own. The main purpose of the event table is to keep track of events and send them to the Event Queue as shown in the below diagram.</p>
        <p><img class='img-fluid col-md-4' src="assets/javascript/event-table.png" alt="Screenshot"></p>
        `
    },    
    {
        slug: "what-is-scope-in-javascript",
        question: "What is scope in javascript",
        answer: `<h3 id="what-is-scope-in-javascript">What is scope in javascript</h3>
        <p>Scope is the accessibility of variables, functions, and objects in some particular part of your code during runtime. In other words, scope determines the visibility of variables and other resources in areas of your code.</p>
        `
    },{
        slug: "what-is-the-purpose-of-the-let-keyword",
        question: "What is the purpose of the let keyword",
        answer: `<h3 id="what-is-the-purpose-of-the-let-keyword">What is the purpose of the let keyword</h3>
        <p>The <code>let</code> statement declares a <strong>block scope local variable</strong>. Hence the variables defined with let keyword are limited in scope to the block, statement, or expression on which it is used. Whereas variables declared with the <code>var</code> keyword used to define a variable globally, or locally to an entire function regardless of block scope.</p>
        <p>Let's take an example to demonstrate the usage,</p>
        <pre><code class="language-javascript">
    let counter = 30;
    if (counter === 30) {
        let counter = 31;
        console.log(counter); // 31
    }
    console.log(counter); // 30 (because the variable in if block won't exist here)
        </code></pre>
        `
    },{
        slug: "what-is-the-difference-between-let-and-var",
        question: "What is the difference between let and var",
        answer: `<h3 id="what-is-the-difference-between-let-and-var">What is the difference between let and var</h3>
        <p>You can list out the differences in a tabular format</p>
        <table class="table table-bordered">
        <thead>
        <tr>
        <th>var</th>
        <th>let</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>It has been available from the beginning of JavaScript</td>
        <td>Introduced as part of ES6</td>
        </tr>
        <tr>
        <td>It has function scope</td>
        <td>It has block scope</td>
        </tr>
        <tr>
        <td>Variables will be hoisted</td>
        <td>Hoisted but not initialized</td>
        </tr>
        </tbody>
        </table>
        <p>Let's take an example to see the difference,</p>
        <pre><code class="language-javascript">
    function userDetails(username) {
        if (username) {
            console.log(salary); // undefined due to hoisting
            console.log(age); // ReferenceError: Cannot access 'age' before initialization
            let age = 30;
            var salary = 10000;
        }
        console.log(salary); //10000 (accessible due to function scope)
        console.log(age); //error: age is not defined(due to block scope)
    }
    userDetails("John");
        </code></pre>
        `
    },
    {
        slug: "what-are-global-variables",
        question: "What are global variables",
        answer: `<h3 id="what-are-global-variables">What are global variables</h3>
        <p>Global variables are those that are available throughout the length of the code without any scope. The <code>var</code> keyword is used to declare a local variable but if you omit it then it will become a global variable.</p>
        <pre><code class="language-javascript">
    msg = "Hello"; // var is missing, it becomes global variable
        </code></pre>
        `
    },{
        slug: "what-are-the-problems-with-global-variables",
        question: "What are the problems with global variables",
        answer: `<h3 id="what-are-the-problems-with-global-variables">What are the problems with global variables</h3>
        <p>The problem with global variables is the conflict of variable names of local and global scope. It is also difficult to debug and test the code that relies on global variables.</p>
        `
    },{
        slug: "what-is-the-temporal-dead-zone",
        question: "What is the Temporal Dead Zone",
        answer: `<h3 id="what-is-the-temporal-dead-zone">What is the Temporal Dead Zone</h3>
        <p>The Temporal Dead Zone is a behavior in JavaScript that occurs when declaring a variable with the <code>let</code> and <code>const</code> keywords, but not with <code>var</code>. In ECMAScript 6, accessing a <code>let</code> or <code>const</code> variable before its declaration (within its scope) causes a <code>ReferenceError</code>. The time span when that happens, between the creation of a variable’s binding and its declaration, is called the temporal dead zone.</p>
        <p>Let's see this behavior with an example,</p>
    <pre><code class="language-javascript">
    function somemethod() {
      console.log(counter1); // undefined
      console.log(counter2); // ReferenceError
      var counter1 = 1;
      let counter2 = 2;
    }
    </code></pre>
        `
    },{
        slug: "what-is-hoisting",
        question: "What is Hoisting",
        answer: `<h3 id="what-is-hoisting">What is Hoisting</h3>
        <p>Hoisting is a JavaScript mechanism where variables, function declarations, and classes are moved to the top of their scope before code execution. Remember that JavaScript only hoists declarations, not initialization.</p>
        <p>Let's take a simple example of variable hoisting,</p>
    <pre><code class="language-javascript">
    console.log(message); //output : undefined
    var message = "The variable Has been hoisted";
    </code></pre>
        <p>The above code looks like as below to the interpreter,</p>
    <pre><code class="language-javascript">
    var message;
    console.log(message);
    message = "The variable Has been hoisted";
    </code></pre>
        <p>In the same fashion, function declarations are hoisted too</p>
    <pre><code class="language-javascript">
    message("Good morning"); //Good morning
    
    function message(name) {
      console.log(name);
    }
    </code></pre>
        <p>This hoisting makes functions to be safely used in code before they are declared.</p>
        `
    },{
        slug: "how-do-you-redeclare-variables-in-a-switch-block-without-an-error",
        question: "How do you redeclare variables in a switch block without an error",
        answer: `<h3 id="how-do-you-redeclare-variables-in-a-switch-block-without-an-error">How do you redeclare variables in a switch block without an error</h3>
        <p>If you try to redeclare variables in a <code>switch block</code> then it will cause errors because there is only one block. For example, the below code block throws a syntax error as below,</p>
    <pre><code class="language-javascript">
    let counter = 1;
    switch (x) {
      case 0:
        let name;
        break;
    
      case 1:
        let name; // SyntaxError for redeclaration.
        break;
    }
    </code></pre>
        <p>To avoid this error, you can create a nested block inside a case clause and create a new block scoped lexical environment.</p>
        <pre><code class="language-javascript">
    let counter = 1;
    switch (x) {
      case 0: {
        let name;
        break;
      }
      case 1: {
        let name; // No SyntaxError for redeclaration.
        break;
      }
    }
    </code></pre>
        `
    },{
        slug: "is-that-possible-to-use-expressions-in-switch-cases",
        question: "Is that possible to use expressions in switch cases?",
        answer: `
    <h3>Is that possible to use expressions in switch cases?</h3>
    <p>You might have seen expressions used in switch condition but it is also possible to use for switch cases by assigning true value for the switch condition. Let's see the weather condition based on temperature as an example:</p>
    
    <pre><code class="language-javascript">
    const weather = (function getWeather(temp) {
      switch (true) {
        case temp < 0:
          return "freezing";
        case temp < 10:
          return "cold";
        case temp < 24:
          return "cool";
        default:
          return "unknown";
      }
    })(10);
    </code></pre>
        `
    },
    
    {
        slug: "what-is-the-output-of-below-for-loops",
        question: "What is the output of below for loops",
        answer: `<h3 id="what-is-the-output-of-below-for-loops">What is the output of below for loops</h3>
    <pre><code class="language-javascript">
    for (var i = 0; i &lt; 4; i++) {
      // global scope
      setTimeout(() =&gt; console.log(i));
    }
    
    for (let i = 0; i &lt; 4; i++) {
      // block scope
      setTimeout(() =&gt; console.log(i));
    }
    </code></pre>
        <p>The output of the above for loops is <code>4 4 4 4</code> and <code>0 1 2 3</code></p>
        <p><strong>Explanation:</strong> Due to the event queue/loop of JavaScript, the <code>setTimeout</code> callback function is called after the loop has been executed. Since the variable <code>i</code> is declared with the <code>var</code> keyword, it became a global variable and the value was equal to 4 using iteration when the time <code>setTimeout</code> function is invoked. Hence, the output of the first loop is <code>4 4 4 4</code>.</p>
        <p>Whereas in the second loop, the variable <code>i</code> is declared as the <code>let</code> keyword, it becomes a block scoped variable and it holds a new value (0, 1, 2, 3) for each iteration. Hence, the output of the second loop is <code>0 1 2 3</code>.</p>
        `
    },{
        slug: "can-i-redeclare-let-and-const-variables",
        question: "Can I redeclare let and const variables",
        answer: `<h3 id="can-i-redeclare-let-and-const-variables">Can I redeclare let and const variables</h3>
        <p>No, you cannot redeclare let and const variables. If you do, it throws below error</p>
        <pre><code class="language-bash">Uncaught SyntaxError: Identifier 'someVariable' has already been declared
    </code></pre>
        <p><strong>Explanation:</strong> The variable declaration with <code>var</code> keyword refers to a function scope and the variable is treated as if it were declared at the top of the enclosing scope due to the hoisting feature. So all the multiple declarations contributing to the same hoisted variable without any error. Let's take an example of re-declaring variables in the same scope for both <code>var</code> and <code>let/const</code> variables.</p>
        <pre><code class="language-javascript">
    var name = "John";
    function myFunc() {
      var name = "Nick";
      var name = "Abraham"; // Re-assigned in the same function block
      alert(name); // Abraham
    }
    myFunc();
    alert(name); // John
    </code></pre>
        <p>The block-scoped multi-declaration throws a syntax error,</p>
        <pre><code class="language-javascript">
    let name = "John";
    function myFunc() {
      let name = "Nick";
      let name = "Abraham"; // Uncaught SyntaxError: Identifier 'name' has already been declared
      alert(name);
    }
    
    myFunc();
    alert(name);
    </code></pre>
        `
    },{
        slug: "what-is-the-output-of-below-function-calls",
        question: "What is the output of below function calls",
        answer: `<h3 id="what-is-the-output-of-below-function-calls">What is the output of below function calls</h3>
        <p><strong>Code snippet:</strong></p>
        <pre><code class="language-javascript">
    const circle = {
      radius: 20,
      diameter() {
        return this.radius * 2;
      },
      perimeter: () =&gt; 2 * Math.PI * this.radius,
    };
    </code></pre>
    <pre><code class="language-javascript">
    console.log(circle.diameter());
    console.log(circle.perimeter());
    </code></pre>
        <p><strong>Output:</strong></p>
        <p>The output is <code>40</code> and <code>NaN</code>. Remember that <code>diameter</code> is a regular function, whereas the value of <code>perimeter</code> is an arrow function. The <code>this</code> keyword of a regular function (i.e., <code>diameter</code>) refers to the surrounding scope, which is a <code>circle</code> object. Whereas the <code>this</code> keyword of <code>perimeter</code> function refers to the surrounding scope, which is a <code>window</code> object. Since there is no <code>radius</code> property on <code>window</code> objects, it returns an <code>undefined</code> value, and the multiplication of <code>undefined</code> and <code>Math.PI</code> results in <code>NaN</code> (Not a Number) value.</p>
        `
    },{
        slug: "what-are-the-differences-between-undeclared-and-undefined-variables",
        question: "What are the differences between undeclared and undefined variables",
        answer: `<h3 id="what-are-the-differences-between-undeclared-and-undefined-variables">What are the differences between undeclared and undefined variables</h3>
        <p>Below are the major differences between undeclared (not defined) and undefined variables,</p>
        <table class="table table-bordered">
        <thead>
        <tr>
        <th>undeclared</th>
        <th>undefined</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>These variables do not exist in a program and are not declared</td>
        <td>These variables declared in the program but have not assigned any value</td>
        </tr>
        <tr>
        <td>If you try to read the value of an undeclared variable, then a runtime error is encountered</td>
        <td>If you try to read the value of an undefined variable, an undefined value is returned.</td>
        </tr>
        </tbody>
        </table>
        `
    },{
        slug: "what-is-the-difference-between-null-and-undefined",
        question: "What is the difference between null and undefined",
        answer: `
        <h3 id="difference-between-null-and-undefined">What is the difference between null and undefined</h3>
        <p>Below are the main differences between null and undefined:</p>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Null</th>
              <th>Undefined</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>It is an assignment value which indicates that variable points to no object.</td>
              <td>It is not an assignment value where a variable has been declared but has not yet been assigned a value.</td>
            </tr>
            <tr>
              <td>Type of null is object</td>
              <td>Type of undefined is undefined</td>
            </tr>
            <tr>
              <td>The null value is a primitive value that represents the null, empty, or non-existent reference.</td>
              <td>The undefined value is a primitive value used when a variable has not been assigned a value.</td>
            </tr>
            <tr>
              <td>Indicates the absence of a value for a variable</td>
              <td>Indicates absence of variable itself</td>
            </tr>
            <tr>
              <td>Converted to zero (0) while performing primitive operations</td>
              <td>Converted to NaN while performing primitive operations</td>
            </tr>
          </tbody>
        </table>
        `
    },{
        slug: "what-are-primitive-data-types",
        question: "What are primitive data types",
        answer: `
        <h3 id="primitive-data-types">What are primitive data types</h3>
        <p>A primitive data type is data that has a primitive value (which has no properties or methods). There are 7 types of primitive data types:</p>
        <ol>
          <li>string</li>
          <li>number</li>
          <li>boolean</li>
          <li>null</li>
          <li>undefined</li>
          <li>bigint</li>
          <li>symbol</li>
        </ol>
        `
    },{
        slug: "what-are-wrapper-objects",
        question: "What are wrapper objects",
        answer: `
        <h3 id="wrapper-objects">What are wrapper objects</h3>
        <p>Primitive Values like string, number, and boolean don't have properties and methods, but they are temporarily converted or coerced to an object (Wrapper object) when you try to perform actions on them. For example, if you apply <code>toUpperCase()</code> method on a primitive string value, it does not throw an error but returns uppercase of the string.</p>
        <pre><code class="language-javascript">
    let name = "john";
    
    console.log(name.toUpperCase()); // Behind the scenes treated as console.log(new String(name).toUpperCase());
        </code></pre>
        <p>i.e., Every primitive except null and undefined have Wrapper Objects and the list of wrapper objects are String, Number, Boolean, Symbol, and BigInt.</p>
        `
    },{
        slug: "what-is-the-difference-between-isnan-and-number-isnan",
        question: "What is the difference between isNaN and Number.isNaN?",
        answer: `
    <h3>What is the difference between isNaN and Number.isNaN?</h3>
    <ol>
      <li><strong>isNaN:</strong> The global function <code>isNaN</code> converts the argument to a Number and returns true if the resulting value is NaN.</li>
      <li><strong>Number.isNaN:</strong> This method does not convert the argument. But it returns true when the type is a Number and value is NaN.</li>
    </ol>
    
    <p>Let's see the difference with an example:</p>
    
    <pre><code class="language-javascript">
    isNaN('hello');   // true
    Number.isNaN('hello'); // false
    </code></pre>
        `
    }    
    ,{
        slug: "how-to-detect-primitive-or-non-primitive-value-type",
        question: "How do you detect primitive or non-primitive value type",
        answer: `
        <h3 id="how-to-detect-primitive-or-non-primitive-value-type">How do you detect primitive or non-primitive value type</h3>
        <p>In JavaScript, primitive types include boolean, string, number, BigInt, null, Symbol, and undefined. Whereas non-primitive types include the Objects. But you can easily identify them with the below function:</p>
        <pre><code class="language-javascript">
    var myPrimitive = 30;
    var myNonPrimitive = {};
    function isPrimitive(val) {
      return Object(val) !== val;
    }
    
    isPrimitive(myPrimitive);
    isPrimitive(myNonPrimitive);
        </code></pre>
        <p>If the value is a primitive data type, the Object constructor creates a new wrapper object for the value. But If the value is a non-primitive data type (an object), the Object constructor will give the same object.</p>
        `
    },{
        slug: "what-is-pass-by-value-and-pass-by-reference",
        question: "What is pass by value and pass by reference?",
        answer: `
        <h3 id="pass-by-value-and-pass-by-reference">What is pass by value and pass by reference?</h3>
        <p>Pass-by-value creates a new space in memory and makes a copy of a value. Primitives such as string, number, boolean etc will actually create a new copy. Hence, updating one value doesn't impact the other value. i.e., The values are independent of each other.</p>
        <pre><code class="language-javascript">
    let a = 5;
    let b = a;
    
    b++;
    console.log(a, b); // 5, 6
        </code></pre>
        <p>In the above code snippet, the value of <code>a</code> is assigned to <code>b</code> and the variable <code>b</code> has been incremented. Since there is a new space created for variable <code>b</code>, any update on this variable doesn't impact the variable <code>a</code>.</p>
        <p>Pass by reference doesn't create a new space in memory but the new variable adopts a memory address of an initial variable. Non-primitives such as objects, arrays, and functions get the reference of the initial variable. i.e., updating one value will impact the other variable.</p>
        <pre><code class="language-javascript">
    let user1 = {
      name: "John",
      age: 27,
    };
    let user2 = user1;
    user2.age = 30;
    
    console.log(user1.age, user2.age); // 30, 30
        </code></pre>
        <p>In the above code snippet, updating the <code>age</code> property of one object will impact the other property due to the same reference.</p>
        `
    },
    {
        slug: "what-are-the-differences-between-primitives-and-non-primitives",
        question: "What are the differences between primitives and non-primitives?",
        answer: `
        <h3 id="differences-between-primitives-and-non-primitives">What are the differences between primitives and non-primitives?</h3>
        <p>JavaScript language has both primitives and non-primitives but there are few differences between them as below:</p>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Primitives</th>
              <th>Non-primitives</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>These types are predefined</td>
              <td>Created by developer</td>
            </tr>
            <tr>
              <td>These are immutable</td>
              <td>Mutable</td>
            </tr>
            <tr>
              <td>Compare by value</td>
              <td>Compare by reference</td>
            </tr>
            <tr>
              <td>Stored in Stack</td>
              <td>Stored in heap</td>
            </tr>
            <tr>
              <td>Contain certain value</td>
              <td>Can contain NULL too</td>
            </tr>
          </tbody>
        </table>
        `
    },{
        slug: "how-do-you-assign-default-values-to-variables",
        question: "How do you assign default values to variables",
        answer: `<h3 id="how-do-you-assign-default-values-to-variables">How do you assign default values to variables</h3>
        <p>You can use the logical OR operator <code>||</code> in an assignment expression to provide a default value. The syntax looks like as below,</p>
        <pre><code class="language-javascript">
    var a = b || c;
    </code></pre>
        <p>As per the above expression, variable 'a' will get the value of 'c' only if 'b' is falsy (if it is null, false, undefined, 0, empty string, or NaN), otherwise 'a' will get the value of 'b'.</p>
        `
    },{
        slug: "what-are-the-benefits-of-keeping-declarations-at-the-top",
        question: "What are the benefits of keeping declarations at the top",
        answer: `<h3 id="what-are-the-benefits-of-keeping-declarations-at-the-top">What are the benefits of keeping declarations at the top</h3>
        <p>It is recommended to keep all declarations at the top of each script or function. The benefits of doing this are,</p>
        <ol>
        <li>Gives cleaner code</li>
        <li>It provides a single place to look for local variables</li>
        <li>Easy to avoid unwanted global variables</li>
        <li>It reduces the possibility of unwanted re-declarations</li>
        </ol>
        `
    },{
        slug: "what-are-the-benefits-of-initializing-variables",
        question: "What are the benefits of initializing variables",
        answer: `<h3 id="what-are-the-benefits-of-initializing-variables">What are the benefits of initializing variables</h3>
        <p>It is recommended to initialize variables because of the below benefits,</p>
        <ol>
        <li>It gives cleaner code</li>
        <li>It provides a single place to initialize variables</li>
        <li>Avoid undefined values in the code</li>
        </ol>
        `
    },{
        slug: "what-is-the-precedence-order-between-local-and-global-variables",
        question: "What is the precedence order between local and global variables",
        answer: `<h3 id="what-is-the-precedence-order-between-local-and-global-variables">What is the precedence order between local and global variables</h3>
        <p>A local variable takes precedence over a global variable with the same name. Let's see this behavior in an example.</p>
        <pre><code class="language-javascript">
    var msg = "Good morning";
    function greeting() {
      msg = "Good Evening";
      console.log(msg); // Good Evening
    }
    greeting();
    </code></pre>
        `
    },{
        slug: "what-are-various-operators-supported-by-javascript",
        question: "What are various operators supported by JavaScript",
        answer: `<h3 id="what-are-various-operators-supported-by-javascript">What are various operators supported by JavaScript</h3>
        <p>An operator is capable of manipulating (mathematical and logical computations) a certain value or operand. There are various operators supported by JavaScript as below,</p>
        <ol>
        <li><strong>Arithmetic Operators:</strong> Includes + (Addition), – (Subtraction), * (Multiplication), / (Division), % (Modulus), ++ (Increment) and -- (Decrement)</li>
        <li><strong>Comparison Operators:</strong> Includes == (Equal), != (Not Equal), === (Equal with type), > (Greater than), >= (Greater than or Equal to), < (Less than), <= (Less than or Equal to)</li>
        <li><strong>Logical Operators:</strong> Includes && (Logical AND), || (Logical OR), ! (Logical NOT)</li>
        <li><strong>Assignment Operators:</strong> Includes = (Assignment Operator), += (Add and Assignment Operator), -= (Subtract and Assignment Operator), *= (Multiply and Assignment), /= (Divide and Assignment), %= (Modules and Assignment)</li>
        <li><strong>Ternary Operator:</strong> It includes conditional (: ?) Operator</li>
        <li><strong>typeof Operator:</strong> It is used to find the type of variable. The syntax looks like <code>typeof variable</code></li>
        </ol>
        `
    },{
        slug: "what-are-the-bitwise-operators-available-in-javascript",
        question: "What are the bitwise operators available in JavaScript",
        answer: `<h3 id="what-are-the-bitwise-operators-available-in-javascript">What are the bitwise operators available in JavaScript</h3>
        <p>Below are the list of bitwise logical operators used in JavaScript</p>
        <ol>
        <li>Bitwise AND (&)</li>
        <li>Bitwise OR (|)</li>
        <li>Bitwise XOR (^)</li>
        <li>Bitwise NOT (~)</li>
        <li>Left Shift (<<)</li>
        <li>Sign Propagating Right Shift (>>)</li>
        <li>Zero fill Right Shift (>>>)</li>
        </ol>
        `
    },{
        slug: "what-is-a-spread-operator",
        question: "What is a spread operator",
        answer: `<h3 id="what-is-a-spread-operator">What is a spread operator</h3>
        <p>Spread operator allows iterables (arrays / objects / strings) to be expanded into single arguments/elements. Let's take an example to see this behavior,</p>
        <pre><code class="language-javascript">
    function calculateSum(x, y, z) {
      return x + y + z;
    }
    
    const numbers = [1, 2, 3];
    
    console.log(calculateSum(...numbers)); // 6
    </code></pre>
        `
    },{
        slug: "what-is-an-unary-operator",
        question: "What is an Unary operator",
        answer: `<h3 id="what-is-an-unary-operator">What is an Unary operator</h3>
        <p>The unary (+) operator is used to convert a variable to a number. If the variable cannot be converted, it will still become a number but with the value NaN. Let's see this behavior in action.</p>
        <pre><code class="language-javascript">
    var x = "100";
    var y = +x;
    console.log(typeof x, typeof y); // string, number
    
    var a = "Hello";
    var b = +a;
    console.log(typeof a, typeof b, b); // string, number, NaN
    </code></pre>
        `
    },{
        slug: "what-is-a-comma-operator",
        question: "What is a comma operator",
        answer: `<h3 id="what-is-a-comma-operator">What is a comma operator</h3>
        <p>The comma operator is used to evaluate each of its operands from left to right and returns the value of the last operand. This is totally different from comma usage within arrays, objects, and function arguments and parameters. For example, the usage for numeric expressions would be as below,</p>
        <pre><code class="language-javascript">
    var x = 1;
    x = (x++, x);
    
    console.log(x); // 2
    </code></pre>
        `,
        },
        {
        slug: "what-is-the-advantage-of-a-comma-operator",
        question: "What is the advantage of a comma operator",
        answer: `<h3 id="what-is-the-advantage-of-a-comma-operator">What is the advantage of a comma operator</h3>
        <p>It is normally used to include multiple expressions in a location that requires a single expression. One of the common usages of this comma operator is to supply multiple parameters in a <code>for</code> loop. For example, the below <code>for</code> loop uses multiple expressions in a single location using comma operator,</p>
        <pre><code class="language-javascript">
    for (var a = 0, b =10; a <= 10; a++, b--)
    </code></pre>
        <p>You can also use the comma operator in a return statement where it processes before returning.</p>
        <pre><code class="language-javascript">
    function myFunction() {
      var a = 1;
      return (a += 10), a; // 11
    }
    </code></pre>
        `
    },{
        slug: "what-is-a-void-operator",
        question: "What is a void operator",
        answer: `<h3 id="what-is-a-void-operator">What is a void operator</h3>
        <p>The <code>void</code> operator evaluates the given expression and then returns <code>undefined</code> (i.e., without returning value). The syntax would be as below,</p>
        <pre><code class="language-javascript">
    void expression;
    void expression;
    </code></pre>
    <p>Let's display a message without any redirection or reload</p>
    <pre><code class="language-javascript">
    &lt;a href="javascript:void(alert('Welcome to JS world'))"&gt;
    Click here to see a message
    &lt;/a&gt;
    </code></pre>
        <p><strong>Note:</strong> This operator is often used to obtain the <code>undefined</code> primitive value, using "<code>void(0)</code>".</p>
        `
    },{
        slug: "what-is-the-output-of-below-spread-operator-array",
        question: "What is the output of below spread operator array",
        answer: `<h3 id="what-is-the-output-of-below-spread-operator-array">What is the output of below spread operator array</h3>
        <pre><code class="language-javascript">
        [..."John Resig"];
    </code></pre>
        <p>The output of the array is <code>['J', 'o', 'h', 'n', ' ', 'R', 'e', 's', 'i', 'g']</code></p>
        <p><strong>Explanation:</strong> The string is an iterable type and the spread operator within an array maps every character of an iterable to one element. Hence, each character of a string becomes an element within an Array.</p>
        `
    },{
        slug: "what-is-the-purpose-of-double-tilde-operator",
        question: "What is the purpose of double tilde operator",
        answer: `<h3 id="what-is-the-purpose-of-double-tilde-operator">What is the purpose of double tilde operator</h3>
        <p>The double tilde operator (<code>~~</code>) is known as double NOT bitwise operator. This operator is a slightly quicker substitute for <code>Math.floor()</code>.</p>
        `
    },{
        slug: "what-is-the-output-of-prepend-additive-operator-on-falsy-values",
        question: "What is the output of prepend additive operator on falsy values",
        answer: `<h3 id="what-is-the-output-of-prepend-additive-operator-on-falsy-values">What is the output of prepend additive operator on falsy values</h3>
        <p>If you prepend the additive (+) operator on falsy values (null, undefined, NaN, false, ""), the falsy value converts to a number value zero. Let's display them on the browser console as below,</p>
        <pre><code class="language-javascript">
    console.log(+null); // 0
    console.log(+undefined); // NaN
    console.log(+false); // 0
    console.log(+NaN); // NaN
    console.log(+""); // 0
    </code></pre>
        `
    },{
        slug: "what-is-nullish-coalescing-operator",
        question: "What is nullish coalescing operator (??)",
        answer: `<h3 id="what-is-nullish-coalescing-operator">What is nullish coalescing operator (??)</h3>
        <p>It is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. This can be contrasted with the logical OR (<code>||</code>) operator, which returns the right-hand side operand if the left operand is any falsy value, not only null or undefined.</p>
        <pre><code class="language-javascript">
    console.log(null ?? true); // true
    console.log(false ?? true); // false
    console.log(undefined ?? true); // true
    </code></pre>
        `
    },{
        slug: "what-is-the-difference-between-and-operators",
        question: "What is the difference between == and === operators",
        answer: `<h3 id="what-is-the-difference-between-and-operators">What is the difference between == and === operators</h3>
        <p>JavaScript provides both strict (<code>===</code>, <code>!==</code>) and type-converting (<code>==</code>, <code>!=</code>) equality comparison. The strict operators take the type of variable into consideration, while non-strict operators make type correction/conversion based upon values of variables. The strict operators follow the below conditions for different types,</p>
        <ol>
        <li>Two strings are strictly equal when they have the same sequence of characters, same length, and same characters in corresponding positions.</li>
        <li>Two numbers are strictly equal when they are numerically equal, i.e., having the same number value. There are two special cases in this,
        <ul>
        <li>NaN is not equal to anything, including NaN.</li>
        <li>Positive and negative zeros are equal to one another.</li>
        </ul>
        </li>
        <li>Two Boolean operands are strictly equal if both are true or both are false.</li>
        <li>Two objects are strictly equal if they refer to the same Object.</li>
        <li>Null and Undefined types are not equal with <code>===</code>, but equal with <code>==</code>, i.e, <code>null===undefined</code> --> false, but <code>null==undefined</code> --> true</li>
        </ol>
        <p>Some of the examples which cover the above cases:</p>
        <pre><code class="language-javascript">
    0 == false   // true
    0 === false  // false
    1 == "1"     // true
    1 === "1"    // false
    null == undefined // true
    null === undefined // false
    '0' == false // true
    '0' === false // false
    []==[] or []===[] //false, refer different objects in memory
    {}=={} or {}==={} //false, refer different objects in memory
    </code></pre>
        `
    },{
        slug: "what-are-lambda-or-arrow-functions",
        question: "What are lambda or arrow functions",
        answer: `<h3 id="what-are-lambda-or-arrow-functions">What are lambda or arrow functions</h3>
        <p>An arrow function is a shorter syntax for a function expression and does not have its own <strong>this</strong>, <strong>arguments</strong>, <strong>super</strong>, or <strong>new.target</strong>. These functions are best suited for non-method functions, and they cannot be used as constructors.</p>
        `
    },{
        slug: "what-is-a-first-class-function",
        question: "What is a first class function",
        answer: `<h3 id="what-is-a-first-class-function">What is a first class function</h3>
        <p>In JavaScript, functions are first-class objects. First-class functions mean when functions in that language are treated like any other variable.</p>
        <p>For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function, and can be assigned as a value to a variable. For example, in the below example, handler functions assigned to a listener</p>
        <pre><code class="language-javascript">
    const handler = () => console.log("This is a click handler function");
    document.addEventListener("click", handler);
    </code></pre>
        `
    },
    {
        slug: "what-is-a-first-order-function",
        question: "What is a first order function",
        answer: `<h3 id="what-is-a-first-order-function">What is a first order function</h3>
        <p>A first-order function is a function that doesn’t accept another function as an argument and doesn’t return a function as its return value.</p>
        <pre><code class="language-javascript">
    const firstOrder = () => console.log("I am a first order function!");
    </code></pre>
        `
    },
    {
        slug: "what-is-a-higher-order-function",
        question: "What is a higher order function",
        answer: `<h3 id="what-is-a-higher-order-function">What is a higher order function</h3>
        <p>A higher-order function is a function that accepts another function as an argument or returns a function as a return value or both.</p>
        <pre><code class="language-javascript">
    const firstOrderFunc = () =>
       console.log("Hello, I am a First order function");
    const higherOrder = (ReturnFirstOrderFunc) => ReturnFirstOrderFunc();
    higherOrder(firstOrderFunc);
    </code></pre>
        `
    },
    {
        slug: "what-is-a-unary-function",
        question: "What is a unary function",
        answer: `<h3 id="what-is-a-unary-function">What is a unary function</h3>
        <p>A unary function (i.e., monadic) is a function that accepts exactly one argument. It stands for a single argument accepted by a function.</p>
        <p>Let us take an example of a unary function,</p>
        <pre><code class="language-javascript">
    const unaryFunction = (a) => console.log(a + 10); // Add 10 to the given argument and display the value
    </code></pre>
        `
    },
    {
        slug: "what-is-the-currying-function",
        question: "What is the currying function",
        answer: `<h3 id="what-is-the-currying-function">What is the currying function</h3>
        <p>Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument. Currying is named after a mathematician <strong>Haskell Curry</strong>. By applying currying, an n-ary function turns into a unary function.</p>
        <p>Let's take an example of an n-ary function and how it turns into a currying function,</p>
        <pre><code class="language-javascript">
    const multiArgFunction = (a, b, c) => a + b + c;
    console.log(multiArgFunction(1, 2, 3)); // 6
    
    const curryUnaryFunction = (a) => (b) => (c) => a + b + c;
    curryUnaryFunction(1); // returns a function: b => c =>  1 + b + c
    curryUnaryFunction(1)(2); // returns a function: c => 3 + c
    curryUnaryFunction(1)(2)(3); // returns the number 6
    </code></pre>
        <p>Curried functions are great to improve <strong>code reusability</strong> and <strong>functional composition</strong>.</p>
        `
    },
    {
        slug: "what-is-a-pure-function",
        question: "What is a pure function",
        answer: `<h3 id="what-is-a-pure-function">What is a pure function</h3>
        <p>A <strong>Pure function</strong> is a function where the return value is only determined by its arguments without any side effects. i.e., If you call a function with the same arguments 'n' number of times and 'n' number of places in the application then it will always return the same value.</p>
        <p>Let's take an example to see the difference between pure and impure functions,</p>
        <pre><code class="language-javascript">
    //Impure
    let numberArray = [];
    const impureAddNumber = (number) => numberArray.push(number);
    //Pure
    const pureAddNumber = (number) => (argNumberArray) =>
      argNumberArray.concat([number]);
    
    //Display the results
    console.log(impureAddNumber(6)); // returns 1
    console.log(numberArray); // returns [6]
    console.log(pureAddNumber(7)(numberArray)); // returns [6, 7]
    console.log(numberArray); // returns [6]
    </code></pre>
        <p>As per the above code snippets, the <strong>Push</strong> function is impure itself by altering the array and returning a push number index independent of the parameter value, whereas <strong>Concat</strong> on the other hand takes the array and concatenates it with the other array producing a whole new array without side effects. Also, the return value is a concatenation of the previous array.</p>
        <p>Remember that Pure functions are important as they simplify unit testing without any side effects and no need for dependency injection. They also avoid tight coupling and make it harder to break your application by not having any side effects. These principles are coming together with the <strong>Immutability</strong> concept of ES6: giving preference to <strong>const</strong> over <strong>let</strong> usage.</p>
        `
    },{
        slug: "what-is-an-iife-immediately-invoked-function-expression",
        question: "What is an IIFE (Immediately Invoked Function Expression)",
        answer: `<h3 id="what-is-an-iife-immediately-invoked-function-expression">What is an IIFE (Immediately Invoked Function Expression)</h3>
        <p>IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The signature of it would be as below,</p>
        <pre><code class="language-javascript">
    (function () {
      // logic here
    })();
    </code></pre>
        <p>The primary reason to use an IIFE is to obtain data privacy because any variables declared within the IIFE cannot be accessed by the outside world. i.e, If you try to access variables from the IIFE then it throws an error as below,</p>
        <pre><code class="language-javascript">
    (function () {
      var message = "IIFE";
      console.log(message);
    })();
    console.log(message); //Error: message is not defined
    </code></pre>
        `
    },{
        slug: "what-are-closures",
        question: "What are closures",
        answer: `<h3 id="what-are-closures">What are closures</h3>
        <p>A closure is the combination of a function and the lexical environment within which that function was declared. i.e, It is an inner function that has access to the outer or enclosing function’s variables. The closure has three scope chains</p>
        <ol>
        <li>Own scope where variables defined between its curly brackets</li>
        <li>Outer function’s variables</li>
        <li>Global variables</li>
        </ol>
        <p>Let's take an example of closure concept,</p>
        <pre><code class="language-javascript">
    function Welcome(name) {
      var greetingInfo = function (message) {
        console.log(message + " " + name);
      };
      return greetingInfo;
    }
    var myFunction = Welcome("John");
    myFunction("Welcome "); //Output: Welcome John
    myFunction("Hello Mr."); //output: Hello Mr.John
    </code></pre>
        <p>As per the above code, the inner function(i.e, greetingInfo) has access to the variables in the outer function scope(i.e, Welcome) even after the outer function has returned.</p>
        `
    },{
        slug: "what-is-a-callback-function",
        question: "What is a callback function",
        answer: `<h3 id="what-is-a-callback-function">What is a callback function</h3>
        <p>A callback function is a function passed into another function as an argument. This function is invoked inside the outer function to complete an action.
        Let's take a simple example of how to use callback function</p>
        <pre><code class="language-javascript">
    function callbackFunction(name) {
      console.log("Hello " + name);
    }
    
    function outerFunction(callback) {
      let name = prompt("Please enter your name.");
      callback(name);
    }
    
    outerFunction(callbackFunction);
    </code></pre>
        `
    },
    {
        slug: "why-do-we-need-callbacks",
        question: "Why do we need callbacks",
        answer: `<h3 id="why-do-we-need-callbacks">Why do we need callbacks</h3>
        <p>The callbacks are needed because javascript is an event driven language. That means instead of waiting for a response javascript will keep executing while listening for other events.
        Let's take an example with the first function invoking an API call(simulated by setTimeout) and the next function which logs the message.</p>
        <pre><code class="language-javascript">
    function firstFunction() {
      // Simulate a code delay
      setTimeout(function () {
        console.log("First function called");
      }, 1000);
    }
    function secondFunction() {
      console.log("Second function called");
    }
    firstFunction();
    secondFunction();
    
    Output;
    // Second function called
    // First function called
    </code></pre>
        <p>As observed from the output, javascript didn't wait for the response of the first function and the remaining code block got executed. So callbacks are used in a way to make sure that certain code doesn’t execute until the other code finishes execution.</p>
        `
    },
    {
        slug: "what-is-a-callback-hell",
        question: "What is a callback hell",
        answer: `<h3 id="what-is-a-callback-hell">What is a callback hell</h3>
        <p>Callback Hell is an anti-pattern with multiple nested callbacks which makes code hard to read and debug when dealing with asynchronous logic. The callback hell looks like below,</p>
        <pre><code class="language-javascript">
    async1(function(){
        async2(function(){
            async3(function(){
                async4(function(){
                    ....
                });
            });
        });
    });
    </code></pre>
        `
    },{
        slug: "can-we-define-properties-for-functions",
        question: "Can we define properties for functions",
        answer: `<h3 id="can-we-define-properties-for-functions">Can we define properties for functions</h3>
        <p>Yes, We can define properties for functions because functions are also objects.</p>
        <pre><code class="language-javascript">
    fn = function (x) {
      //Function code goes here
    };
    
    fn.name = "John";
    
    fn.profile = function (y) {
      //Profile code goes here
    };
    </code></pre>
        `
    },
    {
        slug: "what-is-the-way-to-find-the-number-of-parameters-expected-by-a-function",
        question: "What is the way to find the number of parameters expected by a function",
        answer: `<h3 id="what-is-the-way-to-find-the-number-of-parameters-expected-by-a-function">What is the way to find the number of parameters expected by a function</h3>
        <p>You can use <code>function.length</code> syntax to find the number of parameters expected by a function. Let's take an example of <code>sum</code> function to calculate the sum of numbers,</p>
        <pre><code class="language-javascript">
    function sum(num1, num2, num3, num4) {
      return num1 + num2 + num3 + num4;
    }
    sum.length; // 4 is the number of parameters expected.
    </code></pre>
        `
    },{
        slug: "what-is-a-rest-parameter",
        question: "What is a rest parameter",
        answer: `<h3 id="what-is-a-rest-parameter">What is a rest parameter</h3>
        <p>Rest parameter is an improved way to handle function parameters which allows us to represent an indefinite number of arguments as an array. The syntax would be as below,</p>
        <pre><code class="language-javascript">
    function f(a, b, ...theArgs) {
      // ...
    }
    </code></pre>
        <p>For example, let's take a sum example to calculate on dynamic number of parameters,</p>
        <pre><code class="language-javascript">
    function sum(...args) {
      let total = 0;
      for (const i of args) {
        total += i;
      }
      return total;
    }
    
    console.log(sum(1, 2)); //3
    console.log(sum(1, 2, 3)); //6
    console.log(sum(1, 2, 3, 4)); //13
    console.log(sum(1, 2, 3, 4, 5)); //15
    </code></pre>
        <p><strong>Note:</strong> Rest parameter is added in ES2015 or ES6</p>
        `
    },
    {
        slug: "what-happens-if-you-do-not-use-rest-parameter-as-a-last-argument",
        question: "What happens if you do not use rest parameter as a last argument",
        answer: `<h3 id="what-happens-if-you-do-not-use-rest-parameter-as-a-last-argument">What happens if you do not use rest parameter as a last argument</h3>
        <p>The rest parameter should be the last argument, as its job is to collect all the remaining arguments into an array. For example, if you define a function like below it doesn’t make any sense and will throw an error.</p>
        <pre><code class="language-javascript">
    function someFunc(a,…b,c){
    //You code goes here
    return;
    }
    </code></pre>
        `
    },{
        slug: "what-is-an-anonymous-function",
        question: "What is an anonymous function",
        answer: `<h3 id="what-is-an-anonymous-function">What is an anonymous function</h3>
        <p>An anonymous function is a function without a name! Anonymous functions are commonly assigned to a variable name or used as a callback function. The syntax would be as below,</p>
        <pre><code class="language-javascript">
    function (optionalParameters) {
      //do something
    }
    
    const myFunction = function(){ //Anonymous function assigned to a variable
      //do something
    };
    
    [1, 2, 3].map(function(element){ //Anonymous function used as a callback function
      //do something
    });
    </code></pre>
        <p>Let's see the above anonymous function in an example,</p>
        <pre><code class="language-javascript">
    var x = function (a, b) {
      return a * b;
    };
    var z = x(5, 10);
    console.log(z); // 50
    </code></pre>
        `
    },{
        slug: "what-are-the-function-parameter-rules",
        question: "What are the function parameter rules",
        answer: `<h3 id="what-are-the-function-parameter-rules">What are the function parameter rules</h3>
        <p>JavaScript functions follow below rules for parameters,</p>
        <ol>
        <li>The function definitions do not specify data types for parameters.</li>
        <li>Do not perform type checking on the passed arguments.</li>
        <li>Do not check the number of arguments received.</li>
        </ol>
        <p>i.e, The below function follows the above rules,</p>
        <pre><code class="language-javascript">
    function functionName(parameter1, parameter2, parameter3) {
      console.log(parameter1); // 1
    }
    functionName(1);
    </code></pre>
        `
    },{
        slug: "what-are-default-parameters",
        question: "What are default parameters",
        answer: `<h3 id="what-are-default-parameters">What are default parameters</h3>
        <p>In ES5, we need to depend on logical OR operators to handle default values of function parameters. Whereas in ES6, Default function parameters feature allows parameters to be initialized with default values if no value or undefined is passed. Let's compare the behavior with examples,</p>
        <pre><code class="language-javascript">
    //ES5
    var calculateArea = function (height, width) {
        height = height || 50;
        width = width || 60;
        return width * height;
    };
    console.log(calculateArea()); //300
      </code></pre>
      <p>The default parameters make the initialization simpler in ES6:</p>
      <pre><code class="language-javascript">
    //ES6
    var calculateArea = function (height = 50, width = 60) {
        return width * height;
    };
    console.log(calculateArea()); //300
      </code></pre>
      `
    },{
        slug: "what-is-the-difference-between-parameter-and-argument",
        question: "What is the difference between a parameter and an argument",
        answer: `<h3 id="what-is-the-difference-between-parameter-and-argument">What is the difference between a parameter and an argument</h3>
    <p>A parameter is the variable name of a function definition, whereas an argument represents the value given to a function when it is invoked. Let's explain this with a simple function:</p>
    <pre><code class="language-javascript">
    function myFunction(parameter1, parameter2, parameter3) {
        console.log(arguments[0]); // "argument1"
        console.log(arguments[1]); // "argument2"
        console.log(arguments[2]); // "argument3"
    }
    myFunction("argument1", "argument2", "argument3");
    </code></pre>
    `
    },{
        slug: "what-is-a-thunk-function",
        question: "What is a thunk function",
        answer: `<h3 id="what-is-a-thunk-function">What is a thunk function</h3>
        <p>A thunk is just a function that delays the evaluation of the value. It doesn’t take any arguments but gives the value whenever you invoke the thunk. That is, it is used not to execute now but sometime in the future. Let's take a synchronous example:</p>
        <pre><code class="language-javascript">
    const add = (x, y) => x + y;
      
    const thunk = () => add(2, 3);
    
    thunk(); // 5
      </code></pre>
      `
      },
      {
        slug: "what-are-asynchronous-thunks",
        question: "What are asynchronous thunks",
        answer: `<h3 id="what-are-asynchronous-thunks">What are asynchronous thunks</h3>
        <p>Asynchronous thunks are useful for making network requests. Let's see an example of network requests:</p>
        <pre><code class="language-javascript">
    function fetchData(fn) {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
          .then((response) => response.json())
          .then((json) => fn(json));
    }
    
    const asyncThunk = function () {
        return fetchData(function getData(data) {
            console.log(data);
        });
    };
    
    asyncThunk();
      </code></pre>
        <p>The <code>getData</code> function won't be called immediately, but it will be invoked only when the data is available from the API endpoint. The <code>setTimeout</code> function is also used to make our code asynchronous. A real-life example is the Redux state management library, which uses asynchronous thunks to delay actions before dispatching them.</p>
      `
    },
    {
        slug: "what-is-the-difference-between-function-constructor-and-function-declaration",
        question: "What is the difference between Function constructor and function declaration",
        answer: `<h3 id="difference-between-function-constructor-and-function-declaration">What is the difference between Function constructor and function declaration</h3>
    <p>The functions created with the <code>Function constructor</code> do not create closures to their creation contexts, but they are always created in the global scope. That is, the function can access its own local variables and global scope variables only. On the other hand, function declarations can access outer function variables (closures) too.</p>
    <p>Let's see this difference with an example:</p>
    <h4>Function Constructor:</h4>
    <pre><code class="language-javascript">var a = 100;
    function createFunction() {
        var a = 200;
        return new Function("return a;");
    }
    console.log(createFunction()()); // 100
    </code></pre>
    <h4>Function declaration:</h4>
    <pre><code class="language-javascript">
    var a = 100;
    function createFunction() {
        var a = 200;
        return function func() {
            return a;
        };
    }
    console.log(createFunction()()); // 200
    </code></pre>
    `
    },
    {
        slug: "what-are-the-differences-between-pure-and-impure-functions",
        question: "What are the differences between pure and impure functions?",
        answer: `<h3 id="what-are-the-differences-between-pure-and-impure-functions">What are the differences between pure and impure functions?</h3>
        <p><strong>Pure Functions</strong>:</p>
        <ul>
        <li>A pure function is a function where the return value is only determined by its input values, without observable side effects.</li>
        <li>It doesn&#39;t modify variables outside its scope or rely on mutable state. Given the same inputs, a pure function will always return the same output.</li>
        <li>Pure functions are predictable and easier to test and reason about since they have no hidden dependencies or side effects.</li>
        <li>Example of a pure function:</li>
        </ul>
        <pre><code class="language-javascript">
        function add(a, b) {
          return a + b;
        }
        </code></pre>
        <p><strong>Impure Functions</strong>:</p>
        <ul>
        <li>An impure function is a function that may have side effects or rely on external state. Its return value can depend on factors other than its inputs.</li>
        <li>These side effects can include modifying global variables, performing I/O operations, or altering data structures outside the function&#39;s scope.</li>
        <li>Impure functions are harder to reason about and test because their behavior can be influenced by factors other than their arguments.</li>
        <li>Example of an impure function:</li>
        </ul>
        <pre><code class="language-javascript">
        let total = 0;

        function addToTotal(x) {
            total += x;
            console.log(total); // Side effect: Logging
        }
        </code></pre>

        <table class='table table-bordered'>
            <thead>
                <tr>
                    <th>Pure function</th>
                    <th>Impure function</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>It has no side effects</td>
                    <td>It causes side effects</td>
                </tr>
                <tr>
                    <td>It always returns the same result</td>
                    <td>It returns a different result on each call</td>
                </tr>
                <tr>
                    <td>Easy to read and debug</td>
                    <td>Difficult to read and debug because they are affected by external code</td>
                </tr>
            </tbody>
        </table>

        `
    },{
        slug: "what-are-array-methods",
        question: "What are array methods",
        answer: `<h3 id="what-are-array-methods">What are array methods</h3>
        <ol>
        <li><p><strong>push()</strong>: This method adds one or more elements to the end of an array and returns the new length of the array. It modifies the original array.</p>
        <pre><code class="language-javascript">
    let arr = [1, 2, 3];
    arr.push(4); // arr is now [1, 2, 3, 4]
        </code></pre>
        </li>
        <li><p><strong>pop()</strong>: The <code>pop()</code> method removes the last element from an array and returns that element. It modifies the original array.</p>
        <pre><code class="language-javascript">
    let arr = [1, 2, 3];
    let poppedElement = arr.pop(); // arr is now [1, 2], poppedElement is 3
        </code></pre>
        </li>
        <li><p><strong>shift()</strong>: This method removes the first element from an array and returns that removed element. It also shifts all remaining elements to a lower index. It modifies the original array.</p>
        <pre><code class="language-javascript">
    let arr = [1, 2, 3];
    let shiftedElement = arr.shift(); // arr is now [2, 3], shiftedElement is 1
        </code></pre>
        </li>
        <li><p><strong>unshift()</strong>: The <code>unshift()</code> method adds one or more elements to the beginning of an array and returns the new length of the array. It modifies the original array.</p>
        <pre><code class="language-javascript">
    let arr = [2, 3];
    arr.unshift(1); // arr is now [1, 2, 3]
        </code></pre>
        </li>
        <li><p><strong>concat()</strong>: This method is used to merge two or more arrays. It does not modify the existing arrays, but instead returns a new array that contains elements from the original arrays.</p>
        <pre><code class="language-javascript">
    array1.concat(array2, array3, ..., arrayX)
    let arr1 = [1, 2];
    let arr2 = [3, 4];
    let newArr = arr1.concat(arr2); // newArr is [1, 2, 3, 4]
        </code></pre>
        </li>
        <li><p><strong>slice()</strong>: The <code>slice()</code> method returns a shallow copy of a portion of an array into a new array object. The original array will not be modified. It takes two arguments: the start index (inclusive) and the end index (exclusive).</p>
        <pre><code class="language-javascript">
    let arr = [1, 2, 3, 4, 5];
    let slicedArr = arr.slice(1, 4); // slicedArr is [2, 3, 4]
        </code></pre>
        </li>
        <li><p><strong>splice()</strong>: This method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It modifies the original array and returns an array containing the deleted elements, if any.</p>
        <pre><code class="language-javascript">
    let arr = [1, 2, 3, 4, 5];
    arr.splice(2, 1); // arr is now [1, 2, 4, 5], removed element is [3]
        </code></pre>
        </li>
        <li><p><strong>forEach()</strong>: The <code>forEach()</code> method executes a provided function once for each array element. It does not return a new array. It is commonly used for performing a function on each element of an array.</p>
        <pre><code class="language-javascript">
    let arr = [1, 2, 3];
    arr.forEach(item =&gt; console.log(item)); // outputs: 1, 2, 3
        </code></pre>
        </li>
        <li><p><strong>filter()</strong>: The <code>filter()</code> method creates a new array with all elements that pass the test implemented by the provided function. It does not mutate the original array.</p>
        <pre><code class="language-javascript">
    let numbers = [1, 2, 3, 4, 5];
    let evenNumbers = numbers.filter(num =&gt; num % 2 === 0); // evenNumbers is [2, 4]
        </code></pre>
        </li>
        <li><p><strong>map()</strong>: The <code>map()</code> method creates a new array populated with the results of calling a provided function on every element in the calling array. It does not mutate the original array.</p>
        <pre><code class="language-javascript">
    let numbers = [1, 2, 3];
    let doubledNumbers = numbers.map(num =&gt; num * 2); // doubledNumbers is [2, 4, 6]
        </code></pre>
        </li>
        <li><p><strong>reduce()</strong>: The <code>reduce()</code> method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. It can be used to perform calculations or transformations on an array.</p>
        <pre><code class="language-javascript">
    let numbers = [1, 2, 3, 4];
    let sum = numbers.reduce((acc, curr) =&gt; acc + curr, 0); // sum is 10
        </code></pre>
        </li>
        <li><p><strong>some()</strong>: The <code>some()</code> method tests whether at least one element in the array passes the test implemented by the provided function. It returns <code>true</code> if at least one element passes the test, otherwise <code>false</code>.</p>
        <pre><code class="language-javascript">
    let numbers = [1, 2, 3, 4, 5];
    let hasEvenNumber = numbers.some(num =&gt; num % 2 === 0); // true
        </code></pre>
        </li>
        <li><p><strong>every()</strong>: The <code>every()</code> method tests whether all elements in the array pass the test implemented by the provided function. It returns <code>true</code> if all elements pass the test, otherwise <code>false</code>.</p>
        <pre><code class="language-javascript">
    let numbers = [2, 4, 6, 8];
    let allEvenNumbers = numbers.every(num =&gt; num % 2 === 0); // true
        </code></pre>
        </li>
        <li><p><strong>indexOf()</strong>: The <code>indexOf()</code> method returns the first index at which a given element can be found in the array, or -1 if it is not present.</p>
        <pre><code class="language-javascript">
    let fruits = [&#39;apple&#39;, &#39;banana&#39;, &#39;orange&#39;];
    let index = fruits.indexOf(&#39;banana&#39;); // index is 1
        </code></pre>
        </li>
        <li><p><strong>includes()</strong>: The <code>includes()</code> method determines whether an array includes a certain value among its entries, returning <code>true</code> or <code>false</code> as appropriate.</p>
        <pre><code class="language-javascript">
    let fruits = [&#39;apple&#39;, &#39;banana&#39;, &#39;orange&#39;];
    let hasBanana = fruits.includes(&#39;banana&#39;); // true
        </code></pre>
        </li>
        <li><p><strong>sort()</strong>: The <code>sort()</code> method sorts the elements of an array in place and returns the sorted array. By default, it sorts the elements as strings in Unicode code point order. The <code>sort()</code> method modifies the original array and returns a reference to the same array.</p>
        <pre><code class="language-javascript">
    let fruits = [&#39;banana&#39;, &#39;apple&#39;, &#39;orange&#39;];
    fruits.sort(); // fruits is now [&#39;apple&#39;, &#39;banana&#39;, &#39;orange&#39;]
        </code></pre>
        <p>To sort numbers in ascending order, you need to provide a comparison function.</p>
        <pre><code class="language-javascript">
    let numbers = [3, 1, 4, 1, 5, 9, 2, 6];
    numbers.sort((a, b) =&gt; a - b); // numbers is now [1, 1, 2, 3, 4, 5, 6, 9]
        </code></pre>
        </li>
        <li><p><strong>find()</strong>: The <code>find()</code> method returns the value of the first element in the array that satisfies the provided testing function. Otherwise, it returns <code>undefined</code>. It doesn&#39;t mutate the array.</p>
        <pre><code class="language-javascript">
    let numbers = [1, 2, 3, 4, 5];
    let found = numbers.find(num =&gt; num &gt; 3); // found is 4
        </code></pre>
        </li>
        <li><p><strong>reverse()</strong>: The <code>reverse()</code> method reverses the elements of an array in place, modifying the original array, and returns a reference to the same array.</p>
        <pre><code class="language-javascript">
    let numbers = [1, 2, 3, 4, 5];
    numbers.reverse(); // numbers is now [5, 4, 3, 2, 1]
        </code></pre>
        </li>
        </ol>
        `
    },{
        slug: "what-is-the-difference-between-slice-and-splice",
        question: "What is the difference between slice and splice?",
        answer: `<h3 id="what-is-the-difference-between-slice-and-splice">What is the difference between slice and splice?</h3>
        <p>Some of the major differences in a tabular form:</p>
        <table class='table table-bordered'>
            <thead>
                <tr>
                    <th>Slice</th>
                    <th>Splice</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Doesn't modify the original array (immutable)</td>
                    <td>Modifies the original array (mutable)</td>
                </tr>
                <tr>
                    <td>Returns the subset of the original array</td>
                    <td>Returns the deleted elements as an array</td>
                </tr>
                <tr>
                    <td>Used to pick the elements from the array</td>
                    <td>Used to insert/delete elements to/from the array</td>
                </tr>
            </tbody>
        </table>
        `
    },{
        slug: "how-do-you-find-min-and-max-value-in-an-array",
        question: "How do you find min and max value in an array?",
        answer: `<h3 id="how-do-you-find-min-and-max-value-in-an-array">How do you find min and max value in an array?</h3>
        <p>You can use <code>Math.min</code> and <code>Math.max</code> methods on array variables to find the minimum and maximum elements within an array. Let's create two functions to find the min and max value within an array:</p>
        <pre><code class="language-javascript">
    var marks = [50, 20, 70, 60, 45, 30];
    function findMin(arr) {
      return Math.min.apply(null, arr);
    }
    function findMax(arr) {
      return Math.max.apply(null, arr);
    }
    
    console.log(findMin(marks));
    console.log(findMax(marks));
    </code></pre>
    `
    },{
        slug: "how-do-you-compare-scalar-arrays",
        question: "How do you compare scalar arrays?",
        answer: `<h3 id="how-do-you-compare-scalar-arrays">How do you compare scalar arrays?</h3>
        <p>You can use the <code>length</code> and <code>every</code> methods of arrays to compare two scalar arrays (compared directly using <code>===</code>). The combination of these expressions can give the expected result:</p>
        <pre><code class="language-javascript">
    const arrayFirst = [1, 2, 3, 4, 5];
    const arraySecond = [1, 2, 3, 4, 5];
    console.log(
      arrayFirst.length === arraySecond.length &&
        arrayFirst.every((value, index) => value === arraySecond[index])
    ); // true
    </code></pre>
        <p>If you would like to compare arrays irrespective of order, then you should sort them before:</p>
        <pre><code class="language-javascript">
    const arrayFirst = [2, 3, 1, 4, 5];
    const arraySecond = [1, 2, 3, 4, 5];
    console.log(
      arrayFirst.length === arraySecond.length &&
        arrayFirst.sort().every((value, index) => value === arraySecond[index])
    ); // true
    </code></pre>
        `
    },{
        slug: "what-is-for-of-statement",
        question: "What is for...of statement?",
        answer: `<h3 id="what-is-for-of-statement">What is for...of statement?</h3>
        <p>The <code>for...of</code> statement creates a loop iterating over iterable objects or elements such as built-in String, Array, Array-like objects (like arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. The basic usage of <code>for...of</code> statement on arrays would be as below:</p>
        <pre><code class="language-javascript">
    let arrayIterable = [10, 20, 30, 40, 50];
    
    for (let value of arrayIterable) {
      value++;
      console.log(value); // 11 21 31 41 51
    }
    </code></pre>
        `
    },{
        slug: "what-happens-with-negating-an-array",
        question: "What happens with negating an array?",
        answer: `<h3 id="what-happens-with-negating-an-array">What happens with negating an array?</h3>
        <p>Negating an array with the <code>!</code> character will coerce the array into a boolean. Since Arrays are considered to be truthy, negating it will return <code>false</code>.</p>
        <pre><code class="language-javascript">
    console.log(![]); // false
    </code></pre>
        `
    },
    {
        slug: "what-happens-if-we-add-two-arrays",
        question: "What happens if we add two arrays?",
        answer: `<h3 id="what-happens-if-we-add-two-arrays">What happens if we add two arrays?</h3>
        <p>If you add two arrays together, it will convert them both to strings and concatenate them. For example, the result of adding arrays would be as below:</p>
        <pre><code class="language-javascript">
    console.log(["a"] + ["b"]); // "ab"
    console.log([] + []); // ""
    console.log(![] + []); // "false", because ![] returns false.
    </code></pre>
        `
    },
    {
        slug: "how-do-you-remove-falsy-values-from-an-array",
        question: "How do you remove falsy values from an array?",
        answer: `<h3 id="how-do-you-remove-falsy-values-from-an-array">How do you remove falsy values from an array?</h3>
        <p>You can apply the <code>filter</code> method on the array by passing <code>Boolean</code> as a parameter. This way, it removes all falsy values (0, undefined, null, false, and "") from the array.</p>
        <pre><code class="language-javascript">
    const myArray = [false, null, 1, 5, undefined];
    myArray.filter(Boolean); // [1, 5] // is same as myArray.filter(x => x);
    </code></pre>
        `
    },
    {
        slug: "how-do-you-get-unique-values-of-an-array",
        question: "How do you get unique values of an array?",
        answer: `<h3 id="how-do-you-get-unique-values-of-an-array">How do you get unique values of an array?</h3>
        <p>You can get unique values of an array with the combination of <code>Set</code> and rest expression/spread(...) syntax.</p>
        <pre><code class="language-javascript">
    console.log([...new Set([1, 2, 4, 4, 3])]); // [1, 2, 4, 3]
    </code></pre>
        `
    },
    {
        slug: "what-is-the-easiest-way-to-convert-an-array-to-an-object",
        question: "What is the easiest way to convert an array to an object?",
        answer: `<h3 id="what-is-the-easiest-way-to-convert-an-array-to-an-object">What is the easiest way to convert an array to an object?</h3>
        <p>You can convert an array to an object with the same data using the spread (...) operator.</p>
        <pre><code class="language-javascript">
    var fruits = ["banana", "apple", "orange", "watermelon"];
    var fruitsObject = { ...fruits };
    console.log(fruitsObject); // {0: "banana", 1: "apple", 2: "orange", 3: "watermelon"}
    </code></pre>
        `
    },
    {
        slug: "how-do-you-create-an-array-with-some-data",
        question: "How do you create an array with some data?",
        answer: `<h3 id="how-do-you-create-an-array-with-some-data">How do you create an array with some data?</h3>
        <p>You can create an array with some data or an array with the same values using the <code>fill</code> method.</p>
        <pre><code class="language-javascript">
    var newArray = new Array(5).fill("0");
    console.log(newArray); // ["0", "0", "0", "0", "0"]
    </code></pre>
        `
    },{
        slug: "how-do-you-flatten-multi-dimensional-arrays",
        question: "How do you flattening multi-dimensional arrays?",
        answer: `<h3 id="how-do-you-flatten-multi-dimensional-arrays">How do you flattening multi-dimensional arrays?</h3>
        <p>Flattening bi-dimensional arrays is trivial with the spread operator:</p>
        <pre><code class="language-javascript">
    const biDimensionalArr = [11, [22, 33], [44, 55], [66, 77], 88, 99];
    const flattenArr = [].concat(...biDimensionalArr); // [11, 22, 33, 44, 55, 66, 77, 88, 99]
    </code></pre>
        <p>But you can make it work with multi-dimensional arrays by recursive calls:</p>
        <pre><code class="language-javascript">
    function flattenMultiArray(arr) {
      const flattened = [].concat(...arr);
      return flattened.some((item) => Array.isArray(item))
        ? flattenMultiArray(flattened)
        : flattened;
    }
    const multiDimensionalArr = [11, [22, 33], [44, [55, 66, [77, [88]], 99]]];
    const flatArr = flattenMultiArray(multiDimensionalArr); // [11, 22, 33, 44, 55, 66, 77, 88, 99]
    </code></pre>
        <p>Also, you can use the <code>flat</code> method of Array:</p>
        <pre><code class="language-javascript">
    const arr = [1, [2, 3], 4, 5, [6, 7]];
    const fllattenArr = arr.flat(); // [1, 2, 3, 4, 5, 6, 7]
    
    // For multi-dimensional arrays
    const multiDimensionalArr = [11, [22, 33], [44, [55, 66, [77, [88]], 99]]];
    const oneStepFlat = multiDimensionalArr.flat(1); // [11, 22, 33, 44, [55, 66, [77, [88]], 99]]
    const towStep = multiDimensionalArr.flat(2); // [11, 22, 33, 44, 55, 66, [77, [88]], 99]
    const fullyFlatArray = multiDimensionalArr.flat(Infinity); // [11, 22, 33, 44, 55, 66, 77, 88, 99]
    </code></pre>
        `
    },
    {
        slug: "what-is-the-difference-between-dense-and-sparse-arrays",
        question: "What is the difference between dense and sparse arrays?",
        answer: `<h3 id="what-is-the-difference-between-dense-and-sparse-arrays">What is the difference between dense and sparse arrays?</h3>
        <p>An array contains items at each index starting from the first (0) to the last (<code>array.length - 1</code>) is called a Dense array. Whereas if at least one item is missing at any index, the array is called sparse.</p>
        <p>Let's see the below two kinds of arrays:</p>
        <pre><code class="language-javascript">
    const avengers = ["Ironman", "Hulk", "CaptainAmerica"];
    console.log(avengers[0]); // 'Ironman'
    console.log(avengers[1]); // 'Hulk'
    console.log(avengers[2]); // 'CaptainAmerica'
    console.log(avengers.length); // 3
    
    const justiceLeague = ["Superman", "Aquaman", , "Batman"];
    console.log(justiceLeague[0]); // 'Superman'
    console.log(justiceLeague[1]); // 'Aquaman'
    console.log(justiceLeague[2]); // undefined
    console.log(justiceLeague[3]); // 'Batman'
    console.log(justiceLeague.length); // 4
    </code></pre>
        `
    },
    {
        slug: "what-are-the-different-ways-to-create-sparse-arrays",
        question: "What are the different ways to create sparse arrays?",
        answer: `<h3 id="what-are-the-different-ways-to-create-sparse-arrays">What are the different ways to create sparse arrays?</h3>
        <p>There are 4 different ways to create sparse arrays in JavaScript:</p>
        <ol>
            <li><strong>Array literal:</strong> Omit a value when using the array literal</li>
            <pre><code class="language-javascript">
    const justiceLeague = ["Superman", "Aquaman", , "Batman"];
    console.log(justiceLeague); // ['Superman', 'Aquaman', empty ,'Batman']
            </code></pre>
            <li><strong>Array() constructor:</strong> Invoking <code>Array(length)</code> or <code>new Array(length)</code></li>
            <pre><code class="language-javascript">
    const array = Array(3);
    console.log(array); // [empty, empty ,empty]
            </code></pre>
            <li><strong>Delete operator:</strong> Using <code>delete array[index]</code> operator on the array</li>
            <pre><code class="language-javascript">
    const justiceLeague = ["Superman", "Aquaman", "Batman"];
    delete justiceLeague[1];
    console.log(justiceLeague); // ['Superman', empty, ,'Batman']
            </code></pre>
            <li><strong>Increase length property:</strong> Increasing the length property of an array</li>
            <pre><code class="language-javascript">
    const justiceLeague = ["Superman", "Aquaman", "Batman"];
    justiceLeague.length = 5;
    console.log(justiceLeague); // ['Superman', 'Aquaman', 'Batman', empty, empty]
            </code></pre>
        </ol>
        `
    },
    {
        slug: "how-do-you-reverse-an-array-without-modifying-original-array",
        question: "How do you reverse an array without modifying the original array?",
        answer: `<h3 id="how-do-you-reverse-an-array-without-modifying-original-array">How do you reverse an array without modifying the original array?</h3>
        <p>The <code>reverse()</code> method reverses the order of the elements in an array, but it mutates the original array. However, there are several solutions that won't mutate the original array:</p>
        <ol>
            <li><strong>Using slice and reverse methods:</strong> In this case, you invoke the <code>slice()</code> method on the array to create a shallow copy followed by the <code>reverse()</code> method call on the copy.</li>
            <pre><code class="language-javascript">
    const originalArray = [1, 2, 3, 4, 5];
    const newArray = originalArray.slice().reverse(); //Slice an array gives a new copy
    
    console.log(originalArray); // [1, 2, 3, 4, 5]
    console.log(newArray); // [ 5, 4, 3, 2, 1]
            </code></pre>
            <li><strong>Using spread and reverse methods:</strong> In this case, you use the spread syntax (...) to create a copy of the array followed by the <code>reverse()</code> method call on the copy.</li>
            <pre><code class="language-javascript">
    const originalArray = [1, 2, 3, 4, 5];
    const newArray = [...originalArray].reverse();
    
    console.log(originalArray); // [1, 2, 3, 4, 5]
    console.log(newArray); // [ 5, 4, 3, 2, 1]
            </code></pre>
            <li><strong>Using reduce and spread methods:</strong> Here, you execute a reducer function on the array elements and append the accumulated array on the right side using spread syntax.</li>
            <pre><code class="language-javascript">
    const originalArray = [1, 2, 3, 4, 5];
    const newArray = originalArray.reduce((accumulator, value) => {
      return [value, ...accumulator];
    }, []);
    
    console.log(originalArray); // [1, 2, 3, 4, 5]
    console.log(newArray); // [ 5, 4, 3, 2, 1]
            </code></pre>
            <li><strong>Using reduceRight and spread methods:</strong> Here, you execute a right reducer function (i.e., opposite direction of the reduce method) on the array elements and append the accumulated array on the left side using spread syntax.</li>
            <pre><code class="language-javascript">
    const originalArray = [1, 2, 3, 4, 5];
    const newArray = originalArray.reduceRight((accumulator, value) => {
      return [...accumulator, value];
    }, []);
    
    console.log(originalArray); // [1, 2, 3, 4, 5]
    console.log(newArray); // [ 5, 4, 3, 2, 1]
            </code></pre>
            <li><strong>Using reduceRight and push methods:</strong> Here, you execute a right reducer function (i.e., opposite direction of the reduce method) on the array elements and push the iterated value to the accumulator.</li>
            <pre><code class="language-javascript">
    const originalArray = [1, 2, 3, 4, 5];
    const newArray = originalArray.reduceRight((accumulator, value) => {
      accumulator.push(value);
      return accumulator;
    }, []);
    
    console.log(originalArray); // [1, 2, 3, 4, 5]
    console.log(newArray); // [ 5, 4, 3, 2, 1]
            </code></pre>
        </ol>
        `
    },{
        slug: "how-to-verify-if-a-variable-is-an-array",
        question: "How to verify if a variable is an array?",
        answer: `<h3 id="how-to-verify-if-a-variable-is-an-array">How to verify if a variable is an array?</h3>
        <p>It is possible to check if a variable is an array instance using 3 different ways:</p>
        <ol>
            <li><strong>Array.isArray() method:</strong> The <code>Array.isArray(value)</code> utility function is used to determine whether <code>value</code> is an array or not. This function returns a true boolean value if the variable is an array and a false value if it is not.</li>
            <pre><code class="language-javascript">
    const numbers = [1, 2, 3];
    const user = { name: "John" };
    Array.isArray(numbers); // true
    Array.isArray(user); //false
            </code></pre>
            <li><strong>instanceof operator:</strong> The <code>instanceof</code> operator is used to check the type of an array at runtime. It returns true if the type of a variable is an Array, otherwise false for other types.</li>
            <pre><code class="language-javascript">
    const numbers = [1, 2, 3];
    const user = { name: "John" };
    console.log(numbers instanceof Array); // true
    console.log(user instanceof Array); // false
            </code></pre>
            <li><strong>Checking constructor type:</strong> The <code>constructor</code> property of the variable is used to determine whether the variable is of Array type or not.</li>
            <pre><code class="language-javascript">
    const numbers = [1, 2, 3];
    const user = { name: "John" };
    console.log(numbers.constructor === Array); // true
    console.log(user.constructor === Array); // false
            </code></pre>
        </ol>
        `
    },{
        slug: "what-are-the-possible-ways-to-create-objects-in-javascript",
        question: "What are the possible ways to create objects in JavaScript",
        answer: `<h3 id="what-are-the-possible-ways-to-create-objects-in-javascript">What are the possible ways to create objects in JavaScript</h3>
        <p>There are many ways to create objects in JavaScript as mentioned below:</p>
        <ol>
            <li><strong>Object literal syntax:</strong> The object literal syntax (or object initializer) is a comma-separated set of name-value pairs wrapped in curly braces.</li>
            <pre><code class="language-javascript">
    var object = {
    name: "Sudheer",
    age: 34
    };
            </code></pre>
            <li><strong>Object constructor:</strong> The simplest way to create an empty object is using the <code>Object</code> constructor. Currently, this approach is not recommended.</li>
            <pre><code class="language-javascript">
    var object = new Object();
            </code></pre>
            <li><strong>Object's create method:</strong> The create method of Object is used to create a new object by passing the specified prototype object and properties as arguments.</li>
            <pre><code class="language-javascript">
    var object = Object.create(null);
            </code></pre>
            <li><strong>Function constructor:</strong> In this approach, create any function and apply the <code>new</code> operator to create object instances.</li>
            <pre><code class="language-javascript">
    function Person(name) {
      this.name = name;
      this.age = 21;
    }
    var object = new Person("Sudheer");
            </code></pre>
            <li><strong>Function constructor with prototype:</strong> This is similar to function constructor but it uses prototype for their properties and methods.</li>
            <pre><code class="language-javascript">
    function Person() {}
    Person.prototype.name = "Sudheer";
    var object = new Person();
            </code></pre>
            <li><strong>ES6 Class syntax:</strong> ES6 introduces class feature to create objects.</li>
            <pre><code class="language-javascript">
    class Person {
      constructor(name) {
        this.name = name;
      }
    }
    
    var object = new Person("Sudheer");
            </code></pre>
            <li><strong>Singleton pattern:</strong> A Singleton is an object which can only be instantiated one time.</li>
            <pre><code class="language-javascript">
    var object = new (function () {
      this.name = "Sudheer";
    })();
            </code></pre>
        </ol>
        `
    },
    {
        slug: "what-is-a-prototype-chain",
        question: "What is a prototype chain",
        answer: `<h3 id="what-is-a-prototype-chain">What is a prototype chain</h3>
        <p><strong>Prototype chaining</strong> is used to build new types of objects based on existing ones. It is similar to inheritance in a class-based language.</p>
        <p>The prototype on an object instance is available through <code>Object.getPrototypeOf(object)</code> or <code>__proto__</code> property, whereas the prototype on constructor functions is available through <code>Object.prototype</code>.</p>
        <p><img class='img-fluid col-md-6' src="assets/javascript/prototype_chain.png" alt="Screenshot"></p>
        `
    },
    {
        slug: "what-is-the-difference-between-call-apply-and-bind",
        question: "What is the difference between Call, Apply and Bind",
        answer: `<h3 id="what-is-the-difference-between-call-apply-and-bind">What is the difference between Call, Apply and Bind</h3>
        <p>The difference between Call, Apply, and Bind can be explained with the examples below:</p>
        <p><strong>Call:</strong> The <code>call()</code> method invokes a function with a given <code>this</code> value and arguments provided one by one.</p>
        <pre><code class="language-javascript">
    var employee1 = { firstName: "John", lastName: "Rodson" };
    var employee2 = { firstName: "Jimmy", lastName: "Baily" };
    
    function invite(greeting1, greeting2) {
      console.log(
        greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
      );
    }
    
    invite.call(employee1, "Hello", "How are you?"); // Hello John Rodson, How are you?
    invite.call(employee2, "Hello", "How are you?"); // Hello Jimmy Baily, How are you?
        </code></pre>
        <p><strong>Apply:</strong> Invokes the function with a given <code>this</code> value and allows you to pass in arguments as an array.</p>
        <pre><code class="language-javascript">
    var employee1 = { firstName: "John", lastName: "Rodson" };
    var employee2 = { firstName: "Jimmy", lastName: "Baily" };
    
    function invite(greeting1, greeting2) {
      console.log(
        greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
      );
    }
    
    invite.apply(employee1, ["Hello", "How are you?"]); // Hello John Rodson, How are you?
    invite.apply(employee2, ["Hello", "How are you?"]); // Hello Jimmy Baily, How are you?
        </code></pre>
        <p><strong>Bind:</strong> Returns a new function, allowing you to pass any number of arguments.</p>
        <pre><code class="language-javascript">
    var employee1 = { firstName: "John", lastName: "Rodson" };
    var employee2 = { firstName: "Jimmy", lastName: "Baily" };
    
    function invite(greeting1, greeting2) {
      console.log(
        greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
      );
    }
    
    var inviteEmployee1 = invite.bind(employee1);
    var inviteEmployee2 = invite.bind(employee2);
    inviteEmployee1("Hello", "How are you?"); // Hello John Rodson, How are you?
    inviteEmployee2("Hello", "How are you?"); // Hello Jimmy Baily, How are you?
        </code></pre>
        <p>Call and Apply are pretty much interchangeable. Both execute the current function immediately. You need to decide whether it’s easier to send in an array or a comma-separated list of arguments. You can remember by treating Call is for <strong>comma</strong> (separated list) and Apply is for <strong>Array</strong>.</p>
        <p>Bind creates a new function that will have <code>this</code> set to the first parameter passed to <code>bind()</code>.</p>
        `
    },
    {
        slug: "how-do-you-compare-object-and-map",
        question: "How do you compare Object and Map",
        answer: `<h3 id="how-do-you-compare-object-and-map">How do you compare Object and Map</h3>
        <p><strong>Objects</strong> are similar to <strong>Maps</strong> in that both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. Due to this reason, Objects have been used as Maps historically. But there are important differences that make using a Map preferable in certain cases:</p>
        <ol>
        <li>The keys of an Object can be Strings and Symbols, whereas they can be any value for a Map, including functions, objects, and any primitive.</li>
        <li>The keys in a Map are ordered while keys added to Object are not. Thus, when iterating over it, a Map object returns keys in the order of insertion.</li>
        <li>You can get the size of a Map easily with the size property, while the number of properties in an Object must be determined manually.</li>
        <li>A Map is an iterable and can thus be directly iterated, whereas iterating over an Object requires obtaining its keys in some fashion and iterating over them.</li>
        <li>An Object has a prototype, so there are default keys in an object that could collide with your keys if you're not careful. As of ES5 this can be bypassed by creating an object(which can be called a map) using <code>Object.create(null)</code>, but this practice is seldom done.</li>
        <li>A Map may perform better in scenarios involving frequent addition and removal of key pairs.</li>
        </ol>
        `
    },{
        slug: "what-is-the-difference-between-native-host-and-user-objects",
        question: "What is the difference between native, host and user objects",
        answer: `<h3 id="what-is-the-difference-between-native-host-and-user-objects">What is the difference between native, host and user objects</h3>
        <p><strong>Native objects</strong> are objects that are part of the JavaScript language defined by the ECMAScript specification. For example, String, Math, RegExp, Object, Function etc core objects defined in the ECMAScript spec.</p>
        <p><strong>Host objects</strong> are objects provided by the browser or runtime environment (Node). For example, window, XmlHttpRequest, DOM nodes etc are considered as host objects.</p>
        <p><strong>User objects</strong> are objects defined in the javascript code. For example, User objects created for profile information.</p>
        `
    },{
        slug: "how-to-check-if-a-key-exists-in-an-object",
        question: "How do you check if a key exists in an object",
        answer: `
        <h3 id="how-to-check-if-a-key-exists-in-an-object">How do you check if a key exists in an object</h3>
        <p>You can check whether a key exists in an object or not using three approaches:</p>
        <ol>
          <li><strong>Using in operator:</strong> You can use the <code>in</code> operator to check whether a key exists in an object or not.</li>
          <pre><code class="language-javascript">
    "key" in obj;
          </code></pre>
          <p>If you want to check if a key doesn't exist, remember to use parentheses:</p>
          <pre><code class="language-javascript">
    !("key" in obj);
          </code></pre>
          <li><strong>Using hasOwnProperty method:</strong> You can use <code>hasOwnProperty</code> to particularly test for properties of the object instance (and not inherited properties).</li>
          <pre><code class="language-javascript">
    obj.hasOwnProperty("key"); // true
          </code></pre>
          <li><strong>Using undefined comparison:</strong> If you access a non-existing property from an object, the result is undefined. Let’s compare the properties against undefined to determine the existence of the property.</li>
          <pre><code class="language-javascript">
    const user = {
      name: "John",
    };
    
    console.log(user.name !== undefined); // true
    console.log(user.nickName !== undefined); // false
          </code></pre>
        </ol>
        `
    },{
        slug: "how-to-loop-through-or-enumerate-a-javascript-object",
        question: "How do you loop through or enumerate javascript object",
        answer: `
        <h3 id="how-to-loop-through-or-enumerate-a-javascript-object">How do you loop through or enumerate a JavaScript object</h3>
        <p>You can use the <code>for-in</code> loop to loop through a JavaScript object. You can also make sure that the key you get is an actual property of an object and doesn't come from the prototype using the <code>hasOwnProperty</code> method.</p>
        <pre><code class="language-javascript">
    var object = {
        k1: "value1",
        k2: "value2",
        k3: "value3",
    };

    for (var key in object) {
        if (object.hasOwnProperty(key)) {
        console.log(key + " -> " + object[key]); // k1 -> value1 ...
        }
    }
        </code></pre>
        `
    },{
        slug: "how-to-test-for-an-empty-object",
        question: "How do you test for an empty object",
        answer: `
        <h3 id="how-to-test-for-an-empty-object">How do you test for an empty object</h3>
        <p>There are different solutions based on ECMAScript versions:</p>
        <ol>
          <li><strong>Using Object entries (ECMA 7+):</strong> You can use object entries length along with constructor type.</li>
          <pre><code class="language-javascript">
    Object.entries(obj).length === 0 && obj.constructor === Object; 
    // Since date object length is 0, you need to check constructor check as well
          </code></pre>
          <li><strong>Using Object keys (ECMA 5+):</strong> You can use object keys length along with constructor type.</li>
          <pre><code class="language-javascript">
    Object.keys(obj).length === 0 && obj.constructor === Object; 
    // Since date object length is 0, you need to check constructor check as well
          </code></pre>
          <li><strong>Using for-in with hasOwnProperty (Pre-ECMA 5):</strong> You can use a for-in loop along with hasOwnProperty.</li>
          <pre><code class="language-javascript">
    function isEmpty(obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
            return false;
            }
        }

        return JSON.stringify(obj) === JSON.stringify({});
    }
          </code></pre>
        </ol>
        `
    },{
        slug: "what-are-the-recommendations-to-create-new-objects",
        question: "What are the recommendations to create new object",
        answer: `
        <h3 id="recommendations-to-create-new-objects">What are the recommendations to create new objects</h3>
        <p>It is recommended to avoid creating new objects using <code>new Object()</code>. Instead, you can initialize values based on their type to create the objects.</p>
        <ol>
          <li>Assign <code>{}</code> instead of <code>new Object()</code></li>
          <li>Assign <code>""</code> instead of <code>new String()</code></li>
          <li>Assign <code>0</code> instead of <code>new Number()</code></li>
          <li>Assign <code>false</code> instead of <code>new Boolean()</code></li>
          <li>Assign <code>[]</code> instead of <code>new Array()</code></li>
          <li>Assign <code>/()/</code> instead of <code>new RegExp()</code></li>
          <li>Assign <code>function (){};</code> instead of <code>new Function()</code></li>
        </ol>
        <p>You can define them as follows:</p>
        <pre><code class="language-javascript">
    var v1 = {};
    var v2 = "";
    var v3 = 0;
    var v4 = false;
    var v5 = [];
    var v6 = /()/;
    var v7 = function () {};
        </code></pre>
        `
    },{
        slug: "what-is-the-difference-between-proto-and-prototype",
        question: "What is the difference between proto and prototype",
        answer: `
        <h3 id="difference-between-proto-and-prototype">What is the difference between proto and prototype</h3>
        <p>The <code>__proto__</code> object is the actual object that is used in the lookup chain to resolve methods, etc., whereas <code>prototype</code> is the object that is used to build <code>__proto__</code> when you create an object with <code>new</code>.</p>
        <pre><code class="language-javascript">
    new Employee().__proto__ === Employee.prototype;
    new Employee().prototype === undefined;
        </code></pre>
        <p>There are a few more differences:</p>
        <table class='table table-bordered'>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Prototype</th>
              <th>proto</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Access</td>
              <td>All the function constructors have prototype properties.</td>
              <td>All the objects have <code>__proto__</code> property.</td>
            </tr>
            <tr>
              <td>Purpose</td>
              <td>Used to reduce memory wastage with a single copy of function.</td>
              <td>Used in lookup chain to resolve methods, constructors, etc.</td>
            </tr>
            <tr>
              <td>ECMAScript</td>
              <td>Introduced in ES6</td>
              <td>Introduced in ES5</td>
            </tr>
            <tr>
              <td>Usage</td>
              <td>Frequently used</td>
              <td>Rarely used</td>
            </tr>
          </tbody>
        </table>
        `
    },
    {
        slug: "what-is-a-freeze-method",
        question: "What is a freeze method",
        answer: `
        <h3 id="what-is-a-freeze-method">What is a freeze method</h3>
        <p>The <strong>freeze()</strong> method is used to freeze an object. Freezing an object does not allow adding new properties to an object, prevents from removing, and prevents changing the enumerability, configurability, or writability of existing properties. It returns the passed object and does not create a frozen copy.</p>
        <pre><code class="language-javascript">
    const obj = {
        prop: 100,
    };

    Object.freeze(obj);
    obj.prop = 200; // Throws an error in strict mode

    console.log(obj.prop); //100
        </code></pre>
        <p>Remember freezing is only applied to the top-level properties in objects but not for nested objects. For example, let's try to freeze a user object which has employment details as a nested object and observe that details have been changed.</p>
        <pre><code class="language-javascript">
    const user = {
        name: "John",
        employment: {
        department: "IT",
        },
    };

    Object.freeze(user);
    user.employment.department = "HR";
        </code></pre>
        <p><strong>Note:</strong> It causes a TypeError if the argument passed is not an object.</p>
        `
    },{
        slug: "purpose-and-need-for-freeze-method",
        question: "What is the purpose of freeze method",
        answer: `
        <h3 id="purpose-of-freeze-method">What is the purpose of freeze method</h3>
        <p>Below are the main benefits of using the freeze method:</p>
        <ol>
          <li>It is used for freezing objects and arrays.</li>
          <li>It is used to make an object immutable.</li>
        </ol>
        `,
        },
        {
        slug: "purpose-and-need-for-freeze-method",
        question: "Why do I need to use freeze method",
        answer: `
        <h3 id="need-for-freeze-method">Why do I need to use freeze method</h3>
        <p>In the Object-oriented paradigm, an existing API contains certain elements that are not intended to be extended, modified, or re-used outside of their current context. Hence it works as the <code>final</code> keyword which is used in various languages.</p>
        `
    },{
        slug: "how-to-determine-whether-object-is-frozen-or-not-and-compare-values-using-object-is",
        question: "How do you determine whether object is frozen or not",
        answer: `
        <h3 id="how-to-determine-whether-object-is-frozen-or-not">How do you determine whether object is frozen or not</h3>
        <p>The <code>Object.isFrozen()</code> method is used to determine if an object is frozen or not. An object is frozen if all of the below conditions hold true:</p>
        <ol>
          <li>If it is not extensible.</li>
          <li>If all of its properties are non-configurable.</li>
          <li>If all its data properties are non-writable.</li>
        </ol>
        <p>The usage is as follows:</p>
        <pre><code class="language-javascript">
    const object = {
        property: "Welcome JS world",
    };
    Object.freeze(object);
    console.log(Object.isFrozen(object));
        </code></pre>
        `,
        },
        {
        slug: "how-to-determine-whether-object-is-frozen-or-not-and-compare-values-using-object-is",
        question: "How do you determine two values same or not using object",
        answer: `
        <h3 id="how-to-determine-two-values-same-or-not-using-object">How do you determine two values same or not using object</h3>
        <p>The <code>Object.is()</code> method determines whether two values are the same value. For example, the usage with different types of values would be:</p>
        <pre><code class="language-javascript">
    Object.is("hello", "hello"); // true
    Object.is(window, window); // true
    Object.is([], []); // false
        </code></pre>
        <p>Two values are the same if one of the following holds:</p>
        <ol>
          <li>both undefined</li>
          <li>both null</li>
          <li>both true or both false</li>
          <li>both strings of the same length with the same characters in the same order</li>
          <li>both the same object (means both objects have the same reference)</li>
          <li>both numbers and:
            <ul>
              <li>both +0</li>
              <li>both -0</li>
              <li>both NaN</li>
              <li>both non-zero and both not NaN and both have the same value.</li>
            </ul>
          </li>
        </ol>
        `
    },{
        slug: "what-is-the-purpose-of-using-object-is-method",
        question: "What is the purpose of using object is method",
        answer: `
        <h3 id="purpose-of-using-object-is-method">What is the purpose of using object is method</h3>
        <p>Some of the applications of Object's <code>is</code> method are as follows:</p>
        <ol>
          <li>It is used for comparison of two strings.</li>
          <li>It is used for comparison of two numbers.</li>
          <li>It is used for comparing the polarity of two numbers.</li>
          <li>It is used for comparison of two objects.</li>
        </ol>
        `
    },{
        slug: "how-to-copy-properties-from-one-object-to-other",
        question: "How do you copy properties from one object to other",
        answer: `
        <h3 id="how-to-copy-properties-from-one-object-to-another">How do you copy properties from one object to other</h3>
        <p>You can use the <code>Object.assign()</code> method, which is used to copy the values and properties from one or more source objects to a target object. It returns the target object which has properties and values copied from the source objects. The syntax would be as follows:</p>
        <pre><code class="language-javascript">
    Object.assign(target, ...sources);
        </code></pre>
        <p>Let's take an example with one source and one target object:</p>
        <pre><code class="language-javascript">
    const target = { a: 1, b: 2 };
    const source = { b: 3, c: 4 };
    
    const returnedTarget = Object.assign(target, source);
    
    console.log(target); // { a: 1, b: 3, c: 4 }
    
    console.log(returnedTarget); // { a: 1, b: 3, c: 4 }
        </code></pre>
        <p>As observed in the above code, there is a common property (<code>b</code>) from source to target so its value has been overwritten.</p>
        `
    },{
        slug: "what-are-the-applications-of-assign-method",
        question: "What are the applications of assign method",
        answer: `
        <h3 id="applications-of-assign-method">What are the applications of assign method</h3>
        <p>Below are some of the main applications of <code>Object.assign()</code> method:</p>
        <ol>
          <li>It is used for cloning an object.</li>
          <li>It is used to merge objects with the same properties.</li>
        </ol>
        `
    },{
        slug: "what-is-a-proxy-object",
        question: "What is a proxy object",
        answer: `
        <h3 id="what-is-a-proxy-object">What is a proxy object</h3>
        <p>The Proxy object is used to define custom behavior for fundamental operations such as property lookup, assignment, enumeration, function invocation, etc. The syntax would be as follows:</p>
        <pre><code class="language-javascript">
    var p = new Proxy(target, handler);
        </code></pre>
        <p>Let's take an example of a proxy object:</p>
        <pre><code class="language-javascript">
    var handler = {
        get: function (obj, prop) {
        return prop in obj ? obj[prop] : 100;
        },
    };

    var p = new Proxy({}, handler);
    p.a = 10;
    p.b = null;

    console.log(p.a, p.b); // 10, null
    console.log("c" in p, p.c); // false, 100
        </code></pre>
        <p>In the above code, it uses <code>get</code> handler which defines the behavior of the proxy when an operation is performed on it.</p>
        `
    },{
        slug: "what-is-the-purpose-of-seal-method",
        question: "What is the purpose of seal method",
        answer: `
        <h3 id="purpose-of-seal-method">What is the purpose of seal method</h3>
        <p>The <strong>Object.seal()</strong> method is used to seal an object, by preventing new properties from being added to it and marking all existing properties as non-configurable. But values of present properties can still be changed as long as they are writable. Let's see the below example to understand more about <code>seal()</code> method:</p>
        <pre><code class="language-javascript">
    const object = {
        property: "Welcome JS world",
    };
    Object.seal(object);
    object.property = "Welcome to object world";
    console.log(Object.isSealed(object)); // true
    delete object.property; // You cannot delete when sealed
    console.log(object.property); // Welcome to object world
        </code></pre>
        `
    },{
        slug: "what-are-the-applications-of-seal-method",
        question: "What are the applications of seal method",
        answer: `
        <h3 id="applications-of-seal-method">What are the applications of seal method</h3>
        <p>Below are the main applications of <code>Object.seal()</code> method:</p>
        <ol>
          <li>It is used for sealing objects and arrays.</li>
          <li>It is used to make an object immutable.</li>
        </ol>
        `
    },{
        slug: "what-are-the-differences-between-freeze-and-seal-methods",
        question: "What are the differences between freeze and seal methods",
        answer: `
        <h3 id="differences-between-freeze-and-seal-methods">What are the differences between freeze and seal methods</h3>
        <p>If an object is frozen using the <code>Object.freeze()</code> method then its properties become immutable and no changes can be made in them, whereas if an object is sealed using the <code>Object.seal()</code> method then the changes can be made in the existing properties of the object.</p>
        `
    },{
        slug: "how-to-determine-if-an-object-is-sealed-or-not",
        question: "How do you determine if an object is sealed or not",
        answer: `
        <h3 id="how-to-determine-if-an-object-is-sealed-or-not">How do you determine if an object is sealed or not</h3>
        <p>The <code>Object.isSealed()</code> method is used to determine if an object is sealed or not. An object is sealed if all of the below conditions hold true:</p>
        <ol>
          <li>If it is not extensible.</li>
          <li>If all of its properties are non-configurable.</li>
          <li>If it is not removable (but not necessarily non-writable).</li>
        </ol>
        <p>Let's see it in action:</p>
        <pre><code class="language-javascript">
    const object = {
        property: "Hello, Good morning",
    };

    Object.seal(object); // Using seal() method to seal the object

    console.log(Object.isSealed(object)); // checking whether the object is sealed or not
        </code></pre>
        `
    },
    {
        slug: "how-to-get-enumerable-key-and-value-pairs",
        question: "How do you get enumerable key and value pairs",
        answer: `
        <h3 id="how-to-get-enumerable-key-and-value-pairs">How do you get enumerable key and value pairs</h3>
        <p>The <code>Object.entries()</code> method is used to return an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a <code>for...in</code> loop. Let's see the functionality of <code>Object.entries()</code> method in an example:</p>
        <pre><code class="language-javascript">
    const object = {
        a: "Good morning",
        b: 100,
    };

    for (let [key, value] of Object.entries(object)) {
        console.log(\`\${key}: \${value}\`); // a: 'Good morning'
        // b: 100
    }
        </code></pre>
        <p><strong>Note:</strong> The order is not guaranteed as object defined.</p>
        `
    },{
        slug: "what-is-the-main-difference-between-object-values-and-object-entries-method",
        question: "What is the main difference between Object.values and Object.entries method",
        answer: `
        <h3 id="main-difference-between-object-values-and-object-entries-method">What is the main difference between Object.values and Object.entries method</h3>
        <p>The <code>Object.values()</code> method's behavior is similar to <code>Object.entries()</code> method but it returns an array of values instead of [key, value] pairs.</p>
        <pre><code class="language-javascript">
    const object = {
        a: "Good morning",
        b: 100,
    };

    for (let value of Object.values(object)) {
        console.log(\`\${value}\`); // 'Good morning'
        // 100
    }
        </code></pre>
        `
    },{
        slug: "how-to-get-list-of-keys-of-any-object",
        question: "How can you get the list of keys of any object",
        answer: `
        <h3 id="how-to-get-list-of-keys-of-any-object">How can you get the list of keys of any object</h3>
        <p>You can use the <code>Object.keys()</code> method, which is used to return an array of a given object's own property names, in the same order as we get with a normal loop. For example, you can get the keys of a user object:</p>
        <pre><code class="language-javascript">
    const user = {
        name: "John",
        gender: "male",
        age: 40,
    };

    console.log(Object.keys(user)); // ['name', 'gender', 'age']
        </code></pre>
        `
    },{
        slug: "how-to-create-an-object-with-prototype",
        question: "How do you create an object with prototype",
        answer: `
        <h3 id="how-to-create-an-object-with-prototype">How do you create an object with prototype</h3>
        <p>The <code>Object.create()</code> method is used to create a new object with the specified prototype object and properties. It uses an existing object as the prototype of the newly created object. It returns a new object with the specified prototype object and properties.</p>
        <pre><code class="language-javascript">
    const user = {
        name: "John",
        printInfo: function () {
        console.log(\`My name is \${this.name}.\`);
        },
    };

    const admin = Object.create(user);

    admin.name = "Nick"; // Remember that "name" is a property set on "admin" but not on "user" object

    admin.printInfo(); // My name is Nick
        </code></pre>
        `
    },{
        slug: "what-are-the-different-ways-to-access-object-properties",
        question: "What are the different ways to access object properties",
        answer: `
        <h3 id="different-ways-to-access-object-properties">What are the different ways to access object properties</h3>
        <p>There are 3 possible ways for accessing the property of an object:</p>
        <ol>
          <li><strong>Dot notation:</strong> It uses dot for accessing the properties</li>
          <pre><code class="language-javascript">
    objectName.property;
          </code></pre>
          <li><strong>Square brackets notation:</strong> It uses square brackets for property access</li>
          <pre><code class="language-javascript">
    objectName["property"];
          </code></pre>
          <li><strong>Expression notation:</strong> It uses expression in the square brackets</li>
          <pre><code class="language-javascript">
    objectName[expression];
          </code></pre>
        </ol>
        `
    },{
        slug: "how-to-get-the-prototype-of-an-object",
        question: "How do you get the prototype of an object",
        answer: `
        <h3 id="how-to-get-the-prototype-of-an-object">How do you get the prototype of an object</h3>
        <p>You can use the <code>Object.getPrototypeOf(obj)</code> method to return the prototype of the specified object. i.e. The value of the internal <code>prototype</code> property. If there are no inherited properties then <code>null</code> value is returned.</p>
        <pre><code class="language-javascript">
    const newPrototype = {};
    const newObject = Object.create(newPrototype);

    console.log(Object.getPrototypeOf(newObject) === newPrototype); // true
        </code></pre>
        `
    },{
        slug: "what-happens-if-i-pass-string-type-for-getprototype-method",
        question: "What happens If I pass string type for getPrototype method",
        answer: `
        <h3 id="what-happens-if-i-pass-string-type-for-getprototype-method">What happens If I pass string type for getPrototype method</h3>
        <p>In ES5, it will throw a <code>TypeError</code> exception if the <code>obj</code> parameter isn't an object. Whereas in ES2015, the parameter will be coerced to an <code>Object</code>.</p>
        <pre><code class="language-javascript">
    // ES5
    Object.getPrototypeOf("James"); // TypeError: "James" is not an object
    // ES2015
    Object.getPrototypeOf("James"); // String.prototype
        </code></pre>
        `
    },{
        slug: "how-to-set-prototype-of-one-object-to-another",
        question: "How do you set prototype of one object to another",
        answer: `
        <h3 id="how-to-set-prototype-of-one-object-to-another">How do you set prototype of one object to another</h3>
        <p>You can use the <code>Object.setPrototypeOf()</code> method that sets the prototype (i.e., the internal <code>Prototype</code> property) of a specified object to another object or null. For example, if you want to set prototype of a square object to rectangle object would be as follows:</p>
        <pre><code class="language-javascript">
    Object.setPrototypeOf(Square.prototype, Rectangle.prototype);
    Object.setPrototypeOf({}, null);
        </code></pre>
        `
    },{
        slug: "how-to-check-whether-an-object-can-be-extendable-or-not",
        question: "How do you check whether an object can be extendable or not",
        answer: `
        <h3 id="how-to-check-whether-an-object-can-be-extendable-or-not">How do you check whether an object can be extendable or not</h3>
        <p>The <code>Object.isExtensible()</code> method is used to determine if an object is extendable or not. i.e., Whether it can have new properties added to it or not.</p>
        <pre><code class="language-javascript">
    const newObject = {};
    console.log(Object.isExtensible(newObject)); // true
        </code></pre>
        <p><strong>Note:</strong> By default, all the objects are extendable. i.e., The new properties can be added or modified.</p>
        `
    },{
        slug: "what-are-the-different-ways-to-make-an-object-non-extensible",
        question: "What are the different ways to make an object non-extensible",
        answer: `
        <h3 id="different-ways-to-make-an-object-non-extensible">What are the different ways to make an object non-extensible</h3>
        <p>You can mark an object non-extensible in 3 ways:</p>
        <ol>
          <li><code>Object.preventExtensions()</code></li>
          <li><code>Object.seal()</code></li>
          <li><code>Object.freeze()</code></li>
        </ol>
        <pre><code class="language-javascript">
    var newObject = {};
    
    Object.preventExtensions(newObject); // Prevent objects are non-extensible
    Object.isExtensible(newObject); // false
    
    var sealedObject = Object.seal({}); // Sealed objects are non-extensible
    Object.isExtensible(sealedObject); // false
    
    var frozenObject = Object.freeze({}); // Frozen objects are non-extensible
    Object.isExtensible(frozenObject); // false
        </code></pre>
        `
    },{
        slug: "what-is-json-and-its-common-operations",
        question: "What is JSON and its common operations",
        answer: `
    <h4>What is JSON and its common operations</h4>
    <p><strong>JSON</strong> is a text-based data format following JavaScript object syntax, which was popularized by <code>Douglas Crockford</code>. It is useful when you want to transmit data across a network. It is basically just a text file with an extension of .json, and a MIME type of application/json</p>
    <p><b>Note:</b> When exchanging data between a browser and a server, the data can only be text. Since JSON is text only, it can easily be sent to and from a server, and used as a data format by any programming language.</p>
    
    <p><b>Parsing:</b>  Converting a string to a native object</p>
    <pre><code class="language-javascript">
    JSON.parse(text);
    </code></pre>
    
    <p><b>Stringification:</b> Converting a native object to a string so that it can be transmitted across the network</p>
    <pre><code class="language-javascript">
    JSON.stringify(object);
    </code></pre>
        `
    },{
        slug: "what-are-the-syntax-rules-of-json",
        question: "What are the syntax rules of JSON",
        answer: `
    <h3>What are the syntax rules of JSON</h3>
    <p>Below are the list of syntax rules of JSON:</p>
    <ol>
      <li>The data is in name/value pairs</li>
      <li>The data is separated by commas</li>
      <li>Curly braces hold objects</li>
      <li>Square brackets hold arrays</li>
    </ol>
        `
    }
    
    
    
    
    
    
    
    
          
]
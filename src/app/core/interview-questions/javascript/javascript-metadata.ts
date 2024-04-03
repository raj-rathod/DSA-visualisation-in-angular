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
    }
]
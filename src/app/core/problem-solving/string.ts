export const StringTips = `<h2>String problem-solving tips</h2>
<p> <strong>Note:</strong> The ASCII values of the alphabet vary from <strong>65 to 90</strong> for <strong>uppercase letters</strong> and from <strong>97 to 122</strong> for <strong>lowercase letters</strong>.</p>
<h3>Useful build-in string operations methods</h3>
<ol>
<li><p><strong>concat()</strong>: This method is used to concatenate one or more strings. It takes one or more strings as arguments and returns a new string that is the concatenation of the original string(s) and the argument(s).</p>

<pre><code class="language-javascript">
    let str1 = &quot;Hello&quot;;
    let str2 = &quot;World&quot;;
    let result = str1.concat(&quot; &quot;, str2);
    console.log(result); // Output: Hello World

</code></pre>
</li>
<li><p><strong>charAt()</strong>: This method returns the character at a specified index in a string. It takes an index as an argument and returns the character at that index.</p>

<pre><code class="language-javascript">
    let str = &quot;Hello&quot;;
    console.log(str.charAt(0)); // Output: H
    console.log(str.charAt(3)); // Output: l

</code></pre>
</li>
<li><p><strong>substring()</strong>: This method returns the part of the string between the specified start and end indexes. It takes one or two arguments: the start index and the end index.</p>

<pre><code class="language-javascript">
    let str = &quot;Hello World&quot;;
    console.log(str.substring(6)); // Output: World
    console.log(str.substring(0, 5)); // Output: Hello

</code></pre>
</li>
<li><p><strong>slice()</strong>: This method extracts a section of a string and returns it as a new string. It takes one or two arguments: the start index and optionally the end index.</p>

<pre><code class="language-javascript">
    let str = &quot;Hello World&quot;;
    console.log(str.slice(6)); // Output: World
    console.log(str.slice(0, 5)); // Output: Hello

</code></pre>
</li>
<li><p><strong>toUpperCase() / toLowerCase()</strong>: These methods return the string in uppercase or lowercase letters, respectively.</p>

<pre><code class="language-javascript">
    let str = &quot;Hello World&quot;;
    console.log(str.toUpperCase()); // Output: HELLO WORLD
    console.log(str.toLowerCase()); // Output: hello world

</code></pre>
</li>
<li><p><strong>indexOf() / lastIndexOf()</strong>: These methods return the index of the first/last occurrence of a specified value in a string.</p>

<pre><code class="language-javascript">
    let str = &quot;Hello World&quot;;
    console.log(str.indexOf(&quot;o&quot;)); // Output: 4
    console.log(str.lastIndexOf(&quot;o&quot;)); // Output: 7

</code></pre>
</li>
<li><p><strong>replace()</strong>: This method replaces a specified value with another value in a string.</p>

<pre><code class="language-javascript">
    let str = &quot;Hello World&quot;;
    console.log(str.replace(&quot;World&quot;, &quot;Universe&quot;)); // Output: Hello Universe

</code></pre>
</li>
<li><p><strong>charCodeAt()</strong>: This method returns the Unicode value of the character at a specified index in a string.</p>

<pre><code class="language-javascript">
    let text = &quot;Hello&quot;;
    let code = text.charCodeAt(0);
    console.log(code); // Output: 72 (Unicode value of &#39;H&#39;)

</code></pre>
</li>
<li><p><strong>fromCharCode()</strong>: This method returns a string created from the specified sequence of Unicode values.</p>

<pre><code class="language-javascript">
    let char = String.fromCharCode(65);
    console.log(char); // Output: A

</code></pre>
</li>
<li><p><strong>split()</strong>: This method is used to split a string into an array of substrings based on a specified separator.</p>
<pre><code class="language-javascript">
    let str = &quot;apple,banana,orange&quot;;
    let arr = str.split(&quot;,&quot;);
    console.log(arr); // Output: [&quot;apple&quot;, &quot;banana&quot;, &quot;orange&quot;]

</code></pre>
</li>
</ol>

<h3>Reverse a string:</h3>

<p>Here&#39;s a simple JavaScript function to reverse a string:</p>
<pre><code class="language-javascript">
    function reverseString(str) {
       return str.split(&quot;&quot;).reverse().join(&quot;&quot;);
   }

    let originalString = &quot;Hello&quot;;
    let reversedString = reverseString(originalString);
    console.log(reversedString); // Output: &quot;olleH&quot;

</code></pre>
<h3>To find how many times a substring appears in a string</h3>
<p>A function that takes a string and a substring, and returns the number of times the substring appears within the string:</p>
<pre><code class="language-javascript">
    function countSubstring(str, subStr) {
        // Calculate the length difference between the 
        // original string and the string after removing all occurrences of the substring
        return (str.length - str.split(subStr).join(&#39;&#39;).length) / subStr.length;
    }

    // Example usage:
    let mainString = &quot;0101010101&quot;;
    let subString = &quot;010&quot;;
    let count = countSubstring(mainString, subString);
    console.log(count); // Output: 2

</code></pre>

<h3>Palindrome operation</h3>

<pre><code class="language-javascript">
    s.split(&quot;&quot;) // Convert the string s into an array of characters
    .slice(Math.ceil(s.length / 2)) // Get the second half of the array
    .reverse() // Reverse the order of the characters in the second half
    .map((v, i) =&gt; { 
        //return Math.abs(s.charCodeAt(i) - v.charCodeAt(0));
        // write your logic here
    })

</code></pre>

<h3>Whether a given string can be rearranged into a palindrome.</h3>
<p><strong>Note:</strong> A string can be made into a palindrome if it has at most one character that occurs an odd number of times</p>
<pre><code class="language-javascript">
    function canBePalindrome(str) {
        // Create a frequency map to count occurrences of characters
        const frequencyMap = new Map();
        
        // Count occurrences of each character in the string
        for (let char of str) {
            if (frequencyMap.has(char)) {
                frequencyMap.set(char, frequencyMap.get(char) + 1);
            } else {
                frequencyMap.set(char, 1);
            }
        }
        
        // Count how many characters occur an odd number of times
        let oddCount = 0;
        for (let count of frequencyMap.values()) {
            if (count % 2 !== 0) {
                oddCount++;
            }
        }
        
        // A string can be made into a palindrome if it has at most one character that occurs an odd number of times
        return oddCount &lt;= 1;
    }

</code></pre>
`
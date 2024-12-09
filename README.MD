### This is a DAPP


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Learn about HTML and CSS in this comprehensive tutorial.">
    <meta name="keywords" content="HTML, CSS, Web Development, Tutorial">
    <meta name="author" content="Your Name">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>HTML and CSS Tutorial</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Roboto', sans-serif;
        }
    </style>
    <script src="script.js" defer></script>


Headings (<h1>, <h2>, <h3>): Used for main, sub-headings, and section titles.
Paragraphs (<p>): Provide descriptive text about Web3.
Unordered List (<ul>) and List Items (<li>): Create a bullet-point list of core Web3 features.
Horizontal Rule (<hr>): Separate sections of content.
Emphasis Tags (<strong>, <em>): Highlight key terms and concepts related to Web3.


<b> - Bold text
<strong> - Important text
<i> - Italic text
<em> - Emphasized text
<mark> - Marked text
<small> - Smaller text
<del> - Deleted text
<ins> - Inserted text
<sub> - Subscript text
<sup> - Superscript text



<!-- Before Web3 -->

Making module and imports
Async Await E.g using the Fetch api
The new keyword for class instance creation



import { ethers } from "https://cdnjs.cloudflare.com/ajax/libs/ethers/6.7.0/ethers.min.js";
import { greet } from "./config.js";


console.log(ethers)

const provider = new ethers.BrowserProvider(window.ethereum)

console.log("provider: ", provider)



export const fetchBlockchainData = async () => {
    const network = await provider.getNetwork();
    console.log("Connected to:", network.name, "Chain ID:", network.chainId);

}

greet()


class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  const person1 = new Person('Alice', 30);
  person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.


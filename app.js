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


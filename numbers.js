const numbers = []; // empty array
numbers[3] = 'a'; // [undefined, undefined, undefined, 'a']
const result = []; // empty array
for (const n of numbers) {
    result.push(n) 
}

console.log(result); // 
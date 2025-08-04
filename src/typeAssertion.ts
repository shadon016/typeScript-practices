// 🟦 Type Assertion (TypeScript Concept)
// TypeScript-কে তুমি বলছো: “আমি জানি এটা কোন টাইপ, তুমি চিন্তা করো না।”

// কখন ব্যবহার করো:
// যখন তুমি নিজেই জানো টাইপ কী, কিন্তু TypeScript বুঝতে পারছে না।

// DOM থেকে element নিচ্ছো, type জানা কিন্তু TS বুঝছে না।


const heading:any="hello heading";

const length:number=(heading as string).length

const alterLength:number=(<string>heading).length

console.log(length);
console.log(alterLength);
// // map array helper method
// const myArray = [1,2,3];
// const myNewArray = myArray.map(element=>Math.pow(element,2));
// console.log(myNewArray);

const postsJson = [
    '{ "postId": 1234, "comments": 10 }',
    '{ "postId": 1235, "comments": 30 }'
];
console.log(postsJson);

// const postsArray = postsJson.map(post=>JSON.parse(post));
const postsArray = postsJson.map(JSON.parse);

console.log(postsArray[0].postId);
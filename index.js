// // find() array helper method
// const myArray = [10,[],{},true,"abc",20];
// const result = myArray.find(element => typeof element === "string");
// console.log(result);

const postsArray = [
    {postId:1,comments:10},
    {postId:2,comments:20},
    {postId:3,comments:30},
    {postId:4,comments:40}
];

const findSinglePost = (postId,postsArray)=>postsArray.find(post => post.postId==postId);

console.log(findSinglePost(5,postsArray));
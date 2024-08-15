let myPost = {};
myPost.postTitle = "Object is reference type";
myPost.postLikes = 0;
myPost.shared = false;

myPost.postLikes = myPost.postLikes+1;
delete myPost.shared;
console.log(myPost);

// // EXAMPLE 1 - Object literal
// const str = {
//     value : 10,
//     // info : ()=>{
//     //     console.log(this); // global object
//     //     console.log(this.value); // undefined
//     // }
//     info : function(){
//         console.log(this); // global object
//         console.log(this.value); // undefined
//     }
// };
// str.info();

// // EXAMPLE 2 - function constructor
// function GroceryItem(title,kind){
//     this.title = title;
//     this.kind = kind;
// }

// const apple = new GroceryItem("Apple","Fruit");
// const onion = new GroceryItem("Onion","Vegetable");
// console.log(apple);
// console.log(onion);

// EXAMPLE 3 - function constructor using arrow function
const GroceryItem = (title,kind)=>{
    this.title = title;
    this.kind = kind;
}

const apple = new GroceryItem("Apple","Fruit"); //TypeError: GroceryItem is not a constructor
const onion = new GroceryItem("Onion","Vegetable"); //TypeError: GroceryItem is not a constructor
console.log(apple);
console.log(onion);
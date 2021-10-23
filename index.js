let a = 6;
let b = 4;
let sum = a + b;console.log(sum);
for (let i = 1; i <= 10; i++) console.log(i);

if (sum > 10) console.log("sum is great");

else console.log("sum is small");

//object --properties & functionalities
//pen ---color, price, brand, function: write
//phone, tv, laptop, book
let book={
    title:"harry potter",
    price:300,
    author:{
        firstname:"J K",
        lastname:"Rowling",
    },
    story: function(){
        console.log("stories");
  },
};
console.log(book.author.firstname);
book.story();

document
     .getElementsByTagName("button")[0]
     .addEventListener("click",function () {
document.getElementsByTagName("h1")[0].style.color="#FFB319";
     });
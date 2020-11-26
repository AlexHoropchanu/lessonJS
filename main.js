"use strict";

//Задание 1

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array[0] + " - это ноль");
for (let i = 1; i < array.length; i++) {
  let a = i % 2;
  if (a == 0) {
    console.log(i + " " + "- четное");
  } else if (a == 1) {
    console.log(i + " " + "- нечетное");
  }
}

//Задание 2

const post = {
  author: "John", //вывести этот текст
  postId: 23,
  comments: [
    {
      userId: 10,
      userName: "Alex",
      text: "lorem ipsum",
      rating: {
        likes: 10,
        dislikes: 2, //вывести это число
      },
    },
    {
      userId: 5, //вывести это число
      userName: "Jane",
      text: "lorem ipsum 2", //вывести этот текст
      rating: {
        likes: 3,
        dislikes: 1,
      },
    },
  ],
};
console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

//Задание 3

// const products = [
//   {
//     id: 3,
//     price: 200,
//   },
//   {
//     id: 4,
//     price: 900,
//   },
//   {
//     id: 1,
//     price: 1000,
//   },
// ];
// products.forEach(function (product) {
//   console.log(product.price - (15 * product.price) / 100);
// });

//Задание 4

const products = [
  {
    id: 3,
    price: 127,
    photos: ["1.jpg", "2.jpg"],
  },
  {
    id: 5,
    price: 499,
    photos: [],
  },
  {
    id: 10,
    price: 26,
    photos: ["3.jpg"],
  },
  {
    id: 8,
    price: 78,
  },
];

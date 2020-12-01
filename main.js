"use strict"
// Задание 1.1
function Product(name, price) {
    this.name = name;
    this.price = price;
}
Product.prototype.make25PercentDiscount = function (procent) {
    return this.price - ((this.price * procent) / 100)
};
let product1 = new Product("banana", "242");
console.log(product1)
console.log(product1.make25PercentDiscount(25))

// ES6

class Product1{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount(procent){
        return this.price - ((this.price * procent) / 100)
}
}
let product2 = new Product1("banana", "242");
console.log(product2)
console.log(product2.make25PercentDiscount(25))

//Задание 1.2

function Post(autor, text, data) {
    this.autor = autor;
    this.text = text;
    this.data = data;
}
Post.prototype.edit = (text) => this.text = text;
let post1 = new Post("Alex", "Book", "date")
console.log(post1.edit("new text"))


function AttachedPost(autor, text, data){
    Post.call(this, autor, text, data);
    this.highlighted = false;
}
AttachedPost.prototype.makeTextHighlighted = () => this.highlighted = true;
let attachedPost1 = new AttachedPost("aboltus", "text", "23")
console.log(attachedPost1.makeTextHighlighted())

//ES6

class Post1{
    constructor(autor, text, data) {
        this.autor = autor;
        this.text = text;
        this.data = data;
    }
    edit(text){
        return this.text=text;
    }
}
let post2 = new Post1("Jane", "newtext"," 25")
console.log(post2)
console.log(post2.edit("text"))

class AttachedPost1 extends Post1{
    constructor(autor, text, data) {
        super(autor,text,data)
        this.highlighted = false;
    }
    makeTextHighlighted(){
        return this.highlighted = true;
    }
}
let attachedPost2 = new AttachedPost1("aboltus", "text", "23")
console.log(attachedPost2)
console.log(attachedPost2.makeTextHighlighted())
class ProductsList{
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];//массив товаров
//        this.allProducts=[];//массив объектов
        this._fetchProducts();
    }
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 3000, source: "https://i.citrus.ua/imgcache/size_500/uploads/shop/a/5/a5ba83055dc3a1454e70969259966cb0.jpg"},
            {id: 2, title: 'Mouse', price: 20, source: "data:image/jpeg;base64,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"},
            {id: 3, title: 'Keyboard', price: 200, source: "https://resource.logitechg.com/content/dam/gaming/en/products/pro-x-keyboard/pro-x-keyboard-gallery-1.png"},
            {id: 4, title: 'Gamepad', price: 50, source: "data:image/jpeg;base64,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"},
        ];
        // console.log(this.goods[0].price + this.goods[1].price + this.goods[2].price + this.goods[3].price);
    }
    goodList(){
        return this.goods.reduce(function (sum, good) {
            return sum + good.price
        }, 0)
    }


    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const productObject = new ProductItem(product);
//            this.allProducts.push(productObject);
//            block.innerHTML += productObject.render();
            block.insertAdjacentHTML('beforeend',productObject.render());
        }
    }
}

class ProductItem{
    constructor(product){
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.source = product.source;
    }
    render(){
        return `<div class="product-item">
                <img src="${this.source}" alt="Pictures">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductsList();
list.render();
console.log(list.goodList());
// class Card{
//     constructor() {
//     }
//     addProduct(){
//
//     }
//     removeProduct(){
//
//     }
// }
// class CardItem{
//     constructor() {
//     }
//     iterationProduct(){
//
//     }
//     removeIterationProduct(){
//
//     }
// }
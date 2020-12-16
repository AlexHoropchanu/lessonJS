const products = [
    {id: 1, title: 'Notebook', price: 2000, source: 'data:image/jpeg;base64,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'},
    {id: 2, title: 'Mouse', price: 20, source: 'data:image/jpeg;base64,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'},
    {id: 3, title: 'Keyboard', price: 200, source: 'data:image/jpeg;base64,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EREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB//9k='},
    {id: 4, title: 'Gamepad', price: 50, source: 'data:image/jpeg;base64,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'},
];
//Функция для формирования верстки каждого товара
const renderProduct = (title, price, source) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <img src="${source}">
                <p>${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.price, item.source));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join(''); //Дело в том что productsList у нас массив,
    // а свойства массива перечисляются через запятую, а метод join() обьеденяет все элементы массива в строку,
    // а в его аргументе передаюстся значения каким образом в строке будут разделятся элементы масива
};

renderPage(products);
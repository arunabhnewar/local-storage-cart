// select element
const productNameInputField = document.getElementById('product-name');
const productPriceInputField = document.getElementById('product-price');
const itemList = document.getElementById('item-list');

// get product input field
const addItem = () => {
    const productName = productNameInputField.value;
    const productPrice = productPriceInputField.value;

    if (!(productName && productPrice)) {
        return;
    }

    setDataToLocalStorage(productName, productPrice)

    // display product name and price on UI
    displayProduct();

    // clear input field
    productNameInputField.value = '';
    productPriceInputField.value = '';
}

const getDataFromLocalStorage = () => {
    const cart = localStorage.getItem('item');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    }
    else {
        cartObj = {};
    }
    return cartObj;
}


const displayProduct = () => {
    const cart = getDataFromLocalStorage();

    itemList.innerHTML = '';

    for (const item in cart) {
        const li = document.createElement('li');
        li.style.listStyle = 'none';
        li.style.fontSize = '18px';
        li.style.fontWeight = 700;
        li.innerHTML = `${item}: $${cart[item]}`

        itemList.appendChild(li);
    }
}

const setDataToLocalStorage = (name, price) => {
    const cart = getDataFromLocalStorage();

    // if (cart[name]) {
    //     cart[name] = cart[name] + 1;
    // }
    // else {
    //     cart[name] = cart[name];
    // }

    cart[name] = price;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('item', cartStringified)
}

const placeOrder = () => {
    itemList.textContent = '';
    localStorage.removeItem('item');
}


displayProduct();
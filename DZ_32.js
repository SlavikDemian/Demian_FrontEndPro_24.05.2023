

let selectedProducts = [];

const productContainer = document.createElement('div');
document.body.appendChild(productContainer);
productContainer.style.display = 'inline-block';

const orderForm = document.getElementById('orderForm');
const submitButton = orderForm.querySelector('button[type="submit"]');
const orderInfoContainer = document.getElementById('orderInfo');
const mainContainer = document.getElementById('mainContainer');
const formContainer = document.getElementById('formContainer');
const myOrdersButton = document.getElementById('myOrdersButton');
const categoryMain = document.getElementById('categoryMain');
const selectedProductsContainer = document.getElementById('selectedProductsContainer');
const orderList = document.getElementById('orderList');
const placeOrderButton = document.getElementById('placeOrderButton');


const arrayShop = [
    {
        category: 'Filters',
        products: [
            {
                name: 'Filters oil',
                description: 'Oil filter in a metal housing for TOYOTA, NISSAN, HONDA',
                price: 10.99
            },
            {
                name: 'Filters air',
                description: 'Air filter for TOYOTA, NISSAN, HONDA',
                price: 8.99
            },
            {
                name: 'Filters cabin',
                description: 'Cabin filter for TOYOTA, NISSAN, HONDA',
                price: 12.99
            },
        ]
    },
    {
        category: 'Oils',
        products: [
            {
                name: 'Motul oil',
                description: 'Oil 100% synthetic Motul 5w30',
                price: 20.99
            },
            {
                name: 'Castrol oil',
                description: 'Oil 100% synthetic Castrol 5w30',
                price: 18.99
            },
            {
                name: 'Aral oil',
                description: 'Oil 100% synthetic Aral 5w30',
                price: 16.99
            },
        ]
    },
    {
        category: 'Chassis',
        products: [
            {
                name: 'Car levers',
                description: 'Kit lever for the entire chassis',
                price: 35.99
            },
            {
                name: 'Ball supports of the car',
                description: 'Kit ball supports for the entire chassis of the car',
                price: 45.99
            },
            {
                name: 'Silent blocks',
                description: 'Kit silent blocks for the entire chassis',
                price: 25.99
            },
        ]
    }
];


function showProductInfo(product) {
    const productDescription = document.createElement('p');
    productDescription.textContent = product.description;

    const productPrice = document.createElement('p');
    productPrice.textContent = `Price: $${product.price.toFixed(2)}`;

    const buyButton = document.createElement('button');
    buyButton.textContent = 'Buy';
    buyButton.addEventListener('click', () => {
        alert(`Product "${product.name}" added to cart.`);
        const currentDate = new Date().toLocaleDateString();
        selectedProducts.push({ name: product.name, price: product.price.toFixed(2), date: currentDate });
        updateSelectedProductsList();
    });

    orderInfoContainer.innerHTML = '';
    orderInfoContainer.appendChild(productDescription);
    orderInfoContainer.appendChild(productPrice);
    orderInfoContainer.appendChild(buyButton);
}


function updateSelectedProductsList() {
    selectedProductsContainer.innerHTML = '';
    if (selectedProducts.length === 0) {
        selectedProductsContainer.innerHTML = 'No products in cart.';
    } else {
        const ul = document.createElement('ul');
        selectedProducts.forEach((product, index) => {
            const li = document.createElement('li');

            li.textContent = `${product.name} - $${product.price} (Ordered on ${product.date})`;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => {
                removeProductFromCart(index);
            });

            li.appendChild(removeButton);
            ul.appendChild(li);
        });
        selectedProductsContainer.appendChild(ul);
    }
    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
}


function removeProductFromCart(index) {
    selectedProducts.splice(index, 1);
    updateSelectedProductsList();
}


arrayShop.forEach((element) => {
    const categorySecond = document.createElement('li');
    categorySecond.innerHTML = element.category;
    categoryMain.appendChild(categorySecond);

    categorySecond.addEventListener('click', (event) => {
        const selectedCategory = event.target.innerHTML;
        const selectedCategoryObj = arrayShop.find((item) => item.category === selectedCategory);
        const productsList = document.createElement('ul');

        selectedCategoryObj.products.forEach((product) => {
            const productLI = document.createElement('li');
            productLI.innerHTML = product.name;

            productLI.addEventListener('click', () => {
                showProductInfo(product);
            });

            productsList.appendChild(productLI);
        });

        orderInfoContainer.innerHTML = '';
        orderInfoContainer.appendChild(productsList);
    });
});

myOrdersButton.addEventListener('click', () => {
    categoryMain.style.display = 'none';
    formContainer.style.display = 'none';
    orderInfoContainer.innerHTML = '';

    selectedProductsContainer.style.display = 'block';

    updateSelectedProductsList();

    placeOrderButton.textContent = 'Place your order';
    placeOrderButton.addEventListener('click', () => {

        formContainer.style.display = 'block';

        selectedProductsContainer.style.display = 'none';
        placeOrderButton.style.display = 'none';

        orderList.innerHTML = '';
    });

    if (selectedProducts.length > 0) {
        selectedProductsContainer.appendChild(placeOrderButton);
    }
});




placeOrderButton.addEventListener('click', () => {
    selectedProductsContainer.style.display = 'none';
    placeOrderButton.style.display = 'none';

    orderList.innerHTML = '';

    orderForm.style.display = 'block';
});


submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const formFields = orderForm.querySelectorAll('input, select, textarea');
    let isFormValid = true;

    formFields.forEach((field) => {
        if (field.required && !field.value.trim()) {
            isFormValid = false;
            const fieldName = field.getAttribute('name');
            alert(`Please fill in the field: ${fieldName}`);
        }
    });

    if (isFormValid) {
        const formData = new FormData(orderForm);
        let orderInfo = '<h2>Information about order:</h2>';

        formData.forEach((value, name) => {
            orderInfo += `<p><b>${name}:</b> ${value}</p>`;
        });

        orderInfoContainer.innerHTML = orderInfo;

        const date = new Date().toLocaleDateString();
        const totalPrice = selectedProducts.reduce((total, product) => total + parseFloat(product.price), 0);
        const order = {date, totalPrice, products: selectedProducts};
        saveOrder(order);

        selectedProducts = [];
        updateSelectedProductsList();
    }
});

function saveOrder(order) {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
}

const storedCategories = localStorage.getItem('categories');
if (storedCategories) {
    const categories = JSON.parse(storedCategories);

    const categoryMain = document.getElementById('categoryMain');

    categories.forEach(category => {
        const categoryElement = document.createElement('li');
        categoryElement.textContent = category;
        categoryMain.appendChild(categoryElement);
        categoryElement.addEventListener('click', (event) => {
            const selectedCategory = event.target.textContent;
            const selectedCategoryObj = arrayShop.find((item) => item.category === selectedCategory);
            const productsList = document.createElement('ul');

            selectedCategoryObj.products.forEach((product) => {
                const productLI = document.createElement('li');
                productLI.innerHTML = product.name;

                productLI.addEventListener('click', () => {
                    showProductInfo(product);
                });

                productsList.appendChild(productLI);
            });

            orderInfoContainer.innerHTML = '';
            orderInfoContainer.appendChild(productsList);
        });
    });
}


function addCategory(categoryName) {
    arrayShop.push({
        category: categoryName,
        products: []
    });

    const categories = arrayShop.map(item => item.category);
    localStorage.setItem('categories', JSON.stringify(categories));
}

const storedSelectedProducts = localStorage.getItem('selectedProducts');
if (storedSelectedProducts) {
    selectedProducts = JSON.parse(storedSelectedProducts);
    updateSelectedProductsList();
}









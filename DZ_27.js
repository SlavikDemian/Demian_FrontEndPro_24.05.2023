const main_container = document.createElement('div')
document.body.appendChild(main_container)
main_container.style.display = 'inline-block'

const productContainer = document.createElement('div')
document.body.appendChild(productContainer)
productContainer.style.display = 'inline-block'

const arrayShop = [
    {
        category: 'Filters',
        products: [
            {
                name: 'Filters oil',
                description: 'Oil filter in a metal housing for TOYOTA, NISSAN, HONDA',
            },
            {
                name: 'Filters air',
                description: 'Air filter for TOYOTA, NISSAN, HONDA',
            },
            {
                name: 'Filters cabin',
                description: 'Cabin filter for TOYOTA, NISSAN, HONDA',
            },
        ]
    },
    {
        category: 'Oils',
        products: [
            {
                name: 'Motul oil',
                description: 'Oil 100% synthetic Motul 5w30',
            },
            {
                name: 'Castrol oil',
                description: 'Oil 100% synthetic Castrol 5w30',
            },
            {
                name: 'Aral oil',
                description: 'Oil 100% synthetic Aral 5w30',
            },
        ]
    },
    {
        category: 'Chassis',
        products: [
            {
                name: 'Car levers',
                description: 'Kit lever for the entire chassis',
            },
            {
                name: 'Ball supports of the car',
                description: 'Kit ball supports for the entire chassis of the car',
            },
            {
                name: 'Silent blocks',
                description: 'Kit silent blocks for the entire chassis',
            },
        ]
    }
];


const categoryMain = document.createElement('ul');

arrayShop.forEach((element) => {
    const categorySecond = document.createElement('li');
    categorySecond.innerHTML = element.category;
    categoryMain.appendChild(categorySecond);

    categorySecond.addEventListener('click', (event) => {
        const selectedCategory = event.target.innerHTML;

        productContainer.innerHTML = '';
        descriptionContainer.innerHTML = '';

        const productsList = document.createElement('ul');

        const selectedCategoryObj = arrayShop.find((item) => item.category === selectedCategory);

        selectedCategoryObj.products.forEach((product) => {
            const productLI = document.createElement('li');
            productLI.innerHTML = product.name;

            productLI.addEventListener('click', () => {
                showProductDescription(product);
            });

            productsList.appendChild(productLI);
        });

        productContainer.appendChild(productsList);
    });
});

main_container.appendChild(categoryMain);

const descriptionContainer = document.createElement('div');
descriptionContainer.style.display = 'inline-block';
document.body.appendChild(descriptionContainer);

function showProductDescription(product) {
    descriptionContainer.innerHTML = '';

    const productDescription = document.createElement('p');
    productDescription.textContent = product.description;

    const buyButton = document.createElement('button');
    buyButton.textContent = 'Buy';
    buyButton.addEventListener('click', () => {
        alert(`Product "${product.name}" added to cart.`);
        productContainer.innerHTML = '';
        descriptionContainer.innerHTML = '';
    });

    descriptionContainer.appendChild(productDescription);
    descriptionContainer.appendChild(buyButton);
}

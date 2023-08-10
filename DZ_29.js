/*
const array = [1, 2, [1.1, 1.2, 1.3], 3];
const body = document.body;

function generateList(array) {
    const ulElement = document.createElement('ul');

    array.forEach(item => {
        const liElement = document.createElement('li');

        if (Array.isArray(item)) {
            const nestedUlElement = generateList(item);
            liElement.appendChild(nestedUlElement);
        } else {
            liElement.textContent = item;
        }

        ulElement.appendChild(liElement);
    });

    return ulElement;
}

const listElement = generateList(array);
body.appendChild(listElement);

 */
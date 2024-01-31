const firstМassif = ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"];

const lastМassif = ["1", "2", "3", "sea", "user", 23];


function displayArrayAsList(array, parent = document.body) {
    const ul = document.createElement('ul');

    array.forEach((element) => {
    const li = document.createElement('li');

    li.textContent = element;

    ul.appendChild(li);
    });

    parent.appendChild(ul);
}



displayArrayAsList(firstМassif);

displayArrayAsList(lastМassif, document.querySelector('ul'));


"use strict";

// Теоретичні питання:
//     1. .createElement() / .before(), .after(), .prepend(), .append()
//     2. .remove() , .removeChild()
//     3. .before(), .after() / .insertAdjacentHTML('beforebegin/afterend', ...)


const link = document.createElement("a");

const footer = document.querySelector("footer");

link.textContent = "Learn More";

link.setAttribute('href', '#');

footer.append(link);



const selectElement = document.createElement('select');

selectElement.setAttribute('id', 'rating');

const featuresSection = document.querySelector('.features');

featuresSection.before(selectElement);

const ratings = ["5 Stars", "4 Stars", "3 Stars", "2 Stars", "1 Star"];

ratings.forEach((text, value) => {
    let option = document.createElement('option');
    option.value = value + 1;
    option.textContent = text;
    selectElement.prepend(option);
});
 
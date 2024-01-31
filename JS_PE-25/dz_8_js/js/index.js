const elements = document.querySelectorAll('p');
    elements.forEach(element => {
    element.style.background = '#ff0000';
})


const id = document.getElementById('optionsList');
console.log(id);


let el = document.getElementById('optionsList');

console.log(el.parentNode);

el.childNodes.forEach(item => {
    console.log('Тип ноди: ' + item.nodeType);
    console.log('Назва ноди: ' + item.nodeName);
});


let div = document.createElement('div');
div.className = "testParagraph";
div.innerHTML = '<p>This is a paragraph</p>';

document.body.append(div);


const mainHeader = document.querySelector('.main-header');
console.log(mainHeader);


for (const child of mainHeader.children) {
    child.classList.add('nav-item')
}


const sectionTitle = document.querySelectorAll('.section-title');

sectionTitle.forEach(item => item.classList.remove('section-title'));
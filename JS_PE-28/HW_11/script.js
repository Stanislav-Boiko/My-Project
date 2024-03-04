

// Теоретичні питання:
// 1. Події - це механізм, який дозволяє нам реагувати на різні дії користувача
// 2. click, mousedown, mouseup, contextmenu
// 3. Виникає при натисканні правої кнопки миші на елементі, що зазвичай викликає контекстне меню


const btnClickMe = document.getElementById('btn-click');

const section = document.getElementById('content');

const footer = document.querySelector('footer');

const newBtn = document.createElement('button');

newBtn.setAttribute('id', 'btn-input-create');

newBtn.textContent = 'New Button';

let clickCount = 0;

footer.before(newBtn);

function createP() {
    let newParagraf = document.createElement('p');
    newParagraf.textContent = 'New Paragraph';
    section.append(newParagraf);
}

btnClickMe.addEventListener('click', createP)

function createInput() {
    clickCount++;
    let newInput = document.createElement('input');
    newInput.setAttribute('type', 'text');
    newInput.setAttribute('placeholder', 'Ваше Імя');
    newInput.setAttribute('name', 'User NAME');
    newInput.style.display = 'block';
    newBtn.after(newInput);

    if (clickCount >= 1) {
        newBtn.removeEventListener('click', createInput);
    }
}


newBtn.addEventListener('click', createInput)
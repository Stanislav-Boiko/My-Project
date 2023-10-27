const title = document.querySelectorAll('.tabs-title');

const item = document.querySelectorAll('.tabs-item');

function removeClassList() {
    title.forEach(element => {
        element.classList.remove('active');
    })
}


title.forEach(element => {
    element.addEventListener("click", function (e) {

        removeClassList()

        console.log(e.target.dataset.title);
        
        item.forEach(elem => {
            console.log(elem.dataset.item);
            
            elem.classList.remove('active');

            if (e.target.dataset.title === elem.dataset.item) {
                e.target.classList.add('active');
                elem.classList.add('active');
            }
        })
    });
})


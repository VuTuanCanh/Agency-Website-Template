var item = document.querySelectorAll('.FAQ-list .item');
var answer = document.querySelector('.FAQ-list .item .answer');

console.log(item);

item.forEach(element => {
    element.addEventListener('click', () => {
        var childrenShow = element.children[1];
        console.log(childrenShow);
        childrenShow.classList.add('show');

    })
});

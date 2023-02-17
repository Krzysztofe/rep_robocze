var input = document.querySelector('#input');
var btn = document.querySelector('#btn');
var ul = document.querySelector('#ul');
var tasks = [];
var add = function (task) {
    return tasks.push(task);
};
var create = function () {
    tasks.forEach(function (item) {
        var elementLi = document.createElement('li');
        elementLi.innerText = item;
        ul.appendChild(elementLi);
    });
};
btn.addEventListener('click', function () {
    add(input.value);
    create();
});
//# sourceMappingURL=app.js.map

const obj = {
    name: 'ooo',
    age: 2,
    city: "ktaków"
}

let yy = obj

yy = "PP"


console.log(yy)
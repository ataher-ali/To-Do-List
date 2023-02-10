
let btn   = document.getElementById('btn');
let input = document.getElementById('input');
let ul    = document.getElementById('ul');


let add = () =>{
    let li = document.createElement('li');
    li.innerHTML = input.value;
    ul.appendChild(li);
    input.value = ''
}

btn.addEventListener('click',function() {
add()
})

ul.addEventListener('click', event => {

    event.target.parentNode.removeChild(event.target);

    });


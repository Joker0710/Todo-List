const form = document.querySelector('form');
const liste = document.querySelector('ul');
const input = document.querySelector('input');

let allwork = [];

form.addEventListener('submit', event =>{
    event.preventDefault(); //previens le comportement par defaut qui est le rafraichissment de la page 

    const text = input.value.trim();  // permet de supprimer les espaces
    
    if (text !== ''){
        rajouterUneTache(text);
        input.value = '';
    }

}) 
function rajouterUneTache (text){
    const todo = {
        text,
        id:Date.now
    }
    afficherLIste(todo);
}
function afficherLIste (todo){

    const item = document.createElement('li');
    item.setAttribute ('data-key', todo.id);

    const input = document.createElement('input');
    input.setAttribute( 'type', 'checkbox');
    input.addEventListener('click', tacheFaite)
    item.appendChild(input)

    const txt = document.createElement ('span');
    txt.innerText = todo.text;
    item.appendChild(txt);

    const btn = document.createElement ('button');
    btn.addEventListener('click', supprimerTache);
    const img = document.createElement('img');
    img.setAttribute('src', 'close.svg')
    btn.appendChild(img);
    item.appendChild(btn);


    liste.appendChild(item);
    allwork.push(item);
}
function supprimerTache(e){
    allwork.forEach(element =>{
    if (e.target.parentNode.getAttribute('data-key') === element.getAttribute('data-key')){
      element.remove()  
      allwork = allwork.filter(li => li.dataset.key !== element.dataset.key)
    }
    })
}
function tacheFaite(e){
    e.target.parentNode.classList.toggle('finDeTache')
    console.log(todo.id);
}


input.addEventListener('mouseenter', () => input.setAttribute('placeholder', ''))
input.addEventListener('mouseout', () => input.setAttribute('placeholder', 'Enter your task here'))

let addToy = false
function getToys(){
  fetch("http://localhost:3000/toys")
  .then(resp => resp.json())
  .then(data => { for(card of data){createToyCard(card)} } )
  .catch(err => console.log(err));
}
function createToyCard(data){
  const card = document.createElement("div");
  card.className = "card";
  const header = document.createElement("h2");
  header.innerHTML=data.name;
  const img = document.createElement("img");
  img.className="toy-avatar";
  img.src=data.image;
  img.alt="toy pic";
  const para = document.createElement("p");
  para.innerHTML=data.likes + "Likes";
  const btn = document.createElement("button");
  btn.className="like-btn";
  btn.innerHTML="Like <3";

  card.append(header,img,para,btn);
  document.body.appendChild(card);
}

function addAToy(){
  const inputs = document.getElementsByClassName("input-text")
  const name = inputs[0].value;
  const src = inputs[1].value;
  console.log(name,src);
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name ,
      image: src,
      likes: 0
    })
}
  fetch("http://localhost:3000/toys",configObj)
  .then(resp => resp.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));
}
document.addEventListener("DOMContentLoaded", ()=>{
  const addBtn = document.querySelector('#new-toy-btn')
  const toyForm = document.querySelector('.container')
  addBtn.addEventListener('click', () => {
    // hide & seek with the form
    addToy = !addToy
    if (addToy) {
      toyForm.style.display = 'block'
    } else {
      toyForm.style.display = 'none'
    }
  })

  getToys();

  document.getElementsByClassName('submit')[0].addEventListener('click',addAToy);
})

function submitData(name,email){
let configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    name ,
    email
  })
};

return fetch("http://localhost:3000/users", configObj)
.then(resp => resp.json())
.then(data => document.querySelector('span').textContent = data.id)
.catch(err => document.querySelector('span').textContent = err );
}

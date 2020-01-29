let addToy = false
function getToys(){
  fetch("http://localhost:3000/toys")
  .then(resp => resp.json())
  .then(data => createToyCard(data))
  .catch(err => console.log(err));
}
function createToyCard(data){
  const card = document.createElement("div");
  card.class = "card";
  const header = document.createElement("h2");
  header.innerHTML="nader";
  const img = document.createElement("img");
  img.class="toy-avatar";
  img.src="nader";
  img.alt="toy pic";
  const para = document.createElement("p");
  para.innerHTML="nader";
  const btn = document.createElement("button");
  btn.class="like-btn";
  btn.innerHTML="Like <3";

  card.append(header,img,para,btn);
  document.body.appendChild(card);
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


import './App.css';
import './index.css';

function App() {
  return (
    <body>
      <section class="section-center">
        {/* form  */}
        <form class="grocery-form">
          <p class="alert"></p>
          <h3>Crossfit PR tracker</h3>
          <div class="form-control">
            <input type="text" id="grocery" placeholder="Ingrese su nuevo record" />
            <button type="submit" class="submit-btn">
              Submit
            </button>
          </div>
        </form>
        {/* list  */}
        <div class="grocery-container">
          <div class="grocery-list">
            <article class="grocery-item">
            </article>
          </div>
          {/* button */}
          <button type="button" class="clear-btn">clear record</button>
        </div>
      </section >
    </body>
  );
}

/*logica del app*/

const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

/*edit option*/

let editElement;
let editFlag = false;
let editID = "";

//****event listeners*****/
//submit form
form.addEventListener("submit", addItem);

//functions 

function addItem(e) {
  e.preventDefault();
  const value = grocery.value;

  const id = new Date().getTime().toString();  //es como un work around para el unique ID pero no recomendado para trabajo serio
  if (value && !editFlag) {
    const element = document.createElement('article');
    //add class
    element.classList.add('grocery-item');
    //add id
    const attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML =
    ` <p class="title">${value}</p>
    <div class="btn-container">
      <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>`
    //append child 
    list.appendChild(element);
    //display alert
  displayAlert("item was added to the list". " success");
//show container
container.classList.add("show-container");
//add to local storage
addToLocalStorage(id,value);
//set back to default
setBackToDefault()


  } else if (value && editFlag ) {
  console.log("editing");
  } else {
    displayAlert("please enter value", "danger");
    //alert.textContent ="empty value";
   // alert.classList.add("alert-danger")
    //console.log("empty value");
  }
}
//display alert
function displayAlert(text,action0){
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
//remove alert
setTimeout(function(){
  alert.textContent = "";
  alert.classList.remove(`alert-${action}`);
}, 1000);
}
//set back to default
function setBackToDefault() {
  console.log("set back to default");
}

//LOCAL STORATE
function addToLocalStorage(id,value){
  console.log("added to local storage");
}


export default App;

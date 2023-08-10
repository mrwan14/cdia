let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// slider starts

var wallPapers = new Array(
    "./images/banner 1 1.jpg",
    "./images/banner 2 2.jpg",
    "./images/banner 3 3.jpg",
    "./images/banner 4 4.jpg",
)

// Get Slider Items | Array.form [ES6 Feature]
var sliderImages = Array.from(document.querySelectorAll('.home .homeSection .content'));

// Get Number Of Slides
var slidesCount = sliderImages.length;

// Set Current Slide
var currentSlide = 1;

// Slide Number Element
var slideNumberElement = document.getElementById('slide-number');

// Previous and Next Buttons
var nextButton = document.querySelector('.next');
var prevButton = document.querySelector('.prev');

// Handle Click on Previous and Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create The Main UL Element
var paginationElement = document.createElement('ul');

// Set ID On Created Ul Element
paginationElement.setAttribute('id', 'pagination-ul');

// Create List Items Based On Slides Count
for (var i = 1; i <= slidesCount; i++) {

    // Create The LI
    var paginationItem = document.createElement('li');

    // Set Custom Attribute
    paginationItem.setAttribute('data-index', i);
    // Append Items to The Main Ul List
    paginationElement.appendChild(paginationItem);

}

// Add The Created UL Element to The Page
document.querySelector('.indicators').appendChild(paginationElement);

// Get The New Created UL
var paginationCreatedUl = document.getElementById('pagination-ul');

// Get Pagination Items | Array.form [ES6 Feature]
var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// Loop Through All Bullets Items
for (var i = 0; i < paginationsBullets.length; i++) {

    paginationsBullets[i].onclick = function () {

        currentSlide = parseInt(this.getAttribute('data-index'));

        theChecker();

    }

}

var home = document.querySelector('.home');
// Trigger The Checker Function
theChecker();


// Next Slide Function
function nextSlide() {

    if (nextButton.classList.contains('disabled')) {

        // Do Nothing
        return false;

    } else {
        currentSlide++;

        theChecker();
    }

}
// Previous Slide Function
function prevSlide() {

    if (prevButton.classList.contains('disabled')) {

        // Do Nothing
        return false;

    } else {
        currentSlide--;

        theChecker();

    }

}

// Create The Checker Function
function theChecker() {

    // Set The Slide Number
    slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (slidesCount);

    // Remove All Active Classes
    removeAllActive();

    // Set Active Class On Current Slide
    sliderImages[currentSlide - 1].classList.add('active');

    // Set Active Class on Current Pagination Item
    paginationCreatedUl.children[currentSlide - 1].classList.add('active');

    // Check if Current Slide is The First
    if (currentSlide == 1) {

        // Add Disabled Class on Previous Button
        prevButton.classList.add('disabled');

    } else {
        home.style.backgroundImage = 'url("' + wallPapers[currentSlide - 1] + '")';
        // Remove Disabled Class From Previous Button
        prevButton.classList.remove('disabled');

    }

    // Check if Current Slide is The Last
    if (currentSlide == slidesCount) {

        // Add Disabled Class on Next Button
        nextButton.classList.add('disabled');

    } else {
        home.style.backgroundImage = 'url("' + wallPapers[currentSlide - 1] + '")';
        // Remove Disabled Class From Next Button
        nextButton.classList.remove('disabled');

    }

}

// Remove All Active Classes From Images and Pagination Bullets
function removeAllActive() {

    // Loop Through Images
    sliderImages.forEach(function (img) {

        img.classList.remove('active');

    });

    // Loop Through Pagination Bullets
    paginationsBullets.forEach(function (bullet) {

        bullet.classList.remove('active');

    });

}



window.addEventListener("scroll", function () {
    var h = document.querySelector(".header");
    h.classList.toggle("sticky", window.scrollY > 10)
})

let up = document.querySelector(".up");

window.onscroll = function () {
    this.scrollY >= 1000 ? up.classList.add("show") : up.classList.remove("show");
};

up.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};


//------------------------------------

const url = 'https://script.google.com/macros/s/AKfycbw_og_I7LxHX6DQyixHMSvUoCC9SByN-H0TTx394H9YXIHxHgZmhpAfEsmunZwslN5UQA/exec';

const myForm = document.querySelector('#myform');
const myName = document.querySelector('#name');
const myEmail = document.querySelector('#email');
const myMessage = document.querySelector('#message');

myName.value = 'Laurence Svekis';
myEmail.value = 'gapp*****@gmail.com';
myMessage.value = 'Hello World';

myForm.addEventListener('submit', submitter);

function submitter(e) {

    console.log('submitted');
    e.preventDefault();
    let message = '';

    if (myName.value.length < 3) {
        myName.style.borderColor = 'red';
        message += `<br>Name needs to be 3 characters`;
    }

    if (myEmail.value.length < 5) {
        myEmail.style.borderColor = 'red';
        message += `<br>Email is missing`;
    }

    if (message) {
        const div = document.createElement('div');
        div.innerHTML = message;
        div.style.color = 'red';
        myForm.append(div);

        setTimeout(() => {
            div.remove();
            myName.style.borderColor = '';
            myEmail.style.borderColor = '';
        }, 5000);

    } else {
        const myObj = {
            name: myName.value,
            email: myEmail.value,
            message: myMessage.value
        };
        addSendMail(myObj);
    }
}
//Start Our Clients Section
const clientSlider=[...document.querySelectorAll(".our-clients .all-clients .box")];
const slidesClientsCount=clientSlider.length;
let currentClientsSlide=1;
const prevClientsButton=document.getElementById("prevClientsButton");
const nextClientsButton=document.getElementById("nextClientsButton");
// Handling Click on previous and Next Button
prevClientsButton.addEventListener("click",prevClientsSlide);
nextClientsButton.addEventListener("click",nextClientsSlide);
//Create The Main Ul Element
const paginationCLentsElement=document.createElement("ul");
paginationCLentsElement.id="pagination-Clients-ul";
for(let i=1;i<=slidesClientsCount;i++){
    const paginationClientsItem=document.createElement("li");
    paginationClientsItem.dataset.index=i;
    paginationClientsItem.appendChild(document.createTextNode(i));
    paginationCLentsElement.appendChild(paginationClientsItem);
}
document.getElementById('clientsIndicators').appendChild(paginationCLentsElement)
const paginationClientsdUl=document.getElementById("pagination-Clients-ul");
const paginatioClientsnBullets=[...document.querySelectorAll("#pagination-Clients-ul li")];
for(let i=0;i<paginatioClientsnBullets.length;i++){
    paginatioClientsnBullets[i].addEventListener("click",function(){
        currentClientsSlide=parseInt(this.getAttribute("data-index"))
        theClientsChecker();
    });
}
theClientsChecker();
//Funcations
//prevSlideClientFunction
function prevClientsSlide(){
    if(prevClientsButton.classList.contains("disabled")){
        return false;
    }else{
        currentClientsSlide--;
        theClientsChecker();
    }
}
//nextSlideClientFunction
function nextClientsSlide(){
    if(nextClientsButton.classList.contains("disabled")){
        return false;
    }else{
        currentClientsSlide++;
        theClientsChecker();
    }
}
//Checker Funcation
function theClientsChecker(){
    removeAllActivesFromClients()
    clientSlider[currentClientsSlide - 1].classList.add("active");
    paginationClientsdUl.children[currentClientsSlide - 1].classList.add("active");
    if(currentClientsSlide==1){
        prevClientsButton.classList.add("disabled");
    }else{
        prevClientsButton.classList.remove("disabled"); 
    }
    if(currentClientsSlide==slidesClientsCount){
        nextClientsButton.classList.add("disabled");
    }else{
        nextClientsButton.classList.remove("disabled"); 
    }
}
//Remove All Actives Classes
function removeAllActivesFromClients(){
    clientSlider.forEach((img)=>img.classList.remove("active")) 
    paginatioClientsnBullets.forEach((bullet)=>bullet.classList.remove("active")) 
}
//End Our Clients Section



AOS.init({
    duration: 1200,
});



let perimetItems = document.getElementById("perimet-items");
let pemetItems = document.getElementById("pemet-items");
let butoniBtn = document.getElementById('butoni');



function showPerimet() {

    perimetItems.classList.remove('d-none');
    perimetItems.classList.add('d-flex')
    pemetItems.classList.add('d-none')
}

function showPemet() {

    pemetItems.classList.remove('d-none');
    pemetItems.classList.add('d-flex')
    perimetItems.classList.add('d-none')
}

function showButoni() {


    butoniBtn.classList.add('d-flex')
}
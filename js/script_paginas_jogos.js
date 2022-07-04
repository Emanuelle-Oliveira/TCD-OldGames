let likebtn = document.querySelector('#likebtn');
let dislikebtn = document.querySelector('#dislikebtn');
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');

likebtn.addEventListener('click', () => {
    input1.value = parseInt(input1.value) + 1;
    input1.style.color = "#000000";
})

dislikebtn.addEventListener('click', () => {
    input2.value = parseInt(input2.value) + 1;
    input2.style.color = "#000000";
})

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slide-img");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}
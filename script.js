const menuBtn = document.getElementById("dropdown-btn");
const dropdownMenu = document.getElementById('dropdown-content');

menuBtn.addEventListener("mouseover", function(e) {
console.log(dropdownMenu.classList)
    if(dropdownMenu.classList.value !== 'visible') {
        dropdownMenu.classList.toggle('visible')
    }
});


menuBtn.addEventListener("click", function() {
    dropdownMenu.classList.toggle('visible')
});



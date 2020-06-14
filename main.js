function myFunction() {
  document.getElementById("myDropdown1").classList.toggle('show');
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn1')) {
    var dropdowns = document.getElementByClassName('dropdown1-content');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var onDropdown = dropdowns[i];
      if (openDropDown.classList.contains('show')) {
        openDropDown.classList.remove('show');

      }
    }
  }
};
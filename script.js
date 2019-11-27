var slideIndex =0;
showSlide();

function showSlide()
{
    var i;
    // Slides is array of objects/elements wich class==images
    var slides = document.getElementsByClassName("images")

    // In our case, we have 3 div elements (since we have 3 images to show)
    for(i=0;i<slides.length;i++)
    {
        // HIde all images
        slides[i].style.display="none";
    }

    // If it is the last image, we go back to image 0
    if(slideIndex == slides.length)
    {
        slideIndex=0;
    }

    // Show element in slides[slideIndex]
    slides[slideIndex].style.display="block";

    //Move to next element in slide array
    slideIndex++;

    // Run this function every 8 seconds
    setTimeout(showSlide, 5000);
}




function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function ajax()
{
  document.getElementsBy
}

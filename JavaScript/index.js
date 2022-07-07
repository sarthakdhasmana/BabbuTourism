

//know more button smoth working
var knowMorebtn = document.querySelector(".knowMoreButton");
knowMorebtn.addEventListener("click", () => {
    var amenities = document.querySelector(".amenitiesSection");
    amenities.scrollIntoView();
    // knowMorebtn.style.transition = "all 1s";
})
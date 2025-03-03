// Allows the first slide to show
let slide_index = 1;
show_slides(slide_index);

// Next/previous controls
function plus_slides(n) {
    show_slides(slide_index += n);
}

// Thumbnail image controls
function current_slide(n) {
    show_slides(slide_index = n);
}

// Gets all of the project containers and assigned them
// a display status to appear

function show_slides(n) {
    let i;
    let slides = document.getElementsByClassName("project_container");

    // If the provided number is more than the number of slides, set index to 1
    // This is what allows the slideshow to restart

    if (n > slides.length) {
        slide_index = 1;
    }

    // If the provided number is less than 1, set index to the number of slides
    // This keeps the slideshow from bugging out if it goes lower than 1 and breaking

    if (n < 1) {
        slide_index = slides.length;
    }

    // iterates through the project_containers and hides anything not selected

    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }

    // Sets the 
    // JS is zero indexed, so slide_index - 1 targets an array number consistently

    slides[slide_index-1].style.display = "block";
}
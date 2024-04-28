/*     start localStorage color            */

let mianColor = localStorage.getItem("color-option");

if (mianColor !== null) {
    //console.log(localStorage.getItem("color-option"))
    document.documentElement.style.setProperty("--main-color", mianColor);

    // active class on Laod

    document.querySelectorAll(".color-list li").forEach(element => {
        element.classList.remove("active");

        if (element.dataset.color === mianColor) {
            element.classList.add("active")
        }
    })
}


/*     End localStorage color            */


//randome background Option
let backgroundOption = true;

//variable To control The Interval
let backgroundInterval;

//chick if there is of the localStorage random Background Item
let backgroundLocalItem = localStorage.getItem("background_option");

//chick if random background local Storage is not empty
if (backgroundLocalItem !== null) {
    //remove all active form spans
    document.querySelectorAll(".background-random span").forEach(element => {
        element.classList.remove("active");
    })
    if (backgroundLocalItem === "true") {
        backgroundOption = true;
        document.querySelector(".background-random .yas").classList.add("active");
    } else {
        backgroundOption = false;
        document.querySelector(".background-random .no").classList.add("active");
    }
}

/*    Start Setting Box    */

document.querySelector(".toggel-btn .icon").onclick = function() {

    this.classList.toggle("fa-spin");

    document.querySelector(".setting-box").classList.toggle("open");
};

/*    Start Setting Box    */

/*    Start swtch color   */
const colorsLi = document.querySelectorAll(".color-list li");
colorsLi.forEach(li => {
    li.addEventListener("click", (e) => {
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
        // set localStorage color
        localStorage.setItem("color-option", e.target.dataset.color);
        // opacity color
        handleActive(e);
    });
});
/*    End swtch color    */


/*    Start swtch background Random   */
const randomBackground = document.querySelectorAll(".background-random span");
randomBackground.forEach(span => {
    span.addEventListener("click", (e) => {
        // opacity color
        handleActive(e);

        if (e.target.dataset.background === "yas") {

            backgroundOption = true;
            randomizImages();
            localStorage.setItem("background_option", true);
        } else {

            backgroundOption = false;
            clearInterval(backgroundInterval);
            localStorage.setItem("background_option", false);
        }
    });
});
/*    End swtch background Random    */


/*    Start Landing Box    */

let landingPage = document.querySelector(".landing-page"),
    imgsArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"];


function randomizImages() {

    if (backgroundOption === true) {


        backgroundInterval = setInterval(() => {
            let randomImg = Math.floor(Math.random() * imgsArray.length);
            landingPage.style.backgroundImage = 'url("images/' + imgsArray[randomImg] + '")';
        }, 8000);


    }

}
randomizImages();

/*     End Landing Box     */
/*     Start Our Skills    */


// Slecet Skills Selector

let ourSkills = document.querySelector(".skills");

window.onscroll = function() {

        // Skills offset top
        let skillsOffsetTop = ourSkills.offsetTop;

        // Skills Outer Height
        let skillsOuterHeight = ourSkills.offsetHeight;

        // Window Height 
        let windowHeight = this.innerHeight;

        // Window Scroll Top
        let windowScrollTop = this.pageYOffset;

        if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

            let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

            allSkills.forEach(skill => {
                skill.style.width = skill.dataset.progress;
            })

        }

    }
    /*     End Our Skills     */
    /*     Start gallery      */
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {
    img.addEventListener('click', (e) => {

        // Create Overlay Element
        let overLay = document.createElement('div');

        // Create class to Ovarlay
        overLay.className = 'popup-overlay';

        // append overlay to body 
        document.body.appendChild(overLay);

        // Create the popup
        let popupBox = document.createElement('div');

        if (img.alt !== null) {

            //create heading 
            let imgHeading = document.createElement('h3');

            //create text for Heading 
            let imgText = document.createTextNode(img.alt);

            //append imgText in imgHeading
            imgHeading.appendChild(imgText);

            //append imgHeading in popupBox
            popupBox.appendChild(imgHeading);
        }

        //create class to popupBox
        popupBox.className = 'popup-box';

        // Create popup img
        let popupImg = document.createElement('img');

        // Set img scr
        popupImg.src = img.src;

        // Append popupImg in popupBox
        popupBox.appendChild(popupImg);

        // Append popupBox in body
        document.body.appendChild(popupBox);

        // Create closepopup
        let closepopup = document.createElement('span');

        // Create closepopup text
        let closepopupText = document.createTextNode("X");

        // Append closepopupText in closepopup
        closepopup.appendChild(closepopupText);

        // create class to closepopup
        closepopup.className = 'close-popup';

        // Append closePopup in PopupBox
        popupBox.appendChild(closepopup);

    })
})

// Class popup
document.addEventListener('click', (e) => {

    if (e.target.className == 'close-popup') {

        // remove popupBox
        e.target.parentNode.remove();
        // remove popup overlay
        document.querySelector(".popup-overlay").remove();
    }


})

/*     End gallery      */

/* Stert Nav Bullet and Navbar */

let allBullets = document.querySelectorAll(".nav-bullets .bullet");

let allLinks = document.querySelectorAll(".links li a");

function scrollSomeWhere(elements) {
    elements.forEach(ele => {
        ele.addEventListener('click', (e) => {
            e.preventDefault(); // لو عاوز اشتغل علي اكتر من صفحه هشيل السطر دا من الكود
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
}
scrollSomeWhere(allBullets);
scrollSomeWhere(allLinks);
/* End Nav Bullet and Navbar */

// handle active state

function handleActive(ev) {
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active");
    });
    ev.target.classList.add("active")
}



// show and hide bullets

let BulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainet = document.querySelector(".nav-bullets");


//localStorge
let bulletsLocalItim = localStorage.getItem("bullets_option");
if (bulletsLocalItim !== null) {
    BulletsSpan.forEach(span => {
        span.classList.remove("active");
    })
    if (bulletsLocalItim === 'block') {
        bulletsContainet.style.display = 'block';
        document.querySelector(".bullets-option .yas").classList.add("active");
    } else {
        bulletsContainet.style.display = 'none';
        document.querySelector(".bullets-option .no").classList.add("active");
    }
}


BulletsSpan.forEach(span => {

    span.addEventListener('click', (e) => {

        if (span.dataset.display === "show") {
            bulletsContainet.style.display = 'block';
            localStorage.setItem("bullets_option", "block");
        } else {
            bulletsContainet.style.display = 'none';
            localStorage.setItem("bullets_option", "none");
        }

        handleActive(e);
    })

})


//reset Button

document.querySelector(".reset-option").onclick = () => {
    //localStorage.clear(); // دي بتمسح اي حاجه داخل اللوكال استوردج 
    localStorage.removeItem("color-option"); //دا بيمسح حاجه محدده بس
    localStorage.removeItem("background_option");
    localStorage.removeItem("bullets_option");

    //Reload page
    window.location.reload();
}

// Toggle menu 

let toggleBtn = document.querySelector(".toggle-menu"),
    theLinks = document.querySelector(".links");

toggleBtn.addEventListener('click', (e) => {
    // Stop propagation
    e.stopPropagation();
    // Toggle Class "menu-active" On Button
    toggleBtn.classList.toggle("menu-active");
    // Toggle Class "open" On Button
    theLinks.classList.toggle("open");
})

document.addEventListener('click', (e) => {
    if (e.target !== toggleBtn && e.target !== theLinks) {
        //check If Menu Is Open
        if (theLinks.classList.contains("open")) {
            // Toggle Class "menu-active" On Button
            toggleBtn.classList.toggle("menu-active");
            // Toggle Class "open" On Button
            theLinks.classList.toggle("open");
        }
    }
})

// Stop propagation On Menu
theLinks.addEventListener('click', (e) => {
    e.stopPropagation();
})
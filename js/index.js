// Your code goes here
//click
const navBar = document.querySelector('.main-navigation');
navBar.addEventListener('click', () => {
    navBar.style.backgroundColor = 'skyblue';
    //doubleclick
    navBar.addEventListener('dblclick', () => {
        navBar.style.backgroundColor = 'teal';
    })
})

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = 'pink';
        // link.stopPropogation();

        link.addEventListener('mouseleave', () => {
            link.style.color = 'black';
        })
    })
})

//mouseover
const funBusImg = document.querySelector('.intro img');
funBusImg.addEventListener('mouseover', () => {
    funBusImg.style.transform = "scale(1.2)";
    funBusImg.style.transition = "transform 0.3s";

    //mouseleave
    funBusImg.addEventListener("mouseleave", () => {
        funBusImg.style.transform = "scale(1)";
    })
})

//mouseout
const welcome = document.querySelectorAll('.intro');
welcome.forEach(para => {
    para.addEventListener('mouseout', () => {
        para.style.backgroundColor = 'skyblue';
    })
})

//wheel
const content = document.querySelectorAll('.content-section');
content.forEach(topic => {
    topic.addEventListener('wheel', () => {
        topic.style.backgroundColor = 'purple';
        //contextmenu
        topic.addEventListener('contextmenu', (event) => {
            event.preventDefault();
        })
    })
})

//mouseenter
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = 'purple';
    })
})


//Scroll
const body = document.querySelector('body');
window.addEventListener('scroll', (event) => {
    body.style.background = 'pink';
    // event.target.style.backgroundColor = 'pink';
});

//resize
const size = document.querySelector('.logo-heading');
window.addEventListener('resize', () => {
    size.style.transform = 'scale (15)';
    console.log('this isnt working!');
})
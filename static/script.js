const acc_ques = document.querySelectorAll(".item-ques");
const acc_ans = document.querySelectorAll(".item-answer");
const arrows = document.querySelectorAll(".arrow-icon");



// faq functionality
for (let ind = 0; ind < acc_ques.length; ind++) {
    acc_ques[ind].addEventListener("click", () => {
        arrows[ind].classList.toggle("open");
        acc_ans[ind].classList.toggle("acc-active");
    });
}

// window loading
window.addEventListener("load", () => {


    // close arrow icon
    arrows.forEach((item) => {
        item.classList.remove("open");
    });

    // close every faq answer
    acc_ans.forEach((ans) => {
        ans.classList.remove("acc-active");
    });
});

// menu logic
const menu_btn = document.querySelector("#menu");
const close_btn = document.querySelector("#close");
const active_nav_container = document.querySelector(".active-menu");
const nav_link = document.querySelectorAll(".link-item a");

menu_btn.addEventListener("click", () => {
    active_nav_container.style.display = "flex";
});
nav_link.forEach((item) => {
    item.addEventListener("click", () => {
        active_nav_container.style.display = "none";
    });
});

close_btn.addEventListener("click", () => {
    active_nav_container.style.display = "none";
});
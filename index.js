const select = (type, name) => {
    if (type == 1) {
        return document.querySelector(name);
    } else {
        return document.querySelectorAll(name);
    }
}

// Animating page title
let all_mary = ["Mary Hardy", "Mary Hardy 💣", "Mary Hardy 💣💣", "Mary Hardy 💣💣💣", "Mary Hardy 💥💥💥", "Mary Hardy 💥💥💥"];
let count_mary = 0;
let title_change = setInterval(() => {
    select(1, ".page_title").innerHTML = all_mary[count_mary];
    count_mary += 1;
    if (count_mary >= all_mary.length) {
        count_mary = 0;
    }
}, 600);


// Features of Header
document.addEventListener("scroll", (event) => {
    scroll_bar_animation();
    if (window.pageYOffset > 600) {
        select(1, ".header").classList.remove("blurred_header");
        select(1, ".header").classList.add("opaque_header");
    } else if (window.pageYOffset > 50) {
        select(1, ".header").classList.remove("opaque_header");
        select(1, ".header").classList.add("blurred_header");
    } else {
        select(1, ".header").classList.remove("opaque_header");
        select(1, ".header").classList.remove("blurred_header");
    }

})

// Scroll percentage bar animation
const scroll_bar_animation = () => {
    let scrolled = (window.pageYOffset / (select(1, "body").offsetHeight - window.innerHeight)* 100) + "%";
    select(1, ".scroll_thumb").style.width = scrolled;
}

// Input field colors
Array.from(select(2, "input")).forEach((item) => {
    item.addEventListener("focus", (event) => {
        event.target.classList.add("border_gray");
        event.target.classList.remove("border_red");
        event.target.classList.remove("border_green");
    });
});
Array.from(select(2, "input")).forEach((item) => {
    item.addEventListener("blur", (event) => {
        border_check(event);
    });
});

select(1, "textarea").addEventListener("focus", (event) => {
    event.target.classList.add("border_gray");
    event.target.classList.remove("border_red");
    event.target.classList.remove("border_green");
});
select(1, "textarea").addEventListener("blur", (event) => {
    border_check(event);
});

const border_check = (event) => {
    if (event.target.value.length >= 4) {
        event.target.classList.remove("border_gray");
        event.target.classList.remove("border_red");
        event.target.classList.add("border_green");
    } else {
        event.target.classList.remove("border_gray");
        event.target.classList.remove("border_green");
        event.target.classList.add("border_red");
    }
}

// Removing Loading screen

document.addEventListener('readystatechange', (event) => {
    if (document.readyState == "complete") {
        setTimeout(() => {
            select(1, "body").classList.remove("no_scroll");
            select(1, "overlay").style.display = "none";
        }, 5000);
    }
});
window.onscroll = function () {
    myFunction();
    myFunction2();
    myFunction3();
};

function myFunction() {
    var img_pos_botton = document.getElementById("category-navbar").offsetTop

    if (window.pageYOffset <= img_pos_botton) {
        document.getElementById("options").classList.remove(
          "fixed");

    } else {
        document.getElementById("options").classList.add(
          "fixed");
    }

}

function myFunction2() {
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll(".category");
    
    let current = "";
    sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
    }

    navLi.forEach((a) => {
        a.classList.remove("active");
        if (a.classList.contains(current)) {
            a.classList.add("active");
        }
    });
    });
}

function myFunction3() {
    document.getElementsByClassName('options')[0].scrollLeft = 0;
    var menus = document.getElementsByClassName('category');
    for (var i = 0; i < menus.length; i++) {
        if (menus[i].classList.contains('active')) {
            document.getElementsByClassName('options')[0].scrollLeft = menus[i].offsetLeft;
        }
    }
}

function lockScroll() {
    var root = document.documentElement;

    document.body.classList.toggle('lock-scroll');
    root.classList.toggle('lock-scroll');

}

function increaseCount(e, el) {
    var input = el.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
  }
function decreaseCount(e, el) {
    var input = el.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
    }
}
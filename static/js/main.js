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
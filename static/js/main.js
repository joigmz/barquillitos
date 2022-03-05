window.onscroll = function () {
    myFunction();
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
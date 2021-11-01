var contbtn = $(".input[type=button]");
var popup = $("#section13 .popup");
function popmsg() {
    popup.toggleClass("active")
};

function popmsg2(e) {
    e.stopPropagation()
    popup.toggleClass("active")
};

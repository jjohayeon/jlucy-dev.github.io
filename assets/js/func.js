var contbtn = $(".input[type=button]");
var popup = $("#section13 .popup");
function popmsg() {
    popup.toggleClass("active")
};

function popmsg2() {
    // e.stopPropagation()
    popup.toggleClass("active")
    window.location.reload(true);
};

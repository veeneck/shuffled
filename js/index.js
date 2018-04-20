$( document ).ready(function() {
	waitToChangeImage(1500)
});

function waitToChangeImage(delay) {
	setTimeout(function() {changeTVImage()} , delay);
}

function changeTVImage() {
	var src = $("#fadeContainer img").attr("src")
	var newSrc = "images/appletv0.png"
	if (src == "images/appletv0.png") {
		newSrc = "images/appletv1.png"
	}
	fadeImage(newSrc)
}

function fadeImage(src) {
	 var oldImg = $("#fadeContainer img");
    
    var img = new Image();
    img.src = src;
    img.className = "phone"
    var newImg = $(img).hide();
    $("#fadeContainer").append(img);
    
    oldImg.stop(true).fadeOut(1000, function() {
        $(this).remove();
    });
    newImg.fadeIn(1000);
    waitToChangeImage(5000)
}
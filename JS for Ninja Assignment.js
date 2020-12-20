$(document).ready(function () {

$('#image1').click(function () {
    $('#image1').fadeOut();
});

$('#image2').click(function () {
    $('#image2').fadeOut();
});

$('#image3').click(function () {
    $('#image3').fadeOut();
});

$('#image4').click(function () {
    $('#image4').fadeOut();
});

$('#image5').click(function () {
    $('#image5').fadeOut();
});

$('#image6').click(function () {
    $('#image6').fadeOut();
});

$('#image7').click(function () {
    $('#image7').fadeOut();
});

$('#image8').click(function () {
    $('#image8').fadeOut();
});

$('#reset').click(function () {
    console.log("button is clicked")
    $('img').fadeIn();
    // at first i was trying to select all of the images in a nest, but all you need to do is just select img. it will select all images in it
});

});

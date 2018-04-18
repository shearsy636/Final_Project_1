// var $img = $('img');

// $img.click(function resiz(e){
//   $img.css({
//     height: '400%',
//     width: '400%',
//   });
// });

// $(".painting_grid").on("click", function(){
//   $(this).css({
//     "height" : "300%",
//     "width" : "300%"}
//     });

  // $(".painting_grid").on("click", function(){
  //   $(this).css({"height" : "70%", "width" : "70%"});
  // });

  // $(".painting_grid").on("click", function(){
  //   $(this).animate( {
  //     height : '80%', width : '80%',}
  //     ,3000)
  // });

// $('.painting_grid').on("click", function(){
//   // modal.style.display = "block";
//   $('#modalImage').attr("src", $(this).attr("src"));
//   // captionText.innerhtml = this.alt;
// });

$('.painting_grid img').on("click", function(){
  // modal.style.display = "block";
  $("#firstModal").fadeIn();
  $('#modalImage').attr("src", $(this).attr("src"));
  // captionText.innerhtml = this.alt;
});
$('.painting_grid img').on("click", function(){
});

$('.drawings_grid img').on("click", function(){
  // modal.style.display = "block";
  $("#firstModal").fadeIn();
  $('#modalImage').attr("src", $(this).attr("src"));
  // captionText.innerhtml = this.alt;
});
$(".modal-content-container").on("click", function(){
  $("#firstModal").fadeOut(750);
})
$(".close").on("click", function(){
  $("#firstModal").fadeOut(750);
})
$('.hamburger').on('click', function(){
  $('nav').animate({
    right:0
  });
});
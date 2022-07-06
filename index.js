/* Navbar change css Property */

$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('sticky-nav', $(this).scrollTop() > $nav.height());
    });
  });

  /*parallax effect on mousemove */

document.addEventListener("mousemove" , parallax);
function parallax(e){
    document.querySelectorAll('.layer').forEach(function(move){
        const speed = move.getAttribute('data-speed')

        const x = (e.clientX*speed)/250;
        const y = (e.clientY*speed)/250;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    })
}

/* filterable div*/

jQuery(".filters").on("click", function(){
    jQuery("#menu-dish").removeClass("bydefault_show");
});
$(function() {
    var filterList = {
        init: function () {
            $("#menu-dish").mixItUp({
                selectors: {
                    target: ".dish-box-wp",
                    filter: ".filter"
                },
                animation: {
                    effects: "fade",
                    easing: "ease-in-out"
                },
                load: {
                    filter: ".all, .breakfast, .lunch, .dinner",
                },
            });
        },
    };
    filterList.init();
});
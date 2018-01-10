/*http://webdesignerwall.com/tutorials/animated-scroll-to-top -- followed the tutorial and to do the change*/

$(document).ready(function() {
		    $('a[href=#top]').click(function(){
		        $('html, body').animate({scrollTop:0}, 'slow');
		        return false;
		    });



			function isScrolledIntoView(elem) {
			    var docViewTop = $(window).scrollTop();
			    var docViewBottom = docViewTop + $(window).height();
			
			    var elemTop = $(elem).offset().top;
			    var elemBottom = elemTop + $(elem).height();
			
			    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom));
			}
		
				var myelement = $('#footer');
				var mymessage = $('#backtotop');
				$(window).scroll(function() {
				    if(isScrolledIntoView(myelement)) {
				        mymessage.fadeIn('500'); 
				    }
				     else {
				        mymessage.fadeOut('100')
				    }

			});
			
			
			$(window).scroll(function() {
				if ($(this).scrollTop() > 200) { 
				    $("#menu").css({ "position": "fixed", "top": "200px"});
				} else {
				    $("#menu").css({ "position": "absolute", "top": "424px" });
				}                           
			});
		});
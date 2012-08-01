/*
Special Thanks to Ian Lunn for giving me this code to hack
Author: Ian Lunn - http://www.ianlunn.co.uk/

License: http://creativecommons.org/licenses/by-sa/3.0/ (Attribution Share Alike). Please attribute work to Ian Lunn simply by leaving these comments in the source code or if you'd prefer, place a link on your website to http://www.ianlunn.co.uk/.

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/



$(document).ready(function() { //when the document is ready...


	//save selectors as variables to increase performance
	var $window = $(window);
	var $firstBG = $('#allcontent #intro');
	var $secondBG = $('#allcontent #second');
	var $thirdBG = $('#allcontent #third');
	var $fourthBG = $('#allcontent #fourth');
	var $fifthBG = $('#allcontent #fifth');
	

	var $parrallax1 = $('#parrallax1');
	var $parrallax1a = $('#parrallax1');
	var $parallaxmtns = $('#parallaxmtns');
	var $parallaxmtnsa = $('#parallaxmtnsa');
	var $parallaxmtnsb = $('#parallaxmtnsb');
	var $mesketch = $('#spacemed');
	
	var windowHeight = $window.height(); //get the height of the window
	
	
	//apply the class "inview" to a section that is in the viewport
	$('#intro, #second, #third, #fourth').bind('inview', function (event, visible) {
			if (visible == true) {
			$(this).addClass("inview");
			} else {
			$(this).removeClass("inview");
			}
		});
	
			
	//function that places the navigation in the center of the window
	function RepositionNav(){
		var windowHeight = $window.height(); //get the height of the window
		var navHeight = $('#nav').height() / 2;
		var windowCenter = (windowHeight / 2); 
		var newtop = windowCenter - navHeight;
		
	
	}
	
	//function that is called for every pixel the user scrolls. Determines the position of the background
	/*arguments: 
		x = horizontal position of background
		windowHeight = height of the viewport
		pos = position of the scrollbar
		adjuster = adjust the position of the background
		inertia = how fast the background moves in relation to scrolling
	*/
	function newPos(x, windowHeight, pos, adjuster, inertia){
		return  (-((windowHeight + pos) - adjuster) * inertia)  + "px";
		
	}
	function backPos(x, windowHeight, pos, adjuster, inertia){
		return  (((windowHeight + pos) - adjuster) * inertia)  + "px";
		
	}
	
	//function to be called whenever the window is scrolled or resized
	function Move(){ 
		var pos = $window.scrollTop(); //position of the scrollbar
			$parrallax1.css({'left': newPos(50, windowHeight, pos, 2000, .5)});
			$parrallax1a.css({'backgroundPosition': newPos(0,windowHeight, pos, 600, 0.1)});
			$parallaxmtns.css({'bottom': backPos(200, windowHeight, pos, 2950, 0.1)});
			$parallaxmtnsa.css({'left': backPos(50, windowHeight, pos, 5050, 0.06)});
			$parallaxmtnsb.css({'bottom': backPos(50, windowHeight, pos, 3850, 0.12)});
			$mesketch.css({'left': backPos(500, windowHeight, pos, 00, 0.03)});
		

		//if the first section is in view...
		if($firstBG.hasClass("inview")){
			//call the newPos function and change the background position
			$firstBG.css({'backgroundPosition': newPos(0,  windowHeight, pos, 900, 0.4) +","+newPos(0, windowHeight, pos, 900, 0.2)+","+newPos(0, windowHeight, pos, 900, 0.1) +","+newPos(0, windowHeight, pos, 900, 0.05)});
			$("header #navbar ul#nav li a#nav5").addClass("hover3");
			$("header #navbar ul#nav li a#nav1, header #navbar ul#nav li a#nav2, header #navbar ul#nav li a#nav3, header #navbar ul#nav li a#nav4").removeClass("hover3");
		 
		}
		
		//if the second section is in view...
		if($secondBG.hasClass("inview")){
			//call the newPos function and change the background position
			$secondBG.css({'backgroundPosition': newPos(0, windowHeight, pos, 900, 0.4) +","+ newPos(0, windowHeight, pos, 900, 0.2) +","+newPos(0, windowHeight, pos, 900, 0.1) +","+newPos(0, windowHeight, pos, 900, 0.05)});
			$("header #navbar ul#nav li a#nav4").addClass("hover3");
			$("header #navbar ul#nav li a#nav1, header #navbar ul#nav li a#nav2, header #navbar ul#nav li a#nav3, header #navbar ul#nav li a#nav5").removeClass("hover3");
		}
		
		//if the third section is in view...
		if($thirdBG.hasClass("inview")){
			//call the newPos function and change the background position
			$thirdBG.css({'backgroundPosition':  newPos(0, windowHeight, pos, 900, 0.4) +","+ newPos(0, windowHeight, pos, 900, 0.2) +","+newPos(0, windowHeight, pos, 900, 0.1) +","+newPos(0, windowHeight, pos, 900, 0.05)});
			$("header #navbar ul#nav li a#nav3").addClass("hover3");
			$("header #navbar ul#nav li a#nav1, header #navbar ul#nav li a#nav2, header #navbar ul#nav li a#nav4, header #navbar ul#nav li a#nav5").removeClass("hover3");
		}
		
		//if the fourth section is in view...
		if($fourthBG.hasClass("inview")){
			//call the newPos function and change the background position for CSS3 multiple backgrounds
			$fourthBG.css({'backgroundPosition': newPos(0,windowHeight, pos, 900, 0.2)+","+newPos(0, windowHeight, pos, 900, 0.1) +","+newPos(0, windowHeight, pos, 900, 0.05)});
			$("header #navbar ul#nav li a#nav2").addClass("hover3");
			$("header #navbar ul#nav li a#nav1, header #navbar ul#nav li a#nav4, header #navbar ul#nav li a#nav3, header #navbar ul#nav li a#nav5").removeClass("hover3");
		}
		
		

		$fifthBG.css({'backgroundPosition': newPos(0,windowHeight, pos, 900, 0.2)+","+newPos(0, windowHeight, pos, 900, 0.1) +","+newPos(0, windowHeight, pos, 900, 0.05)});
		
			if( pos > 3000 ){
		$("header #navbar ul#nav li a#nav1").addClass("hover3");
			$("header #navbar ul#nav li a#nav2, header #navbar ul#nav li a#nav4, header #navbar ul#nav li a#nav3, header #navbar ul#nav li a#nav5").removeClass("hover3");
	}}
		
	
	RepositionNav(); //Reposition the Navigation to center it in the window when the script loads
	
	$window.resize(function(){ //if the user resizes the window...
		Move(); //move the background images in relation to the movement of the scrollbar
		RepositionNav(); //reposition the navigation list so it remains vertically central
	});		
	
	$window.bind('scroll', function(){ //when the user is scrolling...
		Move(); //move the background images in relation to the movement of the scrollbar
	});
	
});


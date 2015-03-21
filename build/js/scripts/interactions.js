
/* Interactions
/////////////////////////////////////////////////////////////// */
var containerWidth, containerHeight;

var delay = (function(){
	  var timer = 0;
	  return function(callback, ms){
	    clearTimeout (timer);
	    timer = setTimeout(callback, ms);
	  };
	})();

$(window).resize(function() {
	delay(function(){
			console.log('Resize...');
		    initContainer();
		}, 100);
});


// Get viewport dimensions
function initContainer() {
	containerWidth = $(window).width();
	containerHeight = $(window).height();

	console.log(containerWidth);
	console.log(window.orientation);

	if (containerWidth < 480) {
		console.log("iPhone!");

		$(".main-header").css({ height: containerHeight	});
		$(".content-section.map").css({ height: containerHeight * 0.3 });
		$(".content-section.lines").css({ height: containerHeight * 1.2 });
		$(".content-section.stations").css({ height: containerHeight * 1.2 });
		$(".content-section.trains").css({ height: containerHeight * 4 });
		$(".content-section.users").css({ height: containerHeight * 1.2 }); }

	else if(containerWidth > 480 && containerWidth < 1025) {
		console.log("iPad!");

		if(window.orientation == 90 || window.orientation == -90 ){
			$(".main-header").css({ height: containerHeight * 1.02	});
			$(".content-section.map").css({ height: containerHeight * 0.4 });
			$(".content-section.lines").css({ height: containerHeight * 1.6 });
			$(".content-section.stations").css({ height: containerHeight * 1.6 });
			$(".content-section.trains").css({ height: containerHeight * 1.8 });
			$(".content-section.users").css({ height: containerHeight * 1.9 });
		} else {
			$(".main-header").css({ height: containerHeight * 1.02	});
			$(".content-section.map").css({ height: containerHeight * 0.3 });
			$(".content-section.lines").css({ height: containerHeight * 1.0 });
			$(".content-section.stations").css({ height: containerHeight * 1.0 });
			$(".content-section.trains").css({ height: containerHeight * 1.1 });
			$(".content-section.users").css({ height: containerHeight * 1.1 });
		}
	} else if(containerWidth > 1024) {
		console.log("Mac!");

		$(".main-header").css({ height: containerHeight * 1.02	});
		$(".content-section.map").css({ height: containerHeight * 0.4 });
		$(".content-section.lines").css({ height: containerHeight * 1.2 });
		$(".content-section.stations").css({ height: containerHeight * 1.2 });
		$(".content-section.trains").css({ height: containerHeight * 1.4 });
		$(".content-section.users").css({ height: containerHeight * 1.2 });
	}

	redrawSVG();
}


// iPad SVG size adjustment (SVG element sizes are not adjustable by CSS)
function redrawSVG(){
	var lineX1, lineX2, lineY, circleCX, textDX, textDY;

	// iPhone
	if (containerWidth >= 320 && containerWidth <= 480) {
		lineX1 		= '15%';
		lineX2 		= '80%';
		lineY 		= '50%';
		circleCX	= '15%';
		textDX		= '28%';
		textDY		= '72%';

		$(".section-title line.overlay").attr('x1', lineX1);
		$(".section-title line.overlay").attr('x2', lineX2);
		$(".section-title line.overlay").attr('y1', lineY);
		$(".section-title line.overlay").attr('y2', lineY);

		$(".section-title circle.inner-circle").attr('r', 10);
		$(".section-title circle.inner-circle").attr('cx', circleCX);

		$(".section-title circle.outer-circle").attr('r', 16);
		$(".section-title circle.outer-circle").attr('cx', circleCX);

		$(".section-title text").attr('dx', textDX);
		$(".section-title text").attr('dy', textDY);
	}

	// iPad
	else if(containerWidth > 480 && containerWidth < 1025 ) {
		lineX1 		= '11%';
		lineX2 		= '80%';
		lineY 		= '50%';
		circleCX	= '11%';
		textDX		= '24%';
		textDY		= '82%';

		$(".section-title line.overlay").attr('x1', lineX1);
		$(".section-title line.overlay").attr('x2', lineX2);
		$(".section-title line.overlay").attr('y1', lineY);
		$(".section-title line.overlay").attr('y2', lineY);

		$(".section-title circle.inner-circle").attr('r', 20);
		$(".section-title circle.inner-circle").attr('cx', circleCX);

		$(".section-title circle.outer-circle").attr('r', 32);
		$(".section-title circle.outer-circle").attr('cx', circleCX);

		$(".section-title text").attr('dx', textDX);
		$(".section-title text").attr('dy', textDY);
	}

	// Mac
	else if(containerWidth > 1024 ) {
		lineX1 	= '16%';
		lineX2 	= '80%';
		lineY 	= '50%';
		circleCX	= '16%';
		textDX  = '30%';
		textDY	= '74%';

		$(".section-title line.overlay").attr('x1', lineX1);
		$(".section-title line.overlay").attr('x2', lineX2);
		$(".section-title line.overlay").attr('y1', lineY);
		$(".section-title line.overlay").attr('y2', lineY);

		$(".section-title circle.inner-circle").attr('r', 64);
		$(".section-title circle.inner-circle").attr('cx', circleCX);

		$(".section-title circle.outer-circle").attr('r', 96);
		$(".section-title circle.outer-circle").attr('cx', circleCX);

		$(".section-title text").attr('dx', textDX);
		$(".section-title text").attr('dy', textDY);
	}
}



function isiPad(){
    console.log("wtf:" + (navigator.platform.indexOf("iPad") != -1));
    return (navigator.platform.indexOf("iPad") != -1);
}

jQuery(document).ready(function(){

	// Start Fullscreen mode
	jQuery("#start-button").click(function(){
		var target = document.documentElement;
		target.webkitRequestFullscreen();
	});


	// Split title letters (lettering.js)
	$(".main-title").lettering();
	$(".content-section .display").lettering();


	// "Tracks" Exploding animation
	$(".list").click(function(){ $(this).toggleClass("explode"); });

});

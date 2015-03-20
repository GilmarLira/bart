
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
		// var target = document.getElementById("cab");
		var target = document.documentElement;
		target.webkitRequestFullscreen();
	});


	// Split title letters (lettering.js)
	$(".main-title").lettering();

	$(".content-section.lines .display").lettering();
	$(".content-section.stations .display").lettering();


	// "Tracks" Exploding animation
	var explode_lines = 0;
	$(".lines .list").click(function(){
		if (explode_lines === 0) {
			$(this).css({
				// webkitTransform: 'translateZ(300px)'
			});

			$(this).find("li:nth-child(1)").css({
				webkitTransform: "rotateX(0deg) rotateY(-35deg) translateZ(600px)",
				opacity: 0.2
				});

			$(this).find("li:nth-child(2)").css({
				webkitTransform: "rotateX(0deg) rotateY(-35deg) translateZ(260px)",
				opacity: 0.2
				});

			$(this).find("li:nth-child(3)").css({
				webkitTransform: "rotateX(0deg) rotateY(-35deg) translateZ(10px)",
				opacity: 0.2
				});

			$(this).find("li:nth-child(4)").css({
				webkitTransform: "rotateX(0deg) rotateY(-35deg) translateZ(-200px)",
				opacity: 0.2
				});

			explode_lines = 1;

			$(".list-item").hover(function(){
				$(this).css({
					zIndex: 3,
					opacity: 1.0
				});

				console.log("Hover!");
			}, function(){
				$(".list-item").css({
					zIndex: 0,
					opacity: 0.2
				});
			}
			);

		} else {
			$(".list-item").css({
				webkitTransform: 'rotate(0) translate(0)',
				opacity: 1.0
			});

			// $(".list-line-type").css({
			// 	webkitTransform: 'translateZ(-100px)',
			// 	opacity: 1
			// });

			explode_lines = 0;
		}
	});


	// "Stations" Exploding animation
	var explode_stations = 0;
	$(".stations .list").click(function(){
		if (explode_stations === 0) {
			$(this).find("li:nth-child(1)").css({
				webkitTransform: "rotateX(0deg) rotateY(-35deg) translateZ(600px)",
				opacity: 0.2
				});

			$(this).find("li:nth-child(2)").css({
				webkitTransform: "rotateX(0deg) rotateY(-35deg) translateZ(260px)",
				opacity: 0.2
				});

			$(this).find("li:nth-child(3)").css({
				webkitTransform: "rotateX(0deg) rotateY(-35deg) translateZ(10px)",
				opacity: 0.2
				});

			$(this).find("li:nth-child(4)").css({
				webkitTransform: "rotateX(0deg) rotateY(-35deg) translateZ(-200px)",
				opacity: 0.2
				});

			explode_stations = 1;

			$(".list-item").hover(function(){
				$(this).css({
					zIndex: 3,
					opacity: 1.0
				});
			}, function(){
				$(".list-item").css({
					zIndex: 0,
					opacity: 0.2
					});
				}
			);

		} else {
			$(".list-item").css({
				webkitTransform: 'rotate(0) translate(0)',
				opacity: 1.0
			});

			// $(".list-station-type").css({
			// 	opacity: 1.0,
			// 	webkitTransform: 'translateZ(-100px)'
			// });

			explode_stations = 0;
		}
	});
});

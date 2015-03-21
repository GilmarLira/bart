/* Data
––––––––––––––––––––––––––––––––––––––––––––––––––––– */

// Stations

var stations = [
	{
		Station:	"12th St. / Oakland City Center",	
		Gender:		[40, 60],
		Age:		[1,11,26,20,21,17,4,0],
		Origin:		[45,0,0,3,31,21],			
		Income:		[13,9,23,16,14,13,5,7]
	},
	{
		Station:	"16th St. Mission",	
		Gender:		[52,48],
		Age:		[0,9,43,25,13,9,1,0],
		Origin:		[81,0,0,5,9,5],			
		Income:		[8,7,15,18,15,19,10,8]
	},
	{
		Station:	"19th St. / Oakland",	
		Gender:		[46,54],
		Age:		[0,11,37,23,13,11,3,2],
		Origin:		[70,0,0,6,11,13],			
		Income:		[10,9,23,24,14,12,4,4]
	},
	{
		Station:	"24th St. Mission",	
		Gender:		[46,54],
		Age:		[0,9,39,26,14,9,2,0],
		Origin:		[73,0,0,5,18,5],			
		Income:		[6,8,16,19,14,18,11,9]
	},
	{
		Station:	"Ashby",	
		Gender:		[40, 60],
		Age:		[0,13,37,22,16,10,1,1],
		Origin:		[57,0,0,12,1,30],			
		Income:		[8,10,17,20,18,16,8,3]
	},
	{
		Station:	"Balboa Park",	
		Gender:		[40, 60],
		Age:		[0,11,30,19,22,14,3,0],
		Origin:		[30,0,0,2,46,22],			
		Income:		[10,9,23,20,13,15,6,4]
	},
	{
		Station:	"Bay Fair",	
		Gender:		[39,61],
		Age:		[1,11,18,22,27,17,3,1],
		Origin:		[16,1,1,2,10,70],			
		Income:		[7,8,13,24,19,18,7,3]
	},
	{
		Station:	"Castro Valley",	
		Gender:		[42,58],
		Age:		[1,9,18,25,25,17,4,1],
		Origin:		[14,0,0,2,1,82],			
		Income:		[2,2,9,16,18,28,13,13]
	},
	{
		Station:	"Civic Center / UN Plaza",	
		Gender:		[55,45],
		Age:		[0,14,33,20,19,12,2,1],
		Origin:		[43,2,0,4,45,5],			
		Income:		[13,12,18,17,14,13,6,7]
	},
	{
		Station:	"Coliseum / Oakland Airport",	
		Gender:		[43,57],
		Age:		[0,14,24,25,24,12,2,0],
		Origin:		[12,0,0,0,19,68],			
		Income:		[10,10,22,19,12,14,9,4]
	},
	{
		Station:	"Colma",	
		Gender:		[33,67],
		Age:		[1,10,22,21,22,18,5,2],
		Origin:		[16,0,0,1,15,69],			
		Income:		[5,6,17,21,15,20,9,7]
	},
	{
		Station:	"Concord",	
		Gender:		[44,56],
		Age:		[0,7,18,20,29,21,4,1],
		Origin:		[11,1,0,3,7,78],			
		Income:		[5,4,11,18,20,24,15,4]
	},
	{
		Station:	"Daly City",	
		Gender:		[36, 64],
		Age:		[1,10,21,22,28,15,3,0],
		Origin:		[18,0,0,1,15,67],			
		Income:		[5,5,15,19,17,21,11,7]
	},
	{
		Station:	"Downtown Berkeley",	
		Gender:		[45,55],
		Age:		[0,22,32,18,13,10,3,2],
		Origin:		[71,0,0,10,9,10],			
		Income:		[14,9,21,16,12,14,8,5]
	},
	{
		Station:	"Dublin / Pleasanton",	
		Gender:		[46,54],
		Age:		[0,8,19,28,27,15,2,1],
		Origin:		[4,0,1,1,9,84],			
		Income:		[3,1,6,15,16,27,17,14]
	},
	{
		Station:	"El Cerrito del Norte",	
		Gender:		[37,63],
		Age:		[1,9,18,20,29,19,4,1],
		Origin:		[13,0,0,3,22,62],			
		Income:		[5,6,18,23,16,19,8,4]
	},
	{
		Station:	"El Cerrito Plaza",	
		Gender:		[42,58],
		Age:		[1,8,25,21,22,17,5,2],
		Origin:		[43,0,1,6,1,49],			
		Income:		[6,5,13,18,17,22,11,8]
	},
	{
		Station:	"Embarcadero",	
		Gender:		[47,53],
		Age:		[0,8,33,19,18,14,7,1],
		Origin:		[16,1,0,9,60,14],			
		Income:		[5,3,16,17,19,20,9,12]
	},
	{
		Station:	"Fremont",	
		Gender:		[51,49],
		Age:		[0,10,33,21,20,11,3,1],
		Origin:		[17,0,0,1,8,73],			
		Income:		[4,4,8,18,18,23,15,10]
	},
	{
		Station:	"Fruitvale",	
		Gender:		[48,52],
		Age:		[1,10,25,23,23,15,3,1],
		Origin:		[17,1,0,10,19,53],			
		Income:		[10,8,16,21,13,17,8,6]
	},
	{
		Station:	"Glen Park",	
		Gender:		[43,57],
		Age:		[0,8,24,24,24,15,4,1],
		Origin:		[49,0,1,2,21,27],			
		Income:		[4,4,12,18,17,20,13,11]
	},
	{
		Station:	"Hayward",	
		Gender:		[39,61],
		Age:		[1,12,24,19,26,15,3,1],
		Origin:		[22,1,0,1,8,68],			
		Income:		[6,7,18,21,15,18,9,5]
	},
	{
		Station:	"Lafayette",	
		Gender:		[48,52],
		Age:		[0,5,11,24,29,22,7,2],
		Origin:		[12,0,1,2,1,84],			
		Income:		[1,1,4,10,12,24,19,28]
	},
	{
		Station:	"Lake Merritt",	
		Gender:		[45,55],
		Age:		[1,11,36,25,16,9,2,1],
		Origin:		[45,0,0,8,5,42],			
		Income:		[9,7,22,20,12,19,7,4]
	},
	{
		Station:	"MacArthur",	
		Gender:		[36,64],
		Age:		[1,10,34,25,15,12,2,1],
		Origin:		[35,1,0,8,15,40],			
		Income:		[7,8,22,25,12,14,6,5]
	},
	{
		Station:	"Millbrae",	
		Gender:		[46,54],
		Age:		[0,13,27,21,18,14,5,2],
		Origin:		[7,0,0,1,18,74],			
		Income:		[4,3,11,17,17,23,13,14]
	},
	{
		Station:	"Montgomery St",	
		Gender:		[43,57],
		Age:		[0,13,30,28,18,9,3,0],
		Origin:		[38,1,0,1,51,9],			
		Income:		[7,4,14,20,16,17,12,9]
	},
	{
		Station:	"North Berkeley",	
		Gender:		[39,61],
		Age:		[0,7,23,22,18,19,7,4],
		Origin:		[43,0,0,8,1,47],			
		Income:		[4,6,12,18,13,23,14,11]
	},
	{
		Station:	"North Concord / Martinez",	
		Gender:		[45,55],
		Age:		[1,10,18,23,28,17,4,1],
		Origin:		[4,0,1,1,2,92],			
		Income:		[2,4,10,20,20,28,11,4]
	},
	{
		Station:	"Orinda",	
		Gender:		[54,46],
		Age:		[1,6,9,21,31,24,7,2],
		Origin:		[3,0,1,2,6,88],			
		Income:		[2,1,5,8,9,20,16,38]
	},
	{
		Station:	"Pittsburg / Bay Point",	
		Gender:		[43,57],
		Age:		[1,9,15,25,29,17,3,0],
		Origin:		[5,0,1,1,21,73],			
		Income:		[5,6,17,23,17,22,7,3]
	},
	{
		Station:	"Pleasant Hill / Contra Costa Centre",	
		Gender:		[45,55],
		Age:		[0,6,18,23,27,20,5,1],
		Origin:		[19,0,1,3,5,71],			
		Income:		[3,3,7,17,19,30,11,10]
	},
	{
		Station:	"Powell St.",	
		Gender:		[43,57],
		Age:		[0,15,31,18,17,15,2,1],
		Origin:		[50,1,0,2,46,2],			
		Income:		[18,16,19,18,11,11,4,3]
	},
	{
		Station:	"Richmond",	
		Gender:		[36,64],
		Age:		[3,12,21,20,23,17,2,1],
		Origin:		[24,0,0,2,21,53],			
		Income:		[10,9,22,21,13,16,4,4]
	},
	{
		Station:	"Rockridge",	
		Gender:		[44,56],
		Age:		[1,6,27,25,19,15,7,1],
		Origin:		[37,0,1,5,3,54],			
		Income:		[4,3,10,13,11,22,16,22]
	},
	{
		Station:	"San Bruno",	
		Gender:		[42,58],
		Age:		[0,11,23,21,24,15,4,1],
		Origin:		[13,0,0,2,5,80],			
		Income:		[4,4,16,19,16,22,9,9]
	},
	{
		Station:	"San Leandro",	
		Gender:		[39,61],
		Age:		[1,10,20,22,28,17,2,1],
		Origin:		[23,0,0,3,7,68],			
		Income:		[6,7,16,19,17,20,10,5]
	},
	{
		Station:	"South Hayward",	
		Gender:		[37,63],
		Age:		[0,8,23,19,30,17,2,0],
		Origin:		[12,0,0,2,5,81],			
		Income:		[5,6,14,21,15,25,9,5]
	},
	{
		Station:	"South San Francisco",	
		Gender:		[35,65],
		Age:		[0,10,23,18,27,16,5,1],
		Origin:		[16,0,0,0,5,78],			
		Income:		[4,3,13,18,19,25,14,4]
	},
	{
		Station:	"Union City",	
		Gender:		[48,52],
		Age:		[0,10,31,23,20,11,4,0],
		Origin:		[17,0,0,2,8,73],			
		Income:		[3,4,11,20,18,27,10,6]
	},
	{
		Station:	"Walnut Creek",	
		Gender:		[46,54],
		Age:		[0,7,17,20,27,22,5,1],
		Origin:		[12,0,1,2,7,78],			
		Income:		[2,2,7,14,14,25,18,19]
	},
	{
		Station:	"West Oakland",	
		Gender:		[36,64],
		Age:		[1,7,24,28,23,14,2,0],
		Origin:		[16,0,0,5,1,78],			
		Income:		[6,5,13,17,14,19,11,15]
	}
];

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


/* Interactions
/////////////////////////////////////////////////////////////// */
var index = 0;

jQuery(document).ready(function(){
	var containerWidth = window.innerWidth;
	var containerHeight = window.innerHeight;

	// var ratio;
	//
	// if (containerWidth < 480) { ratio = .25; }
	// else if (containerWidth > 480 && containerWidth < 1024 ) { ratio = .42; }
	// else if (containerWidth > 1024 ) { ratio = .55; }

	var width = 100;
	var height 	= 150;
	var duration = 500;

	var graph_gender = d3.select("#user-stats-gender").append("svg") .attr("class", "user-stats-gender chart");
	var graph_age = d3.select("#user-stats-age").append("svg") .attr("class", "user-stats-age chart");
	var graph_origin = d3.select("#user-stats-origin").append("svg") .attr("class", "user-stats-origin chart");
	var graph_income = d3.select("#user-stats-income").append("svg") .attr("class", "user-stats-income chart");


	// Scales



	function visualize(index){
		station = 	stations[index];

		var x_age = d3.scale.linear()
		  .domain(station.Age)
			.rangeRound([0, width]);

		var y_age = d3.scale.linear()
			.domain([0, d3.max(station.Age)])
	  	.rangeRound([0, height]);


		var x_origin = d3.scale.linear()
		  .domain([0, d3.max(station.Origin)])
			.rangeRound([0, width]);

		var y_origin = d3.scale.linear()
		  .domain([0, 6])
			.rangeRound([0, height]);


		var x_income = d3.scale.linear()
		  .domain([0, 8])
			.range([0, width]);

		var y_income = d3.scale.linear()
			.domain([0, d3.max(station.Income)])
	    .rangeRound([0, height]);


		console.log("Gender: ");
		console.log(station.Gender);

		console.log("Age: ");
		console.log(station.Age);

		console.log("Origin: ");
		console.log(station.Origin);

		console.log("Income: ");
		console.log(station.Income);


		// Gender update
		graph_gender.selectAll("rect")
			.data(stations[index].Gender)
			.attr("class", "update")
			.transition()
			.duration(duration)
			.attr("width", function(d, i){ if(i == 0) {return "100%";} else { return d + "%";}});

		graph_gender.selectAll("text")
			.data(stations[index].Gender)
			.attr("class", "update")
			.transition()
			.duration(duration)
			.text(String);

		// Gender Enter
		graph_gender.selectAll("rect")
			.data(station.Gender)
			.enter().append("rect")
			.attr("width", function(d, i) { if(i == 0) {return "100%";} else { return d + "%";}})
			.attr("height", height);

	  graph_gender.selectAll("text")
			.data(station.Gender)
			.enter().append("text")
		  .attr("y", "55%")
		  .attr("x", function(d, i) { if (i == 1) { return width/10 + "%"; } else { return width*0.9 + "%"; } })
			.text(String);


		// Age enter
		// graph_age.selectAll("line")
		// 	.data(y_age.ticks(5))
		//   .enter().append("line")
		// 	.attr("x1", 0)
		// 	.attr("x2", width+"%")
		// 	.attr("y1", function(d) { return y_age(d); })
		// 	.attr("y2", function(d) { return y_age(d); });

		graph_age.selectAll("rect")
			.data(station.Age)
	    .enter().append("rect")
	    .attr("x", function(d, i) { return i * width/8 + "%";})
	    // .attr("y", function(d) { return height - y_age(d) + "px"; })
	    .attr("width", width/8-1+"%");
			// .attr("height", function(d) { return y_age(d) + "px"; });

    // graph_age.selectAll("text")
	  //   .data(station.Age)
		//   .enter().append("text")
	  //   .attr("x", x_age)
	  //   .attr("y", "90%")
	  //   .attr("dx", x_age.rangeBand()/2)
	  //   .text(String);

		// Age update
		graph_age.selectAll("rect")
			.data(station.Age)
			.attr("class", "update")
			.transition()
			.duration(duration)
			.attr("y", function(d){ return (height - y_age(d)) + "px"; })
			.attr("height", function(d) { return y_age(d) + "px"; });

		graph_age.selectAll("text")
		    .text(String);


		// Origin enter
		// graph_origin.selectAll("line")
		// 	.data(x_origin.ticks(10))
		//   .enter().append("line")
		// 	.attr("x1", function(d) { return d + "px"; })
		// 	.attr("x2", function(d) { return d + "px"; })
		// 	.attr("y1", 0)
		// 	.attr("y2", height);

		graph_origin.selectAll("rect")
			.data(station.Origin)
	    .enter().append("rect")
			// .attr("y", function(d, i) { return y_origin(i) + "px"; })
			.attr("y", function(d, i) { return y_origin(i); })
	    .attr("width", function(d) { return d + "%"; })
			.attr("height", "20");

	  // graph_origin.selectAll("text")
		//   .data(station.Origin)
		//   .enter().append("text")
	  //   .attr("x", 0)
 	 //    .attr("y", function(d, i){ return i*32 + 14;})
	  //   .attr("dx", -5) // padding-right
	  //   .attr("dy", ".35em") // vertical-align: middle
	  //   .attr("text-anchor", "end") // text-align: right
		// 	.text(String);

		// Origin update
		graph_origin.selectAll("rect")
			.data(station.Origin)
			.attr("class", "update")
			.transition()
			.duration(duration)
			.attr("width", function(d) { return x_origin(d) + "%"; });


		// Income enter
		// graph_income.selectAll("line")
		// 	.data(y_income.ticks(6))
		// 	.enter().append("line")
		// 	.attr("x1", 0)
		// 	.attr("x2", width + "%")
		// 	.attr("y1", y_income)
		// 	.attr("y2", y_income);

		graph_income.selectAll("rect")
			.data(station.Income)
			.enter().append("rect")
			.attr("x", function(d, i) { return i * width/8 + "%";})
			// .attr("y", function(d){ return 192 - y_income(d);})
			.attr("width", width/8-1+"%")
			// .attr("height", y_income);

		// graph_income.selectAll("text")
		// 	.data(station.Income)
		// 	.enter().append("text")
		// 	.attr("x", function(d, i) { return i*width/8;})
		// 	.attr("y", "90%")
		// 	.attr("dx", 38)
		// 	.text(String);

		// Income update
		graph_income.selectAll("rect")
			.data(stations[index].Income)
			.attr("class", "update")
			.transition()
			.duration(duration)
			.attr("y", function(d){ return height - y_income(d);})
			.attr("height", y_income);


	}


	jQuery(".item-station").hover(function(){
		index = $(this).index();
		console.log("variable index is now: " + index);
		visualize(index);
	});
});

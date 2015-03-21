
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


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

	// console.log("width: " + $("#user-stats").width());

	var margin = {left: 90, bottom: 30},
	    width = $("#user-stats").width() - margin.left,
	    height = 150 - margin.bottom,
			duration = 500;

	var graph_gender = d3.select("#user-stats-gender")
		.append("svg")
			.attr("class", "user-stats-gender chart")
			.attr("width", width + margin.left)
	    .attr("height", height + margin.bottom)
  	.append("g");

	var graph_age = d3.select("#user-stats-age")
		.append("svg")
			.attr("class", "user-stats-age chart")
			.attr("width", width + margin.left)
	    .attr("height", height + margin.bottom)
  	.append("g")
    	.attr("transform", "translate(" + margin.left + "," + 0 + ")");

	var graph_origin = d3.select("#user-stats-origin")
		.append("svg")
			.attr("class", "user-stats-origin chart")
			.attr("width", width + margin.left)
	    .attr("height", height + margin.bottom)
  	.append("g")
    	.attr("transform", "translate(" + margin.left + "," + 0 + ")");

	var graph_income = d3.select("#user-stats-income")
		.append("svg")
			.attr("class", "user-stats-income chart")
			.attr("width", width + margin.left)
	    .attr("height", height + margin.bottom)
  	.append("g")
    	.attr("transform", "translate(" + margin.left + "," + 0 + ")");


	// Scale
	var x_age = d3.scale.ordinal()
		.domain(captions.Age)
		.rangeRoundBands([0, width]);

	var y_age = d3.scale.linear()
		.domain([0, 45])
		.rangeRound([height, 0]);

	var x_income = d3.scale.ordinal()
		.domain(captions.Income)
		.rangeRoundBands([0, width]);

	var y_income = d3.scale.linear()
		.domain([0, 45])
		.rangeRound([height, 0]);

	var x_origin = d3.scale.linear()
		.domain([0, 100])
		.rangeRound([0, width]);

	var y_origin = d3.scale.ordinal()
	  .domain(captions.Origin)
		.rangeRoundBands([0, height + margin.bottom]);



	// Axis
	var x_age_axis = d3.svg.axis()
		.scale(x_age)
		.orient("bottom");

	var y_age_axis = d3.svg.axis()
		.scale(y_age)
		.orient("left")
		.ticks(3)
		.tickFormat(function(d) { return d + "%"; });

	var x_income_axis = d3.svg.axis()
		.scale(x_income)
		.orient("bottom");

	var y_income_axis = d3.svg.axis()
		.scale(y_income)
		.orient("left")
		.ticks(3)
		.tickFormat(function(d) { return d + "%"; });

	var y_origin_axis = d3.svg.axis()
		.scale(y_origin)
		.orient("left");


	// Plot axis
	graph_age.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + height + ")")
			.call(x_age_axis);

	graph_age.append("g")
		.attr("class", "y axis")
		.call(y_age_axis);

	graph_income.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + height + ")")
			.call(x_income_axis);

	graph_income.append("g")
			.attr("class", "y axis")
			// .attr("transform", "translate(0," + height + ")")
			.call(y_income_axis);

	graph_origin.append("g")
		.attr("class", "y axis")
		.call(y_origin_axis);



	function visualize(index){
		station = stations[index];

		// var y_origin = d3.scale.linear()
		//   .domain([0, 6])
		// 	.rangeRound([0, height + margin.bottom]);

		// var x_income = d3.scale.linear()
		//   .domain([0, 8])
		// 	.range([0, width]);


		// Gender update
		graph_gender.selectAll("rect")
			.data(stations[index].Gender)
			.attr("class", "update")
			.transition()
			.duration(duration)
			.attr("width", function(d, i){ return i===0 ? "100%" : d +"%"; });

		graph_gender.selectAll("text")
			.data(stations[index].Gender)
			.attr("class", "update")
			.transition()
			.duration(duration)
			.text(function(d) { return d + "%"; });

		// Gender Enter
		graph_gender.selectAll("rect")
			.data(station.Gender)
			.enter().append("rect")
			.attr("width", function(d, i){ return i === 0 ? "100%" : d +"%"; })
			.attr("height", height + margin.bottom);

	  graph_gender.selectAll("text")
			.data(station.Gender)
			.enter().append("text")
		  .attr("y", "55%")
		  // .attr("x", function(d, i) { if (i == 1) { return width/10 + "%"; } else { return width*0.9 + "%"; } })
		  .attr("x", function(d, i) { return i == 1 ? "5%" : "88%"; })
			.text(function(d) { return d + "%"; });



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
	    .attr("x", function(d, i) { return i * width/8;})
	    .attr("width", width/8-4);

    // graph_age.selectAll("text")
	  //   .data(station.Age)
		//   .enter().append("text")
	  //   .attr("x", function(d, i) { return width/16 + (i * (width/8)-1);})
	  //   .attr("y", "100%");

		// graph_age.selectAll("text")
	  //   .data(captions.Age)
		//   .enter().append("text")
	  //   .attr("x", x_age.rangeBand()/2)
	  //   .attr("y", "100%");

		// Age update
		graph_age.selectAll("rect")
			.data(station.Age)
			.attr("class", "update")
			.transition()
			.duration(duration)
			// .attr("y", function(d){ return (height - y_age(d)); })
			.attr("y", function(d) { return y_age(d); })
			.attr("height", function(d) { return height - y_age(d); })
			.attr("data", function(d) { return d; });

		// graph_age.selectAll("text")
		// .attr("dx", function(d) { return (+d>10) ? "-.5em" : "-.25em"; })
		// .text(function(d) { return d + "%"; });



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
			// .attr("y", function(d, i) { return y_origin(i); })
			.attr("y", function(d, i) { return y_origin(captions.Origin[i]); })
	    .attr("width", function(d) { return d + "%"; })
			.attr("height", y_origin.rangeBand()-4);

	  // graph_origin.selectAll("text")
		//   .data(station.Origin)
		//   .enter().append("text")
	  //   .attr("x", "0%")
 	 //    .attr("y", function(d, i) { return (height + margin.bottom) / 18 + i * (height + margin.bottom) / 6; })
	  //   .attr("dx", -5) // padding-right
	  //   .attr("dy", ".35em") // vertical-align: middle
	  //   .attr("text-anchor", "end");

		// Origin update
		graph_origin.selectAll("rect")
			.data(station.Origin)
			.attr("class", "update")
			.transition()
			.duration(duration)
			.attr("width", function(d) { return x_origin(d); });

		// graph_origin.selectAll("text")
		// 	.text(function(d) { return d + "%"; });
			// .text(function(d, i) { return captions.Origin[i]; });


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
			.attr("x", function(d, i) { return i * width/8;})
			.attr("width", width/8-4);

		// graph_income.selectAll("text")
		// 	.data(station.Income)
		// 	.enter().append("text")
		// 	.attr("x", function(d, i) { return width/16 + (i * (width/8)-1);})
		// 	.attr("y", "100%");

		// Income update
		graph_income.selectAll("rect")
			.data(stations[index].Income)
			.attr("class", "update")
			.transition()
			.duration(duration)
			.attr("y", function(d){ return y_income(d); })
			.attr("height", function(d) { return height - y_income(d); });

		// graph_income.selectAll("text")
		// 	.attr("dx", function(d) { return (+d>10) ? "-.5em" : "-.25em"; })
		// 	.text(function(d) { return d + "%"; });
	}

	jQuery(".item-station").hover(function(){
		index = $(this).index();
		console.log("variable index is now: " + index);
		visualize(index);
	});
});

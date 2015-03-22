
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

	var margin = {left: 40, bottom: 30},
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
		.domain([0, 43])
		.rangeRound([height, 0]);

	var x_origin = d3.scale.ordinal()
	  .domain(captions.Origin)
		.rangeRoundBands([0, width]);

	var y_origin = d3.scale.linear()
		.domain([0, 92])
		.rangeRound([height, 0]);

	var x_income = d3.scale.ordinal()
		.domain(captions.Income)
		.rangeRoundBands([0, width]);

	var y_income = d3.scale.linear()
		.domain([0, 38])
		.rangeRound([height, 0]);






	// Axis
	var x_age_axis = d3.svg.axis()
		.scale(x_age)
		.orient("bottom");

	var y_age_axis = d3.svg.axis()
		.scale(y_age)
		.orient("left")
		.ticks(4)
		.tickFormat(function(d) { return d + "%"; });

	var x_origin_axis = d3.svg.axis()
		.scale(x_origin)
		.orient("bottom");

	var y_origin_axis = d3.svg.axis()
		.scale(y_origin)
		.orient("left")
		.ticks(4)
		.tickFormat(function(d) { return d + "%"; });

	var x_income_axis = d3.svg.axis()
		.scale(x_income)
		.orient("bottom");

	var y_income_axis = d3.svg.axis()
		.scale(y_income)
		.orient("left")
		.ticks(3)
		.tickFormat(function(d) { return d + "%"; });



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
			.call(y_income_axis);

	graph_origin.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + height + ")")
		.call(x_origin_axis);

	graph_origin.append("g")
		.attr("class", "y axis")
		.call(y_origin_axis);



	function visualize(index){
		station = stations[index];

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
		graph_age.selectAll("rect")
			.data(station.Age)
	    .enter().append("rect")
	    .attr("x", function(d, i) { return i * width/8;})
	    .attr("width", width/8-4);

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


		// Origin enter
		graph_origin.selectAll("rect")
			.data(station.Origin)
	    .enter().append("rect")
			.attr("x", function(d, i) { return x_origin(captions.Origin[i]); })
	    .attr("width", x_origin.rangeBand()-4);

		// Origin update
		graph_origin.selectAll("rect")
			.data(station.Origin)
			.attr("class", "update")
			.transition()
			.duration(duration)
			.attr("y", function(d) { return y_origin(d); })
			.attr("height", function(d) { return height - y_origin(d); });
			// .attr("width", function(d) { return x_origin(d); });


		// Income enter
		graph_income.selectAll("rect")
			.data(station.Income)
			.enter().append("rect")
			.attr("x", function(d, i) { return i * width/8;})
			.attr("width", width/8-4);


		// Income update
		graph_income.selectAll("rect")
			.data(station.Income)
			.attr("class", "update")
			.transition()
			.duration(duration)
			.attr("y", function(d){ return y_income(d); })
			.attr("height", function(d) { return height - y_income(d); });
	}

	jQuery(".item-station").hover(function(){
		index = $(this).index();
		console.log("variable index is now: " + index);
		visualize(index);
	});
});


/* Interactions
/////////////////////////////////////////////////////////////// */
var index = 0;

jQuery(document).ready(function(){
	var containerWidth = window.innerWidth;
	var containerHeight = window.innerHeight;

	var ratio;

	if (containerWidth < 480) { ratio = .25; }
	else if (containerWidth > 480 && containerWidth < 1024 ) { ratio = .42; }
	else if (containerWidth > 1024 ) { ratio = .55; }

	var width 	= 1280 * ratio;
	var height 	= 192;



	var graph_gender = d3.select("#user-stats-gender").append("svg")
		.attr("class", "user-stats-gender chart")
		.attr("width", width)
		.attr("height", 192);
	
	var graph_age = d3.select("#user-stats-age").append("svg")
		.attr("class", "user-stats-age chart")
		.attr("width", width)
		.attr("height", 192);

	var graph_origin = d3.select("#user-stats-origin").append("svg")
		.attr("class", "user-stats-origin chart")
		.attr("width", width)
		.attr("height", 192);

	var graph_income = d3.select("#user-stats-income").append("svg")
		.attr("class", "user-stats-income chart")
		.attr("width", width)
		.attr("height", 192);

	
	var station = 	stations[index];		
	

	// Gender
	graph_gender.selectAll("rect")
		.data(station.Gender)
		.enter().append("rect")
		.attr("width", function(d, i){ if(i == 0) {return width;} else { return width/d + "%";}})
		.attr("height", 192);

    graph_gender.selectAll("text")
	    .data(station.Gender)
	  .enter().append("text")
	  	.attr("y", "55%")
	  	.attr("x", function(d, i){ if (i == 1) { return width/10; } else { return width*.9; } })
		.text(String);


	// Age	  
	var y_age = d3.scale.linear()
		.domain([0, 45])
    	.rangeRound([0, 192]);

	var x_age = d3.scale.ordinal()
	    .domain(station.Age)
		.rangeBands([0, width]);

	graph_age.selectAll("line")
		.data(y_age.ticks(6))
	  .enter().append("line")
		.attr("x1", 0)
		.attr("x2", width)
		.attr("y1", y_age)
		.attr("y2", y_age);  	

	graph_age.selectAll("rect")
		.data(station.Age)
	    .enter().append("rect")
	    .attr("x", x_age)
	    .attr("y", function(d){ return 192 - y_age(d);})
	    .attr("width", x_age.rangeBand() - 4)
		.attr("height", y_age);

    graph_age.selectAll("text")
	    .data(station.Age)
	  .enter().append("text")
	    .attr("x", x_age)
	    .attr("y", "90%")
	    .attr("dx", x_age.rangeBand()/2)
	    .text(String);
	    
	    
	// Origin    
	var x_origin = d3.scale.linear()
		.domain([0, d3.max(station.Origin)])
    	.range([0, width]);

	var y_origin = d3.scale.linear()
	    .domain([0, 6])
		.range([0, 192]);

	graph_origin.selectAll("line")
		.data(x_origin.ticks(10))
	  .enter().append("line")
		.attr("x1", x_origin)
		.attr("x2", x_origin)
		.attr("y1", 0)
		.attr("y2", 192);  	

	graph_origin.selectAll("rect")
		.data(station.Origin)
	    .enter().append("rect")
		.attr("y", function(d, i){ return i*32;})
	    .attr("width", x_origin)
		.attr("height", 30);

    graph_origin.selectAll("text")
	    .data(station.Origin)
	  .enter().append("text")
	    .attr("x", x_origin)
 	    .attr("y", function(d, i){ return i*32 + 14;}) 
	    .attr("dx", -5) // padding-right
	    .attr("dy", ".35em") // vertical-align: middle
	    .attr("text-anchor", "end") // text-align: right
		.text(String);    


	
	// Income
	var x_income = d3.scale.linear()
	    .domain([0, 8])
		.range([0, width]);

	var y_income = d3.scale.linear()
		.domain([0, d3.max(station.Income)])
    	.rangeRound([0, 192]);
    	
   	graph_income.selectAll("line")
		.data(y_income.ticks(6))
	  .enter().append("line")
		.attr("x1", 0)
		.attr("x2", width)
		.attr("y1", y_income)
		.attr("y2", y_income);  	

	graph_income.selectAll("rect")
		.data(station.Income)
	    .enter().append("rect")
	    .attr("x", function(d, i) { return i*width/8;})
	    .attr("y", function(d){ return 192 - y_income(d);})
	    .attr("width", width/8-4)
		.attr("height", y_income);

    graph_income.selectAll("text")
	    .data(station.Income)
	  .enter().append("text")
	    .attr("x", function(d, i) { return i*width/8;})
	    .attr("y", "90%")
	    .attr("dx", 38)
	    .text(String);

	    
	    
	function update(index){		
		// Data check
/* 		console.log(stations[index]); */
		
		// Data join
		graph_gender.selectAll("rect")
			.data(stations[index].Gender)
			.attr("class", "update")
			.transition()
			.duration(1000)
			.attr("width", function(d, i){ if(i == 0) {return "100%";} else { return d + "%";}});
			

		graph_gender.selectAll("text")
			.data(stations[index].Gender)
			.attr("class", "update")
			.transition()
			.duration(1000)
			.text(String);
			
			
		graph_age.selectAll("rect")
			.data(stations[index].Age)
			.attr("class", "update")
			.transition()
			.duration(1000)
			.attr("y", function(d){ return 192 - y_age(d);})
			.attr("height", y_age);
			
		graph_origin.selectAll("rect")
			.data(stations[index].Origin)
			.attr("class", "update")
			.transition()
			.duration(1000)
			.attr("width", x_origin);

			
		graph_income.selectAll("rect")
			.data(stations[index].Income)
			.attr("class", "update")
			.transition()
			.duration(1000)
			.attr("y", function(d){ return 192 - y_income(d);})
			.attr("height", y_income);
	}
	
	
	jQuery(".item-station").click(function(){
		index = $(this).index();
		console.log("variable index is now: " + index);		
		update(index);
	});



});

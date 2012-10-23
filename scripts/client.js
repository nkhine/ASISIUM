function asisiumClient() {
  var self = this;
  var iconPath = "m 1.4194515,-160.64247 c 33.5874165,0 60.8159465,-25.97005 60.8159465,-58.00952 0,-32.0404 -27.22755,-58.0114 -60.8159465,-58.0114 -33.5883965,0 -60.8159415,25.971 -60.8159415,58.0114 0,32.0404 27.228527,58.00952 60.8159415,58.00952 z m 81.9575765,26.25762 C 70.531608,-146.64352 55.269688,-153.983 0.08110256,-153.983 c -55.19742156,0 -70.08915856,7.96609 -82.28062656,19.59815 -12.197359,11.62926 -8.081167,135.7024419 -8.081167,135.7024419 L -63.292733,-59.848397 -46.325227,122.37766 2.6291765,29.116913 48.308878,122.37766 64.467298,-59.848397 91.457218,1.3175919 c 0,-8e-4 4.76917,-123.4484419 -8.08019,-135.7024419 z";
  var width = $("#vis").width(),
    mapCanvasHeight = (width * 0.45);
  this.init = function() {

    self.loadCopyright();
    self.loadMenu();

  };

  // we add the copyright notice to the bottom of the page
  this.loadCopyright = function() {
    {
      var d = new Date();
      var x = document.getElementById("year");
      x.innerHTML='copyright ' + '&copy; ' + 'ASISIUM ' + d.getFullYear();
    }
  };
  
  // we add the D3 visualisation to be used for the menu
  this.loadMenu = function() {
    var dataset = [],
      i = 0;
    
    for(i=0; i<5; i++){
      dataset.push(Math.round(Math.random()*100));
    }
    
    console.log(width + " " + mapCanvasHeight);
    // Most parts of D3 don"t know anything about SVG—only DOM.
    self.svg = d3.select("#vis").append("svg:svg").attr("width", "100%").attr("height", "100%")
    // Load data from .json file
    //self.svg.selectAll("circle")
    //    .data(dataset)
    //    .enter().append("circle")
    //    .style("stroke", "gray")
    //    .style("fill", "white")
    //    .attr("height", 40)
    //    .attr("width", 75)
    //    .attr("x", function(d, i){return i*80})
    //    .attr("y", 20);
        
    self.svg.append("circle")
      .style("stroke", "gray")
      .style("fill", "white")
      .attr("r", 10)
      .attr("cx", 300)
      .attr("cy", 20)
      .on("mouseover", function(){d3.select(this).style("fill", "red");})
      .on("mouseout", function(){d3.select(this).style("fill", "white");});

    self.svg.append("circle")
      .style("stroke", "gray")
      .style("fill", "white")
      .attr("r", 10)
      .attr("cx", 400)
      .attr("cy", 10)
      .on("mouseover", function(){d3.select(this).style("fill", "red");})
      .on("mouseout", function(){d3.select(this).style("fill", "white");});
      
  
  };
	// Initialise
	this.init();
};


var asisiumClient;

jQuery(function() {
	asisiumClient = new asisiumClient();
});
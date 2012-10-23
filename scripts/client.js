function asisiumClient() {
  var self = this;
  var iconPath = "M 10,28 C 4.4771525,28 0,32.477153 0,38 c 0,5.522847 4.4771525,10 10,10 5.522848,0 10,-4.477153 10,-10 l 0,-0.09115 C 19.946619,32.424236 15.484878,28 10,28 z m 0,2.708333 c 3.99939,0 7.252743,3.227363 7.291667,7.226563 l 0,0.0651 c 0,4.027076 -3.264591,7.291667 -7.291667,7.291667 -4.0270763,0 -7.2916667,-3.264591 -7.2916667,-7.291667 0,-4.027076 3.2645904,-7.291667 7.2916667,-7.291667 z";
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
    self.svg = d3.select("#vis").append("svg:svg").attr("width", "100%").attr("height", "100%").attr("viewBox", "0 0 " + width + " " + mapCanvasHeight);

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
    var icon = self.svg.append("svg:path");
    icon.attr("d", iconPath);
    icon.attr("transform", "translate(" + 310 + "," + 20 + ")")
    icon.style("fill", "white");
    icon.attr("class", "member");
    icon.on("mouseover", function(){d3.select(this).style("fill", "red");});
    icon.on("mouseout", function(){d3.select(this).style("fill", "white");});



    self.svg.append("circle")
      .style("stroke", "gray")
      .style("fill", "white")
      .attr("r", 10)
      .attr("cx", 520)
      .attr("cy", 0)
      .on("mouseover", function(){d3.select(this).style("fill", "red");})
      .on("mouseout", function(){d3.select(this).style("fill", "white");});
      
    self.svg.append("circle")
      .style("stroke", "gray")
      .style("fill", "white")
      .attr("r", 10)
      .attr("cx", 730)
      .attr("cy", 5)
      .on("mouseover", function(){d3.select(this).style("fill", "red");})
      .on("mouseout", function(){d3.select(this).style("fill", "white");});

    self.svg.append("circle")
      .style("stroke", "gray")
      .style("fill", "white")
      .attr("r", 10)
      .attr("cx", 900)
      .attr("cy", 30)
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
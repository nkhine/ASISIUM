function asisiumClient() {
  var self = this;
  var iconPath = "M 10,28 C 4.4771525,28 0,32.477153 0,38 c 0,5.522847 4.4771525,10 10,10 5.522848,0 10,-4.477153 10,-10 l 0,-0.09115 C 19.946619,32.424236 15.484878,28 10,28 z m 0,4.791667 c 2.856707,0 5.18053,2.299678 5.208333,5.15625 l 0,0.05208 c 0,2.876483 -2.33185,5.208333 -5.208333,5.208333 -2.8764829,0 -5.2083333,-2.33185 -5.2083333,-5.208333 0,-2.876483 2.3318504,-5.208333 5.2083333,-5.208333 z";
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
    icon.attr("class", "icon");
    icon.on("mouseover", function(){d3.select(this).style("fill", "red");});
    icon.on("mouseout", function(){d3.select(this).style("fill", "white");});

    var iconName = self.svg.append("svg:text");
    iconName.text('About')
    iconName.style("fill", "white")
    iconName.attr("transform", "translate(" + 320 + "," + 45 + ")")
    iconName.attr('text-anchor', 'middle')
    iconName.attr("class", "icon-name");


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
function asisiumClient() {
  var self = this;
  var iconPath = "M 0.14285728,7.9999996 C -5.3799908,7.9999996 -9.8571425,12.477152 -9.8571425,18 c 0,5.522847 4.4771517,10 9.99999978,10 C 5.6657051,28 10.142857,23.522847 10.142857,18 l 0,-0.09115 C 10.089477,12.424235 5.6277351,7.9999996 0.14285728,7.9999996 z m 0,4.7916664 c 2.85670682,0 5.18052982,2.299679 5.20833282,5.156251 l 0,0.05208 c 0,2.876483 -2.33185,5.208333 -5.20833282,5.208333 -2.87648308,0 -5.20833308,-2.33185 -5.20833308,-5.208333 0,-2.876483 2.33185,-5.208334 5.20833308,-5.208334 z";
  var width = $("#menu").width(),
    mapCanvasHeight = (width * 0.45);

  this.init = function() {
    self.svg = d3.select("#menu").append("svg:svg")
      .attr("width", "100%").attr("height", mapCanvasHeight)
      .attr("viewBox", "0 0 " + width + " " + mapCanvasHeight);

    self.loadCopyright();
    self.drawAbout();
    self.drawServices();
    self.drawProjects();
    self.drawContact();

  };

  // we add the copyright notice to the bottom of the page
  this.loadCopyright = function() {
    {
      var d = new Date();
      var x = document.getElementById("year");
      x.innerHTML='copyright ' + '&copy; ' + 'ASISIUM ' + d.getFullYear();
    }
  };
  
  this.drawAbout = function () {
    var icon = self.svg.append("svg:path");
    icon.attr("d", iconPath);
    icon.attr("transform", "translate(" + 300 + "," + 90 + ")")
    icon.style("fill", "white");
    icon.attr("class", "icon");
    icon.on("mouseover", function(){d3.select(this).style("fill", "red");});
    icon.on("mouseout", function(){d3.select(this).style("fill", "white");});
    icon.on("click", self.details);

    var iconName = self.svg.append("svg:text");
    iconName.text('About')
    iconName.style("fill", "white")
    iconName.attr("transform", "translate(" + 300 + "," + 90 + ")")
    iconName.attr('text-anchor', 'middle')
    iconName.attr("class", "icon-name")
    iconName.on("click", self.details);
  };
  
  this.drawServices = function () {
    var icon = self.svg.append("svg:path");
    icon.attr("d", iconPath);
    icon.attr("transform", "translate(" + 520 + "," + 50 + ")")
    icon.style("fill", "white");
    icon.attr("class", "icon");
    icon.on("mouseover", function(){d3.select(this).style("fill", "red");});
    icon.on("mouseout", function(){d3.select(this).style("fill", "white");});
    icon.on("click", self.details);

    var iconName = self.svg.append("svg:text");
    iconName.text('Services')
    iconName.style("fill", "white")
    iconName.attr("transform", "translate(" + 520 + "," + 50 + ")")
    iconName.attr('text-anchor', 'middle')
    iconName.attr("class", "icon-name");
  };
  
  this.drawProjects = function () {
    var icon = self.svg.append("svg:path");
    icon.attr("d", iconPath);
    icon.attr("transform", "translate(" + 750 + "," + 20 + ")")
    icon.style("fill", "white");
    icon.attr("class", "icon");
    icon.on("mouseover", function(){d3.select(this).style("fill", "red");});
    icon.on("mouseout", function(){d3.select(this).style("fill", "white");});
    icon.on("click", self.details);

    var iconName = self.svg.append("svg:text");
    iconName.text('Projects')
    iconName.style("fill", "white")
    iconName.attr("transform", "translate(" + 750 + "," + 20 + ")")
    iconName.attr('text-anchor', 'middle')
    iconName.attr("class", "icon-name");
  };
  
  this.drawContact = function () {
    var icon = self.svg.append("svg:path");
    icon.attr("d", iconPath);
    icon.attr("transform", "translate(" + 900 + "," + 80 + ")")
    icon.style("fill", "white");
    icon.attr("class", "icon");
    icon.on("mouseover", function(){d3.select(this).style("fill", "red");});
    icon.on("mouseout", function(){d3.select(this).style("fill", "white");});

    var iconName = self.svg.append("svg:text");
    iconName.text('Contact')
    iconName.style("fill", "white")
    iconName.attr("transform", "translate(" + 900 + "," + 80 + ")")
    iconName.attr('text-anchor', 'middle')
    iconName.attr("class", "icon-name");
    icon.on("click", self.details);
  };
  
  this.click = function () {
    console.log('we made a click');
    //$( "#dialog" ).dialog( "open" );
  };
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

  // Overlay to display the content for each section
  this.details = function() {
    console.log('overlay opens');
    $('.details').dialog({
      autoOpen: true,
      height: 370,
      width: 900,
      modal: true,
      position: ['center', 150],
      //buttons: {
      //  "": function() {}
      //},
    });
  };

  // Initialise  
  this.init();
};


var asisiumClient;

jQuery(function() {
	asisiumClient = new asisiumClient();
});
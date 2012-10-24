function asisiumClient() {
  var self = this;
  var iconPath = "M 10,28 C 4.4771525,28 0,32.477153 0,38 c 0,5.522847 4.4771525,10 10,10 5.522848,0 10,-4.477153 10,-10 l 0,-0.09115 C 19.946619,32.424236 15.484878,28 10,28 z m 0,4.791667 c 2.856707,0 5.18053,2.299678 5.208333,5.15625 l 0,0.05208 c 0,2.876483 -2.33185,5.208333 -5.208333,5.208333 -2.8764829,0 -5.2083333,-2.33185 -5.2083333,-5.208333 0,-2.876483 2.3318504,-5.208333 5.2083333,-5.208333 z";
  var width = $("#menu").width(),
    mapCanvasHeight = (width * 0.45);

  this.init = function() {
    self.svg = d3.select("#menu").append("svg:svg")
      .attr("width", "100%").attr("height", "100%")
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
    icon.attr("transform", "translate(" + 310 + "," + 30 + ")")
    icon.style("fill", "white");
    icon.attr("class", "icon");
    icon.on("mouseover", function(){d3.select(this).style("fill", "red");});
    icon.on("mouseout", function(){d3.select(this).style("fill", "white");});
    icon.on("click", self.details);

    var iconName = self.svg.append("svg:text");
    iconName.text('About')
    iconName.style("fill", "white")
    iconName.attr("transform", "translate(" + 320 + "," + 55 + ")")
    iconName.attr('text-anchor', 'middle')
    iconName.attr("class", "icon-name")
    iconName.on("click", self.details);
  };
  
  this.drawServices = function () {
    var icon = self.svg.append("svg:path");
    icon.attr("d", iconPath);
    icon.attr("transform", "translate(" + 510 + "," + 2 + ")")
    icon.style("fill", "white");
    icon.attr("class", "icon");
    icon.on("mouseover", function(){d3.select(this).style("fill", "red");});
    icon.on("mouseout", function(){d3.select(this).style("fill", "white");});
    icon.on("click", self.details);

    var iconName = self.svg.append("svg:text");
    iconName.text('Services')
    iconName.style("fill", "white")
    iconName.attr("transform", "translate(" + 520 + "," + 27 + ")")
    iconName.attr('text-anchor', 'middle')
    iconName.attr("class", "icon-name");
  };
  
  this.drawProjects = function () {
    var icon = self.svg.append("svg:path");
    icon.attr("d", iconPath);
    icon.attr("transform", "translate(" + 710 + "," + -40 + ")")
    icon.style("fill", "white");
    icon.attr("class", "icon");
    icon.on("mouseover", function(){d3.select(this).style("fill", "red");});
    icon.on("mouseout", function(){d3.select(this).style("fill", "white");});
    icon.on("click", self.details);

    var iconName = self.svg.append("svg:text");
    iconName.text('Projects')
    iconName.style("fill", "white")
    iconName.attr("transform", "translate(" + 720 + "," + -15 + ")")
    iconName.attr('text-anchor', 'middle')
    iconName.attr("class", "icon-name");
  };
  
  this.drawContact = function () {
    var icon = self.svg.append("svg:path");
    icon.attr("d", iconPath);
    icon.attr("transform", "translate(" + 910 + "," + 5 + ")")
    icon.style("fill", "white");
    icon.attr("class", "icon");
    icon.on("mouseover", function(){d3.select(this).style("fill", "red");});
    icon.on("mouseout", function(){d3.select(this).style("fill", "white");});

    var iconName = self.svg.append("svg:text");
    iconName.text('Contact')
    iconName.style("fill", "white")
    iconName.attr("transform", "translate(" + 920 + "," + 28 + ")")
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
      position: ['center', 35],
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
function asisiumClient() {
  var self = this;
  var iconPath = "M 0.14285728,7.9999996 C -5.3799908,7.9999996 -9.8571425,12.477152 -9.8571425,18 c 0,5.522847 4.4771517,10 9.99999978,10 C 5.6657051,28 10.142857,23.522847 10.142857,18 l 0,-0.09115 C 10.089477,12.424235 5.6277351,7.9999996 0.14285728,7.9999996 z m 0,4.7916664 c 2.85670682,0 5.18052982,2.299679 5.20833282,5.156251 l 0,0.05208 c 0,2.876483 -2.33185,5.208333 -5.20833282,5.208333 -2.87648308,0 -5.20833308,-2.33185 -5.20833308,-5.208333 0,-2.876483 2.33185,-5.208334 5.20833308,-5.208334 z";
  var width = $("#map").width(),
    mapCanvasHeight = (width * 0.38);

  var data = [{name:'about', x: 308, y: 89}, 
              {name:'services', x: 533, y: 49}, 
              {name:'projects', x: 752, y: 16}, 
              {name:'contact', x: 915, y: 77}];
  
  this.init = function() {
    self.svg = d3.select("#map").append("svg:svg")
      .attr("width", "100%").attr("height", mapCanvasHeight);
      //.attr("viewBox", "0 0 " + width + " " + mapCanvasHeight);

    self.loadCopyright();
    //self.drawMarkers();
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

  // draw markers from data
  this.drawMarkers = function () {
    console.log(data);
    //var icon = self.svg.append('svg:g')
    //  .data(data)
    //  .enter().append('rect')
    //    .attr('x', x)
    //    .attr('y', y)
    //    .attr('width', 20)
    //    .attr('height', 20)
    //    .style('fill', 'steelblue');
    //
    
  };
  // we draw each marker - TODO - optimise this to use a list
  this.drawAbout = function () {
    var iconHolder = self.svg.append('svg:g')
      .attr("transform", "translate(" + 308 + "," + 89 + ")")
      .attr("class", "icon-holder")
      .style('opacity', 0.5)
      .on("mouseover", function(){d3.select(this).style('opacity', 1);})
      .on("mouseout", function(){d3.select(this).style('opacity', 0.5);})
      .on("click", self.about);
      
    iconHolder.append("svg:text")
      .text('ABOUT')
      .style("fill", "white")
      .attr('text-anchor', 'middle')
      .attr("class", "icon-name");
    
    iconHolder.append("svg:path")
      .attr("d", iconPath)
      .style("fill", "white")
      .attr("class", "icon");
  };
  this.drawServices = function () {
    var iconHolder = self.svg.append('svg:g')
      .attr("transform", "translate(" + 533 + "," + 49 + ")")
      .attr("class", "icon-holder")
      .style('opacity', 0.5)
      .on("mouseover", function(){d3.select(this).style('opacity', 1);})
      .on("mouseout", function(){d3.select(this).style('opacity', 0.5);})
      .on("click", self.services);
      
    iconHolder.append("svg:text")
      .text('SERVICES')
      .style("fill", "white")
      .attr('text-anchor', 'middle')
      .attr("class", "icon-name");
    
    iconHolder.append("svg:path")
      .attr("d", iconPath)
      .style("fill", "white")
      .attr("class", "icon");
  };
  this.drawProjects = function () {
    var iconHolder = self.svg.append('svg:g')
      .attr("transform", "translate(" + 752 + "," + 16 + ")")
      .attr("class", "icon-holder")
      .style('opacity', 0.5)
      .on("mouseover", function(){d3.select(this).style('opacity', 1);})
      .on("mouseout", function(){d3.select(this).style('opacity', 0.5);})
      .on("click", self.projects);
      
    iconHolder.append("svg:text")
      .text('PROJECTS')
      .style("fill", "white")
      .attr('text-anchor', 'middle')
      .attr("class", "icon-name");
    
    iconHolder.append("svg:path")
      .attr("d", iconPath)
      .style("fill", "white")
      .attr("class", "icon");
  };
  this.drawContact = function () {
    var iconHolder = self.svg.append('svg:g')
      .attr("transform", "translate(" + 915 + "," + 77 + ")")
      .attr("class", "icon-holder")
      .style('opacity', 0.5)
      .on("mouseover", function(){d3.select(this).style('opacity', 1);})
      .on("mouseout", function(){d3.select(this).style('opacity', 0.5);})
      .on("click", self.contact);
      
    iconHolder.append("svg:text")
      .text('CONTACT')
      .style("fill", "white")
      .attr('text-anchor', 'middle')
      .attr("class", "icon-name");
    
    iconHolder.append("svg:path")
      .attr("d", iconPath)
      .style("fill", "white")
      .attr("class", "icon");
  };

  // Overlay to display the content for each section
  this.about = function() {
    $('#about').dialog({
      autoOpen: true,
      height: 350,
      width: 400,
      modal: true,
      position: [130, 220],
      open: function(){
        jQuery('.ui-widget-overlay').bind('click',function(){
          jQuery('#about').dialog('close');
        })
      }
    });
  };
  this.services = function() {
    $('#services').dialog({
      autoOpen: true,
      height: 350,
      width: 400,
      modal: true,
      position: [350, 190],
      open: function(){
        jQuery('.ui-widget-overlay').bind('click',function(){
          jQuery('#services').dialog('close');
        })
      }
    });
  };
  this.projects = function() {
    $('#projects').dialog({
      autoOpen: true,
      height: 370,
      width: 655,
      modal: true,
      position: [450, 160],
      open: function(){
        jQuery('.ui-widget-overlay').bind('click',function(){
          jQuery('#projects').dialog('close');
        })
      }
    });
    $(".ui-dialog").addClass("customclass");
    $("#tabs").tabs().removeClass('ui-widget-content');
  };

  this.contact = function() {
    $( "#contact-form" ).dialog({ 
      autoOpen: true,
      height: 350,
      width: 400,
      modal: true,
      position: [720, 210],
      open: function(){
        jQuery('.ui-widget-overlay').bind('click',function(){
          jQuery('#contact-form').dialog('close');
        })
      }
    });
  };
  // Initialise  
  this.init();
};


var asisiumClient;

jQuery(function() {
  asisiumClient = new asisiumClient();
  $(".ui-dialog-titlebar").hide();
});
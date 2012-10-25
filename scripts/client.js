function asisiumClient() {
  var self = this;
  var iconPath = "M 0.14285728,7.9999996 C -5.3799908,7.9999996 -9.8571425,12.477152 -9.8571425,18 c 0,5.522847 4.4771517,10 9.99999978,10 C 5.6657051,28 10.142857,23.522847 10.142857,18 l 0,-0.09115 C 10.089477,12.424235 5.6277351,7.9999996 0.14285728,7.9999996 z m 0,4.7916664 c 2.85670682,0 5.18052982,2.299679 5.20833282,5.156251 l 0,0.05208 c 0,2.876483 -2.33185,5.208333 -5.20833282,5.208333 -2.87648308,0 -5.20833308,-2.33185 -5.20833308,-5.208333 0,-2.876483 2.33185,-5.208334 5.20833308,-5.208334 z";
  var width = $("#map").width(),
    mapCanvasHeight = (width * 0.38);
  
  var items = ['ABOUT', 'SERVICES', 'PROJECTS', 'CONTACT']
  
  this.init = function() {
    self.svg = d3.select("#map").append("svg:svg")
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
    var iconHolder = self.svg.append('svg:g')
      .attr("transform", "translate(" + 373 + "," + 89 + ")")
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
      .attr("transform", "translate(" + 598 + "," + 48 + ")")
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
      .attr("transform", "translate(" + 817 + "," + 15 + ")")
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
      .attr("transform", "translate(" + 981 + "," + 77 + ")")
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
    $('.about').dialog({
      autoOpen: true,
      height: 370,
      width: 900,
      modal: true,
      position: ['center', 150],
    });
  };
  this.services = function() {
    $('.about').dialog({
      autoOpen: true,
      height: 370,
      width: 900,
      modal: true,
      position: ['center', 150],
    });
  };
  this.projects = function() {
    $('.projects').dialog({
      autoOpen: true,
      height: 370,
      width: 900,
      modal: true,
      position: ['center', 150],
    });
  };

  this.contact = function() {
    $( "#contact-form" ).dialog({ 
      autoOpen: true, 
      height: 450, 
      width: 500, 
      modal: true, 
      buttons: { 
        "Send": function() { 
          var bValid = true; 
          allFields.removeClass( "ui-state-error" );
          bValid = bValid && checkLength( email, "email", 6, 80 );
          bValid = bValid && checkRegexp( email, /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i, "eg. ui@jquery.com" ); 
         
          if ( bValid ) { 
            $( "#messages tbody" ).append( "<tr>" + 
            "<td>" + name.val() + "</td>" +  
            "<td>" + email.val() + "</td>" +  
            "<td>" + massage.val() + "</td>" + 
            "</tr>" );  
            $( this ).dialog( "close" ); 
          } 
        }, 
        Cancel: function() { 
          $( this ).dialog( "close" ); 
        } 
      }, 
      close: function() { 
        allFields.val( "" ).removeClass( "ui-state-error" ); 
      } 
    });
  };
  // Initialise  
  this.init();
};


var asisiumClient;

jQuery(function() {
	asisiumClient = new asisiumClient();
});
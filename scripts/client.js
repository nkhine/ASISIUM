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
    icon.on("click", self.about);

    var iconName = self.svg.append("svg:text");
    iconName.text('About')
    iconName.style("fill", "white")
    iconName.attr("transform", "translate(" + 300 + "," + 90 + ")")
    iconName.attr('text-anchor', 'middle')
    iconName.attr("class", "icon-name")
  };
  
  this.drawServices = function () {
    var icon = self.svg.append("svg:path");
    icon.attr("d", iconPath);
    icon.attr("transform", "translate(" + 520 + "," + 50 + ")")
    icon.style("fill", "white");
    icon.attr("class", "icon");
    icon.on("mouseover", function(){d3.select(this).style("fill", "red");});
    icon.on("mouseout", function(){d3.select(this).style("fill", "white");});
    icon.on("click", self.services);

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
    icon.on("click", self.projects);

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
    icon.on("click", self.contact);
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
  //this.contact = function() {
  //  $('.contact').dialog({
  //    autoOpen: true,
  //    height: 370,
  //    width: 900,
  //    modal: true,
  //    position: ['center', 150],
  //    //buttons: {
  //    //  "": function() {}
  //    //},
  //  });
  //};
  
  
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
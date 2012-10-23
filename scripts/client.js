function asisiumClient()
{
  var d = new Date();
  var x = document.getElementById("year");
  x.innerHTML='copyright ' + '&copy; ' + 'ASISIUM ' + d.getFullYear();
}

var asisiumClient;

jQuery(function() {
	asisiumClient = new asisiumClient();
});
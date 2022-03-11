var n = [];
var c = [];

if(localStorage.getItem('c')){
	c = JSON.parse(localStorage.getItem('c'));
	for(i = 0; i < c.length; i++){
		document.write("<div class='thank'>");
			document.write("<div class='name'>");
				document.write("TicketsBet");
			document.write("</div>");
			document.write("<div class='time'>");
				document.write("Время 8:00");
			document.write("</div>");
			document.write("<div class='zal'>");
				document.write("Зал №1");
			document.write("</div>");
			document.write("<div class='row'>");
				if(c[i]<15){
					document.write("Ряд 2");
				}
				if(c[i]>=15 && c[i]<30){
					document.write("Ряд 3");
				}
				if(c[i]>=30 && c[i]<45){
					document.write("Ряд 4");
				}
				if(c[i]>=45 && c[i]<60){
					document.write("Ряд 5");
				}
				if(c[i]>=60 && c[i]<75){
					document.write("Ряд 6");
				}
				if(c[i]>=75 && c[i]<90){
					document.write("Ряд 7");
				}
				if(c[i]>=90 && c[i]<105){
					document.write("Ряд 8");
				}
				if(c[i]>=105 && c[i]<120){
					document.write("Ряд 9");
				}
				if(c[i]>=120 && c[i]<=134){
					document.write("Ряд 10");
				}
			document.write("</div>");
			document.write("<div class='place'>");
				document.write("Место " + c[i]);
			document.write("</div>");
			document.write("<div class='num'>");
				document.write(getRandomInt());
			document.write("</div>");
		document.write("</div>");
	document.write("</div>");
	}
}	
	
if(localStorage.getItem('n')){
	n = JSON.parse(localStorage.getItem('n'));
	for(i = 0; i < n.length; i++){
		document.write("<div class='thank'>");
			document.write("<div class='name'>");
				document.write("TicketsBet");
			document.write("</div>");
			document.write("<div class='time'>");
				document.write("Время 8:00");
			document.write("</div>");
			document.write("<div class='zal'>");
				document.write("Зал №1");
			document.write("</div>");
			document.write("<div class='row'>");
				document.write("Ряд 1");
			document.write("</div>");
			document.write("<div class='place'>");
				document.write("Место " + n[i]);
			document.write("</div>");
			document.write("<div class='num'>");
				document.write(getRandomInt());
			document.write("</div>");
		document.write("</div>");
		document.write("</div");
	}
}	

function getRandomInt() {
  return Math.floor(Math.random() * (999999 - 100000)) + 100000;
}
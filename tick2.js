var a = [];
var b = [];
var c = [];


if(localStorage.getItem('a')){
	a = JSON.parse(localStorage.getItem('a'));
	for(i = 0; i < a.length; i++){
		document.write("<div class='thank'>");
			document.write("<div class='name'>");
				document.write("TicketsBet");
			document.write("</div>");
			document.write("<div class='time'>");
				document.write("Время 9:00");
			document.write("</div>");
			document.write("<div class='zal'>");
				document.write("Зал №2");
			document.write("</div>");
			document.write("<div class='row'>");
				if(a[i]<15){
					document.write("Ряд 2");
				}
				if(a[i]>=15 && a[i]<30){
					document.write("Ряд 3");
				}
				if(a[i]>=30 && a[i]<45){
					document.write("Ряд 4");
				}
				if(a[i]>=45 && a[i]<60){
					document.write("Ряд 5");
				}
				if(a[i]>=60 && a[i]<75){
					document.write("Ряд 7");
				}
				if(a[i]>=75 && a[i]<90){
					document.write("Ряд 8");
				}
				if(a[i]>=90 && a[i]<105){
					document.write("Ряд 9");
				}
				if(a[i]>=105 && a[i]<=120){
					document.write("Ряд 10");
				}
			document.write("</div>");
			document.write("<div class='place'>");
				document.write("Место " + a[i]);
			document.write("</div>");
			document.write("<div class='num'>");
				document.write(getRandomInt());
			document.write("</div>");
		document.write("</div>");
	document.write("</div>");
	}
}	
	
if(localStorage.getItem('b')){
	b = JSON.parse(localStorage.getItem('b'));
	for(i = 0; i < b.length; i++){
		document.write("<div class='thank'>");
			document.write("<div class='name'>");
				document.write("TicketsBet");
			document.write("</div>");
			document.write("<div class='time'>");
				document.write("Время 8:00");
			document.write("</div>");
			document.write("<div class='zal'>");
				document.write("Зал №2");
			document.write("</div>");
			document.write("<div class='row'>");
				document.write("Ряд 1");
			document.write("</div>");
			document.write("<div class='place'>");
				document.write("Место " + b[i]);
			document.write("</div>");
			document.write("<div class='num'>");
				document.write(getRandomInt());
			document.write("</div>");
		document.write("</div>");
	document.write("</div>");
	}
}	

if(localStorage.getItem('z')){
	z = JSON.parse(localStorage.getItem('z'));
	for(i = 0; i < z.length; i++){
		document.write("<div class='thank'>");
			document.write("<div class='name'>");
				document.write("TicketsBet");
			document.write("</div>");
			document.write("<div class='time'>");
				document.write("Время 8:00");
			document.write("</div>");
			document.write("<div class='zal'>");
				document.write("Зал №2");
			document.write("</div>");
			document.write("<div class='row'>");
				document.write("Ряд 6");
			document.write("</div>");
			document.write("<div class='place'>");
				document.write("Место " + z[i]);
			document.write("</div>");
			document.write("<div class='num'>");
				document.write(getRandomInt());
			document.write("</div>");
		document.write("</div>");
		document.write("</div>");
	}
}	

function getRandomInt() {
  return Math.floor(Math.random() * (999999 - 100000)) + 100000;
}
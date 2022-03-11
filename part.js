temp_date = new Date();
day = temp_date.getDate();
weekday = temp_date.getDay();
console.log(weekday)
var days = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 
'воскресенье',];
	
switch(weekday)
	{
		case 0:
		$('.day').html(day + ' апреля, ' + days[1]);	
		document.getElementById("name-day-1").innerHTML="ВС";
		document.getElementById("num-day-1").innerHTML=day;
		document.getElementById("name-day-2").innerHTML="ПН";
		document.getElementById("num-day-2").innerHTML=day+1;
		document.getElementById("name-day-3").innerHTML="ВТ";
		document.getElementById("num-day-3").innerHTML=day+2;
		document.getElementById("name-day-4").innerHTML="СР";
		document.getElementById("num-day-4").innerHTML=day+3;
		document.getElementById("name-day-5").innerHTML="ЧТ";
		document.getElementById("num-day-5").innerHTML=day+4;
		document.getElementById("name-day-6").innerHTML="ПТ";
		document.getElementById("num-day-6").innerHTML=day+5;
		document.getElementById("name-day-7").innerHTML="СБ";
		document.getElementById("num-day-7").innerHTML=day+6;
		break;
		
		case 1:
		$('.day').html(day + ' апреля, ' + days[1]);	
		document.getElementById("name-day-1").innerHTML="ПН";
		document.getElementById("num-day-1").innerHTML=day;
		document.getElementById("name-day-2").innerHTML="ВТ";
		document.getElementById("num-day-2").innerHTML=day+1;
		document.getElementById("name-day-3").innerHTML="СР";
		document.getElementById("num-day-3").innerHTML=day+2;
		document.getElementById("name-day-4").innerHTML="ЧТ";
		document.getElementById("num-day-4").innerHTML=day+3;
		document.getElementById("name-day-5").innerHTML="ПТ";
		document.getElementById("num-day-5").innerHTML=day+4;
		document.getElementById("name-day-6").innerHTML="СБ";
		document.getElementById("num-day-6").innerHTML=day+5;
		document.getElementById("name-day-7").innerHTML="ВС";
		document.getElementById("num-day-7").innerHTML=day+6;
		break;
		case 2:
		$('.day').html(day + ' апреля, ' + days[2]);		
		document.getElementById("name-day-1").innerHTML="ВТ";
		document.getElementById("num-day-1").innerHTML=day;
		document.getElementById("name-day-2").innerHTML="СР";
		document.getElementById("num-day-2").innerHTML=day+1;
		document.getElementById("name-day-3").innerHTML="ЧТ";
		document.getElementById("num-day-3").innerHTML=day+2;
		document.getElementById("name-day-4").innerHTML="ПТ";
		document.getElementById("num-day-4").innerHTML=day+3;
		document.getElementById("name-day-5").innerHTML="СБ";
		document.getElementById("num-day-5").innerHTML=day+4;
		document.getElementById("name-day-6").innerHTML="ВС";
		document.getElementById("num-day-6").innerHTML=day+5;
		document.getElementById("name-day-7").innerHTML="ПН";
		document.getElementById("num-day-7").innerHTML=day+6;
		break;
		case 3:
		$('.day').html(day + ' апреля, ' + days[3]);
		document.getElementById("name-day-1").innerHTML="СР";
		document.getElementById("num-day-1").innerHTML=day;
		document.getElementById("name-day-2").innerHTML="ЧТ";
		document.getElementById("num-day-2").innerHTML=day+1;
		document.getElementById("name-day-3").innerHTML="ПТ";
		document.getElementById("num-day-3").innerHTML=day+2;
		document.getElementById("name-day-4").innerHTML="СБ";
		document.getElementById("num-day-4").innerHTML=day+3;
		document.getElementById("name-day-5").innerHTML="ВС";
		document.getElementById("num-day-5").innerHTML=day+4;
		document.getElementById("name-day-6").innerHTML="ПН";
		document.getElementById("num-day-6").innerHTML=day+5;
		document.getElementById("name-day-7").innerHTML="ВТ";
		document.getElementById("num-day-7").innerHTML=day+6;
		break;
		case 4:
		$('.day').html(day + ' апреля, ' + days[4]);
		document.getElementById("name-day-1").innerHTML="ЧТ";
		document.getElementById("num-day-1").innerHTML=day;
		document.getElementById("name-day-2").innerHTML="ПТ";
		document.getElementById("num-day-2").innerHTML=day+1;
		document.getElementById("name-day-3").innerHTML="СБ";
		document.getElementById("num-day-3").innerHTML=day+2;
		document.getElementById("name-day-4").innerHTML="ВС";
		document.getElementById("num-day-4").innerHTML=day+3;
		document.getElementById("name-day-5").innerHTML="ПН";
		document.getElementById("num-day-5").innerHTML=day+4;
		document.getElementById("name-day-6").innerHTML="ВТ";
		document.getElementById("num-day-6").innerHTML=day+5;
		document.getElementById("name-day-7").innerHTML="СР";
		document.getElementById("num-day-7").innerHTML=day+6;
		break;
		case 5:
		$('.day').html(day + ' апреля, ' + days[5]);	
		document.getElementById("name-day-1").innerHTML="ПТ";
		document.getElementById("num-day-1").innerHTML=day;
		document.getElementById("name-day-2").innerHTML="СБ";
		document.getElementById("num-day-2").innerHTML=day+1;
		document.getElementById("name-day-3").innerHTML="ВС";
		document.getElementById("num-day-3").innerHTML=day+2;
		document.getElementById("name-day-4").innerHTML="ПН";
		document.getElementById("num-day-4").innerHTML=day+3;
		document.getElementById("name-day-5").innerHTML="ВТ";
		document.getElementById("num-day-5").innerHTML=day+4;
		document.getElementById("name-day-6").innerHTML="СР";
		document.getElementById("num-day-6").innerHTML=day+5;
		document.getElementById("name-day-7").innerHTML="ЧТ";
		document.getElementById("num-day-7").innerHTML=day+6;
		break;
		case 6:
		$('.day').html(day + ' апреля, ' + days[6]);	
		document.getElementById("name-day-1").innerHTML="СБ";
		document.getElementById("num-day-1").innerHTML=day;
		document.getElementById("name-day-2").innerHTML="ВС";
		document.getElementById("num-day-2").innerHTML=day+1;
		document.getElementById("name-day-3").innerHTML="ПН";
		document.getElementById("num-day-3").innerHTML=day+2;
		document.getElementById("name-day-4").innerHTML="ВТ";
		document.getElementById("num-day-4").innerHTML=day+3;
		document.getElementById("name-day-5").innerHTML="СР";
		document.getElementById("num-day-5").innerHTML=day+4;
		document.getElementById("name-day-6").innerHTML="ЧТ";
		document.getElementById("num-day-6").innerHTML=day+5;
		document.getElementById("name-day-7").innerHTML="ПН";
		document.getElementById("num-day-7").innerHTML=day+6;
		break;
	}
	
$(".week").on("click", ".tab", function () {
	$(".week .tab").removeClass("active");
	$(".fortable").find(".active").removeClass("active");
	$(this).addClass("active");
	$('.day').html(document.getElementById('week').rows[1].cells[$(this).index()].innerHTML + ' апреля, ' 
	+ days[$(this).index()]);
	$(".seans").eq($(this).index()).addClass("active");
});
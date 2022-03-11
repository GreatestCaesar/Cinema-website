var a = [];
var b = [];
var z = [];
var sum = 0;

$(".places .m .two").on("click", ".place", function () {
	if($(this).hasClass("reservation")){
		$(this).removeClass(".reservation");
		for(i = 0;  i < z.length; i++){
			if(z[i] == $(this).index()){
				z.splice(i, 1);
			}
		}
		save();
	}else{
		$(this).addClass(".reservation");
		z.push($(this).index());
		save();
	}
	if(sum > 0){
		$('.sum').html('Сумма заказа '+sum+' руб');
		document.getElementById('btn').style.display = 'block';
	}else{		
		$('.sum').html('');
		document.getElementById('btn').style.display = 'none';
	}
});

$(".m").on("click", ".place", function () {
	console.log($(this).index());
	if($(this).hasClass("reservation")){
		$(this).removeClass("reservation");
		for(i = 0;  i < a.length; i++){
			if(a[i] == $(this).index()){
				a.splice(i, 1);
			}
		}
		save();
		sum -= 4.5;
	}else{
		$(this).addClass("reservation");
		a.push($(this).index());
		save();
		sum += 4.5;
	}
	if(sum > 0){
		$('.sum').html('Сумма заказа '+sum+' руб');
		document.getElementById('btn').style.display = 'block';
	}else{		
		$('.sum').html('');
		document.getElementById('btn').style.display = 'none';
	}
});

$(".one").on("click", ".place", function () {
	if($(this).hasClass("reservation")){
		$(this).removeClass("reservation");
		for(i = 0;  i < b.length; i++){
			if(b[i] == $(this).index()){
				b.splice(i, 1);
			}
		}
		save();
		sum -= 4.5;
	}else{
		$(this).addClass("reservation");
		b.push($(this).index());
		save();
		sum += 4.5;
	}
	if(sum > 0){
		$('.sum').html('Сумма заказа '+sum+' руб');
		document.getElementById('btn').style.display = 'block';
	}else{		
		$('.sum').html('');
		document.getElementById('btn').style.display = 'none';
	}
});

function save(){
	localStorage.setItem('a', JSON.stringify(a));
	localStorage.setItem('b', JSON.stringify(b));
	localStorage.setItem('z', JSON.stringify(z));
}

function load() {
	if(localStorage.getItem('a')){
		a = JSON.parse(localStorage.getItem('a'));
		for(i = 0; i < a.length; i++){
			$(".m .place").eq(a[i]).removeClass("reservation");
			$(".m .place").eq(a[i]).addClass("book");
			$(".m .place").eq(a[i]).css("user-select","none");
			$(".m .place").eq(a[i]).css("pointer-events:","none");
		}
	}	
	
	if(localStorage.getItem('b')){
		b = JSON.parse(localStorage.getItem('b'));
		for(i = 0; i < b.length; i++){
			$(".one .place").eq(b[i]).removeClass("reservation");
			$(".one .place").eq(b[i]).addClass("book");
			$(".one .place").eq(b[i]).css("user-select","none");
			$(".one .place").eq(b[i]).css("pointer-events:","none");
		}
	}	
	
	if(localStorage.getItem('z')){
		z = JSON.parse(localStorage.getItem('z'));
		for(i = 0; i < z.length; i++){
			$(".two .place").eq(z[i]).removeClass("reservation");
			$(".two .place").eq(z[i]).addClass("book");
			$(".two .place").eq(z[i]).css("user-select","none");
			$(".two .place").eq(z[i]).css("pointer-events:","none");
		}
	}
}

window.onload = load;
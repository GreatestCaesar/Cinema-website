var c = [];
var n = [];
var sum = 0;

$(".m").on("click", ".place", function () {
	if($(this).hasClass("reservation")){
		$(this).removeClass("reservation");
		for(i = 0;  i < c.length; i++){
			if(c[i] == $(this).index()){
				c.splice(i, 1);
			}
		}
		save();
		sum -= 4.5;
	}else{
		$(this).addClass("reservation");
		c.push($(this).index());
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
		for(i = 0;  i < n.length; i++){
			if(n[i] == $(this).index()){
				n.splice(i, 1);
			}
		}
		save();
		sum -= 4.5;
	}else{
		$(this).addClass("reservation");
		n.push($(this).index());
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
	localStorage.setItem('c', JSON.stringify(c));
	localStorage.setItem('n', JSON.stringify(n));
}

function load() {
	if(localStorage.getItem('c')){
		c = JSON.parse(localStorage.getItem('c'));
		for(i = 0; i < c.length; i++){
			$(".m .place").eq(c[i]).removeClass("reservation");
			$(".m .place").eq(c[i]).addClass("book");
			$(".m .place").eq(c[i]).css("user-select","none");
			$(".m .place").eq(c[i]).css("pointer-events:","none");
		}
	}	
	
	if(localStorage.getItem('n')){
		n = JSON.parse(localStorage.getItem('n'));
		for(i = 0; i < n.length; i++){
			$(".one .place").eq(n[i]).removeClass("reservation");
			$(".one .place").eq(n[i]).addClass("book");
			$(".one .place").eq(n[i]).css("user-select","none");
			$(".one .place").eq(n[i]).css("pointer-events:","none");
		}
	}	
}

window.onload = load;
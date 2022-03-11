let login = new Map();

function log(){
    if(document.getElementById("login").value == '' || document.getElementById("psw").value == ''){
        alert('Введите данные');
    }else {
        if (localStorage.getItem('login')){
            login = new Map(JSON.parse(localStorage.login));
            if(login.get(document.getElementById("login").value)){
                if(login.get(document.getElementById("login").value) == document.getElementById("psw").value){
                    location.href="main.html";
                }else{
                    alert('Пароль введен неправильно');
                }
            }else{
                alert('Такого пользователя не существует');
            }
        }
    }
}


function save(){
    localStorage.login = JSON.stringify(Array.from(login.entries()));
}


let login = new Map();

function regist(){
    if(document.getElementById("login").value == '' || document.getElementById("psw").value == ''){
        alert('Введите данные');
    }else {
        if (localStorage.getItem('login')) {
            login = new Map(JSON.parse(localStorage.login));
            if (login.get(document.getElementById("login").value)) {
                alert('Данный пользователь уже существует!');
            } else {
                login.set(document.getElementById("login").value, document.getElementById("psw").value);
                save();
                location.href = "login.html";
            }
        }
    }
}


function save(){
    localStorage.login = JSON.stringify(Array.from(login.entries()));
}


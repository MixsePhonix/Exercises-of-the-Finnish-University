function welcome_func(nickname)
{

    let todayData = new Date();
    alert ("Welcome user" + nickname + "\n To day date is:"
    + todayData.getDate() + "." + todayData.getMonth() + '.'
    + todayData.getFullYear() + "\n To day time is:" +
    todayData.getHours() + ":" + todayData.getMinutes() 
    + ':' + todayData.getSeconds());

}

function error404_func (nickname,password)
{
    alert("Твой никнейм: " + nickname + " и пароль: " + password + " Не верны попробуй еще раз!!!");

}

function checkdata_func(name,pass,error,welcome)
{
    nickname = prompt ("Введите имя пользователя:");
    password = prompt ("Введите пароль:");

    
    
        while ((nick != nickname) || (word != password))
        {
            error (nickname,password);
            nickname = prompt ("Введите имя пользователя:");
            password = prompt ("Введите пароль:");

        }
        if ((nickname == nick) && (password == word))
        {
            welcome (nickname);
        }

}
let nick = "Mixce";
let word = "1";
checkdata_func(nick,word,error404_func,welcome_func);



//2) Напишите веб-страницу, на которой вы используете JavaScript для написания программы, 
//которая просит пользователей ввести имя пользователя и пароль и в зависимости от того, 
//являются ли имя пользователя и пароль правильными или нет, 
//вызывает различные функции обратного вызова для отображения приветственного сообщения 
//с текущей датой и временем или сообщения об ошибке, 
//уведомляющего о том, что пользователь заданная пара имени пользователя и пароля неверна.
// Функция должна получить правильное имя пользователя и пароль, а также функции обратного вызова в качестве аргументов.
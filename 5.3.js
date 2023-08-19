let welcome_func=(nickname) =>
{

    let todayData = new Date();
    alert ("Welcome user" + nickname + "\n To day date is:"
    + todayData.getDate() + "." + todayData.getMonth() + '.'
    + todayData.getFullYear() + "\n To day time is:" +
    todayData.getHours() + ":" + todayData.getMinutes() 
    + ':' + todayData.getSeconds());

}
let error404_func=(nickname,password) =>
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





//3) Улучшите свое решение для предыдущей проблемы, 
//чтобы определить функции обратного вызова как функции со стрелками.
var alphabet_name = [];
alphabet_name = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz -";
var mail = [];
mail = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz._-1234567890@";
function check1 (name){
    let arr = [];
    arr = name
    for (i = 0 ; i < arr.length ; i++){
        if (!(alphabet_name.includes(arr[i])))
            return false;

    
    }
return true;    
}
function check2 (mail){
    let arr = [];
    arr = mail
    for (i = 0 ; i < arr.length ; i++){
        if (!(mail.includes(arr[i])))
            return false;
        
    
    }
return true;
}




let firstname = prompt("Введите имя:");
while (check1 (firstname)== false){
    firstname = prompt("Попробуйте еще раз:");
}
let secondname = prompt("Введите фамилию:");
while (check1 (secondname) == false){
    secondname = prompt("Попробуйте еще раз:");
}
let email = prompt ("Введите почту:");
while (check2 (email) == false){
    email = prompt("Попробуйте еще раз:");
}
alert (`First name :${firstname}\nsecondname : ${secondname}\n email: ${email}`)











///Напишите веб-страницу, на которой вы используете JavaScript для написания программы,
// которая просит пользователей зарегистрироваться, введя имя, фамилию и адрес электронной почты.
// Имя и фамилия могут содержать только буквы, пробел и тире (-), но никаких других символов.
// Адрес электронной почты может содержать только буквы, точку (.), тире (-), подчеркивание (_) и цифры,
// а также один знак в конце (@). В программе определите две отдельные функции для проверки 
//1) имени и фамилии и 2) адреса электронной почты. 
//Функция для проверки имени и фамилии должна получить имя или фамилию в качестве аргумента и проверить,
// являются ли они допустимыми, и вернуть логическое значение (return или false).
// Функция для проверки адреса электронной почты должна получить адрес электронной почты в качестве аргумента и проверить, 
//является ли он действительным или нет, а затем вернуть либо true, либо false. 
//Программа должна продолжать запрашивать у пользователя ввод действительных данных до тех пор,
//пока они не станут недействительными. После получения всех необходимых действительных 
//данных приложение должно отобразить сводку регистрационных данных пользователя.
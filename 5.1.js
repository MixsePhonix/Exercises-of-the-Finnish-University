function swap (array , a , b)
{
    let add = array[a];
    array[a] = array[b];
    array[b] = add;
    return (array);
}
function sort (array , answer , callback )
{

   for (let i=0 ; i < array.length; i++)  
   {
        for (let j = 0 ; j < array.length - i - 1 ; j++)
        {
            if ((array[j] > array[j+1]) && (answer == true ))
                array = callback (array, j , j+1);
            else if ((array[j] < array[j+1]) && (answer == false))
                array = callback (array , j+1 , j);
        }
    }
    return ('Solved array:' + array);
}
let array = [];
let len = prompt("Enter the length of the array");
for (let i = 0; i < len; i++)
{
    array[i] = prompt("Enter an array number: ");
}
answer = confirm ("В порядке возрастания или нет?");
alert(sort(array, answer, swap));






//Напишите веб-страницу, на которой вы используете JavaScript,
//и определите функцию, которая использует функции обратного вызова для сортировки массива чисел, 
// которые она получает в качестве аргумента либо в порядке возрастания, либо в порядке убывания. 
//Функция должна спросить пользователя, следует ли сортировать числа в порядке возрастания или убывания, 
//а затем соответствующую функцию для сортировки заданного массива чисел в порядке возрастания или убывания.
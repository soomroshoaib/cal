function click_button(id){

first_text = document.getElementById('first_text'); 
second_text = document.getElementById('second_text'); 
third_text = document.getElementById('third_text'); 

first_value = Number(first_text.value);
second_value = second_text.value;
third_value = Number(third_text.value);

button_value = document.getElementById(id).value;

if (isValidNumber(button_value) ==false){

} else if(issign(button_value)==true){
    third_text.value = first_text.value;
    second_text.value = button_value;
    first_text.value = "";
} else if ((second_value == '+' && id == '=') 
 && (first_value !='' && third_value != '')) {

    third_text.value = '';
    second_text.value = '';

     first_text.value = add(first_value, third_value);

}
 else if ((second_value == '-' && id == '=') 
&& (first_value!='' && third_value != '')) {

   third_text.value = '';
   second_text.value = '';

    first_text.value = subtrack(first_value, third_value);

}
else{

} {
    first_text.value += button_value;

}
  
}

function add(num1, num2){
    return num1 + num2;

}
function subtrack(num1, num2){
    return num2 - num1;
}


function multply(num1, num2){
    return num1 * num2;

}
function divide(num1, num2){
    return num2 / num1;
}


function parcentage(num1, num2){
    return (num2  / num1) * 100;

}
function sqrt(num1){
    return Math.sqrt(num1);
}

function issign(id){

if(id=='+'  ||id=='-'  ||id=='/'  ||id=='*'  ||id=='%' ||id=='Sqr'  ||id=='1/x'){
 return true;
} else{
    return false;
}

}
function isValidNumber(number){

    try{

   return eval(number) }
    catch(err){

}



}
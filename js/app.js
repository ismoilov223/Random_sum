function numvr(params) {
  return Math.ceil(Math.random() * 80);
}
function rendom_var(params) {
  return Math.ceil(Math.random() * 4);
}
var rendom_var = rendom_var();
let sum_one = numvr();
let sum_two = numvr();
// end
let var_one = numvr();
let var_two = numvr();
let var_three = numvr();
let var_four = numvr();

function inner_one(params) {
  return (document.getElementById("variant-1").innerText = var_one);
}
function inner_two(params) {
  return (document.getElementById("variant-2").innerText = var_two);
}
function inner_three(params) {
  return (document.getElementById("variant-3").innerText = var_three);
}
function inner_four(params) {
  return (document.getElementById("variant-4").innerText = var_four);
}
// if (sum_one != sum_two) {
let summanat = sum_one + sum_two;
if (
  var_one != var_two &&
  var_one != var_three &&
  var_one != var_four &&
  var_one != summanat
) {
  inner_one();
} else {
  window.location.reload();
}
if (
  var_two != var_one &&
  var_two != var_three &&
  var_two != var_four &&
  var_two != summanat
) {
  inner_two();
} else {
  window.location.reload();
}
if (
  var_three != var_one &&
  var_three != var_two &&
  var_three != var_four &&
  var_three != summanat
) {
  inner_three();
} else {
  window.location.reload();
}
if (
  var_four != var_one &&
  var_four != var_two &&
  var_four != var_three &&
  var_four != summanat
) {
  inner_four();
}else{
  
  window.location.reload(true);
}
// }
// if (sum_one != sum_two) {
document.getElementById("num-one").innerText = sum_one;
document.getElementById("num-two").innerText = sum_two;
let sumnat = sum_one + sum_two;
var var_ran = document.getElementById("variant-" + rendom_var);
var_ran.innerText = sumnat;
console.log(var_ran);
// }

//   all end
var togri = false;
function one_sub(params) {
  if (1 == rendom_var && togri == false) {
    document.getElementById("con-box-one").style.backgroundColor = "#00be49";
    document.getElementById("con-box-one").style.color = "white";
    togri = true;
    setTimeout(function () { location.reload(1); }, 1500);
  } else if(togri == false){
    document.getElementById("con-box-one").style.backgroundColor = "#be2c00";
    document.getElementById("con-box-one").style.color = "white";
    togri = true;
    setTimeout(function () { location.reload(1); }, 1500);
  }
}
function two_sub(params) {
  if (2 == rendom_var && togri == false) {
    document.getElementById("con-box-two").style.backgroundColor = "#00be49";
    document.getElementById("con-box-two").style.color = "white";
    togri = true;
    setTimeout(function () { location.reload(1); }, 1500);
  } else if(togri == false) {
    document.getElementById("con-box-two").style.backgroundColor = "#be2c00";
    document.getElementById("con-box-two").style.color = "white";
    togri = true;
    setTimeout(function () { location.reload(1); }, 1500);
  }
}
function three_sub(params) {
  if (3 == rendom_var && togri == false) {
    document.getElementById("con-box-three").style.backgroundColor = "#00be49";
    document.getElementById("con-box-three").style.color = "white";
    togri = true;
    setTimeout(function () { location.reload(1); }, 1500);
  } else if(togri == false){
    document.getElementById("con-box-three").style.backgroundColor = "#be2c00";
    document.getElementById("con-box-three").style.color = "white";
    togri = true;
    setTimeout(function () { location.reload(1); }, 1500);
  }
}
function four_sub(params) {
  if (4 == rendom_var && togri == false) {
    document.getElementById("con-box-four").style.backgroundColor = "#00be49";
    document.getElementById("con-box-four").style.color = "white";
    togri = true;
    setTimeout(function () { location.reload(1); }, 1500);
  } else if(togri == false){
    document.getElementById("con-box-four").style.backgroundColor = "#be2c00";
    document.getElementById("con-box-four").style.color = "white";
    togri = true;
    setTimeout(function () { location.reload(1); }, 1500);
  }
}

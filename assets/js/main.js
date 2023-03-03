

// Number 1
  document.getElementById("No1").innerText = localStorage.getItem('number1');
  document.getElementById("No2").innerText = localStorage.getItem('number2');
  document.getElementById("No3").innerText = localStorage.getItem('number3');
  document.getElementById("No4").innerText = localStorage.getItem('number4');
  document.getElementById("No5").innerText = localStorage.getItem('number5');
function func(event) {
  event.preventDefault();
  localStorage.setItem('number1', document.getElementById("N_1").value);
  localStorage.setItem('number2', document.getElementById("N_2").value);
  localStorage.setItem('number3', document.getElementById("N_3").value);
  localStorage.setItem('number4', document.getElementById("N_4").value);
  localStorage.setItem('number5', document.getElementById("N_5").value);
  alert("You have saved " + document.getElementById("N_1").value + document.getElementById("N_2").value + document.getElementById("N_3").value + document.getElementById("N_4").value + document.getElementById("N_5").value + "!");
  console.log(document.getElementById("N_1").value);
  console.log(document.getElementById("N_2").value);
  console.log(document.getElementById("N_3").value);
  console.log(document.getElementById("N_4").value);
  console.log(document.getElementById("N_5").value);
  document.getElementById("No1").innerText = localStorage.getItem('number1');
  document.getElementById("No2").innerText = localStorage.getItem('number2');
  document.getElementById("No3").innerText = localStorage.getItem('number3');
  document.getElementById("No4").innerText = localStorage.getItem('number4');
  document.getElementById("No5").innerText = localStorage.getItem('number5');

}



console.log("All Done")






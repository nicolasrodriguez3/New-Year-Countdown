document.addEventListener("load", countdown()); //Ejecutar la funcion al cargar la página
setInterval(countdown, 1000); //Actualizar la cuenta regresiva cada 1 segundo

function countdown() {
	const $days = document.querySelector(".days");
	const $hours = document.querySelector(".hours");
	const $minutes = document.querySelector(".minutes");
	const $seconds = document.querySelector(".seconds");

	const currentYear = new Date().getFullYear();
	const currentDate = new Date();
	const newYearTime = new Date(`01 01 ${currentYear + 1} 00:00:00`);
	const remainingTime = newYearTime - currentDate;

  //Actualizar el año mostrado
  document.querySelector(".year").innerHTML = currentYear + 1;

	const d = Math.floor(remainingTime / 1000 / 60 / 60 / 24);
	const h = Math.floor((remainingTime / 1000 / 60 / 60) % 24);
	const m = Math.floor((remainingTime / 1000 / 60) % 60);
	const s = Math.floor((remainingTime / 1000) % 60);

	$days.innerHTML = d;
	$hours.innerHTML = h;
	$minutes.innerHTML = m;
	$seconds.innerHTML = s;

	words = document.querySelectorAll(".time");
  d == 1 ? words[0].innerHTML = "Día" : words[0].innerHTML = "Días";
  h == 1 ? words[1].innerHTML = "Hora" : words[1].innerHTML = "Horas";
  m == 1 ? words[2].innerHTML = "Minuto" : words[2].innerHTML = "Minutos";
  s == 1 ? words[3].innerHTML = "Segundo" : words[3].innerHTML = "Segundos";
}

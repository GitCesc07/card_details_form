

// Variables locales
const resultP1 = document.querySelector(".result-1"),
  resultP2 = document.querySelector(".result-2"),
  resultP3 = document.querySelector(".result-3"),
  resultP4 = document.querySelector(".result-4"),
  resultMonth = document.querySelector(".span-result-month"),
  resultYear = document.querySelector(".span-result-year"),
  nameTarjet = document.querySelector(".name-tarjet"),
  numberTarjet = document.querySelector(".fecha-tarjet"),
  resultCvc = document.querySelector(".result-cvc"),
  nameTarjetDigt = document.querySelector("#name"),
  numberCardDigt = document.querySelector("#number-card"),
  monthDigit = document.querySelector("#month"),
  yearDigit = document.querySelector("#year"),
  cvcDigit = document.querySelector("#cvc"),
  btnSubmit = document.querySelector(".btn-submit"),
  cardNumber = document.querySelector(".number-card"),
  cardName = document.querySelector(".name-card"),
  cardDateMonth = document.querySelector(".date-month"),
  cardDateYear = document.querySelector(".date-year"),
  cardCVC = document.querySelector(".cvc");

let isNombretarget = false,
  isNumberTarjet = false,
  isMesTarjet = false,
  isYearTarjet = false,
  isCvcTarjet = false;


AgregarNombre();
AgregarNumero();
AgregarMes();
AgregarYear();
AgregarCVC();

function AgregarNombre() {
  nameTarjetDigt.addEventListener("input", e => {
    const value = e.target.value;



    if (value === "") {
      nameTarjet.textContent = "Nombre Cuenta";
    }
    else {
      nameTarjet.textContent = value;
    }

    let regExp1 = /[A-Z]/g;
    let regExp3 = /[a-z]/g;

    if (regExp1.test(nameTarjetDigt.value) == true || regExp3.test(nameTarjetDigt.value) == true) {
      
      validarTextName();
      isNombretarget = false;
    }
    else {
      numberTextName();
      isNombretarget = true;
    }

  })
}

function validarTextName() {
  cardName.classList.add("paragraph-visible-name");
  nameTarjetDigt.classList.add("text-bottom");
  cardName.classList.remove("paragraph-visible-name-red");
}
function numberTextName() {
  nameTarjet.textContent = "Nombre Cuenta";
  cardName.classList.remove("paragraph-visible-name");
  nameTarjetDigt.classList.remove("text-bottom");
  cardName.classList.add("paragraph-visible-name-red");
}



function AgregarNumero() {
  numberCardDigt.addEventListener("input", e => {
    const value = e.target.value;

    // valor1 + " " + valor2 + " " + valor3 + " " + valor4;

    let regExp = /[A-Z]/g;
    let regExp2 = /[a-z]/g;

    if (regExp.test(numberCardDigt.value) || regExp2.test(numberCardDigt.value)) {
      validarTextNumber();
      isNumberTarjet = false;
      return;
    }
    else {
      numberCardDigt.value = value.replace(/\s/g, "").replace(/([0-9]{4})/g, "$1 ");
      validarNumberNumb();
      isNumberTarjet = true;
    }


    const valor1 = value,
      valor2 = value,
      valor3 = value,
      valor4 = value;

    if (value === "") {
      resultP1.textContent = "0000";
      resultP2.textContent = "0000";
      resultP3.textContent = "0000";
      resultP4.textContent = "0000";
    }
    else {
      resultP1.textContent = valor1.substring(0, 4);
      resultP2.textContent = valor2.substring(5, 9);
      resultP3.textContent = valor3.substring(10, 14);
      resultP4.textContent = valor4.substring(15, 19);
    }
  })
}

function validarNumberNumb() {
  numberCardDigt.classList.add("text-bottom");
  cardNumber.classList.add("paragraph-visible-number");
  cardNumber.classList.remove("paragraph-visible-number-red");
}
function validarTextNumber() {
  cardNumber.classList.remove("paragraph-visible-number");
  numberCardDigt.classList.remove("text-bottom");
  cardNumber.classList.add("paragraph-visible-number-red");
}




function AgregarMes() {
  monthDigit.addEventListener("input", e => {
    const value = e.target.value;

    let regExp = /[A-Z]/g;
    let regExp2 = /[a-z]/g;

    if (regExp.test(monthDigit.value) || regExp2.test(monthDigit.value)) {

      validarTextMonth();
      isMesTarjet = false;
      return;
    }
    else {
      validarNumberMonth();
      isMesTarjet = true;
    }


    if (value > 12) {
      validarTextMonth();
      return;
    }
    else {
      validarNumberMonth();
    }

    if (value == "") {
      resultMonth.textContent = "00"
      isMesTarjet = false;
    }
    else {
      resultMonth.textContent = value;
      isMesTarjet = true;
    }
  })
}

function validarNumberMonth() {
  monthDigit.classList.add("text-bottom");
  cardDateMonth.classList.add("paragraph-visible-month");
  cardDateMonth.classList.remove("paragraph-visible-month-red");
}

function validarTextMonth() {
  cardDateMonth.classList.remove("paragraph-visible-month");
  monthDigit.classList.remove("text-bottom");
  cardDateMonth.classList.add("paragraph-visible-month-red");
}


function AgregarYear() {
  yearDigit.addEventListener("input", e => {
    const value = e.target.value;

    let regExp = /[A-Z]/g;
    let regExp2 = /[a-z]/g;

    if (regExp.test(yearDigit.value) || regExp2.test(yearDigit.value)) {

      validarNumberYear();
      isYearTarjet = false;
      return;
    }
    else {
      validarNumberYear();
      isYearTarjet = true;
    }

    var today = new Date();
    var year = today.getFullYear().toString();

    year = year.substring(2);

    if (value < year) {
      validarTextYear();
      isYearTarjet = false;
      return;
    }
    else {
      validarNumberYear();
      isYearTarjet = true;
    }


    if (value == "") {
      resultYear.textContent = "00"
      isYearTarjet = false;
    }
    else {
      resultYear.textContent = value;
      isYearTarjet = true;
    }
  })
}

function validarNumberYear() {
  yearDigit.classList.add("text-bottom");
  cardDateYear.classList.add("paragraph-visible-year");
  cardDateYear.classList.remove("paragraph-visible-year-red");
}

function validarTextYear() {
  cardDateYear.classList.remove("paragraph-visible-year");
  yearDigit.classList.remove("text-bottom");
  cardDateYear.classList.add("paragraph-visible-year-red");
}

function AgregarCVC() {
  cvcDigit.addEventListener("input", e => {
    const value = e.target.value;

    let regExp = /[A-Z]/g;
    let regExp2 = /[a-z]/g;

    if (regExp.test(cvcDigit.value) || regExp2.test(cvcDigit.value)) {

      validarTextCVC();
      isCvcTarjet = false;
      return;
    }
    else {
      validarCVCNumber();
      isCvcTarjet = true;
    }

    if (value == "") {
      resultCvc.textContent = "000"
      isCvcTarjet = false;
    }
    else {
      resultCvc.textContent = value
      isCvcTarjet = true;
    }
  })
}

function validarCVCNumber() {
  cvcDigit.classList.add("text-bottom");
  cardCVC.classList.add("paragraph-visible-cvc");
  cardCVC.classList.remove("paragraph-visible-cvc-red");
}
function validarTextCVC() {
  cardCVC.classList.remove("paragraph-visible-cvc");
  cvcDigit.classList.remove("text-bottom");
  cardCVC.classList.add("paragraph-visible-cvc-red");
}

btnSubmit.addEventListener("click", () => {

  if (isNombretarget == false,
    isNumberTarjet == false,
    isMesTarjet == false,
    isYearTarjet == false,
    isCvcTarjet == false) {
    Swal.fire({
      title: '',
      text: 'AN ERROR HAS OCURRE!!!',
      icon: 'error',
      confirmButtonText: 'Continue',
      timer: 3000
    })
  }
  else {
    Swal.fire({
      title: '',
      text: 'THANK YOU!',
      icon: 'success',
      confirmButtonText: 'Continue',
      timer: 3000
    })

    resultP1.textContent = "0000";
    resultP2.textContent = "0000";
    resultP3.textContent = "0000";
    resultP4.textContent = "0000";
    numberCardDigt.value = "";

    nameTarjet.textContent = "Nombre Cuenta";
    nameTarjetDigt.value = "";

    resultMonth.textContent = "00";
    monthDigit.value = "";

    resultYear.textContent = "00";
    yearDigit.value = "";

    resultCvc.textContent = "000";
    cvcDigit.value = "";
  }

})
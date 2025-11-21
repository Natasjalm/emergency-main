const form = document.querySelector("form");
const firstOutput = document.querySelector(".first_output");

/**************Laver mulighed for at skrive noget andet i checkbox*************/
document.querySelector("#form-summary").classList.add("hide");

function showAndet() {
  console.log("#showAndet");

  if (document.querySelector("#scroll").value == "andet") {
    document.querySelector(".andet").classList.remove("hide");
  }
}
/*****************FJERN BROWSER POP-UP???*******************/
function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);

/***********************************************************************/
const nameOutput = document.querySelector(".name_output");
const ageOutput = document.querySelector(".age_output");
const beskrivelseOutput = document.querySelector(".beskrivelse_output");
const datoOutput = document.querySelector(".dato_output");
const skalaOutput = document.querySelector(".skala_output");

function handleSubmit(event) {
  console.log("handleSubmit");
  event.preventDefault();
  const formData = new FormData(form);

  const name = formData.get("name");
  nameOutput.textContent = name;

  const age = formData.get("age");
  ageOutput.textContent = age;

  const beskrivelse = formData.get("beskrivelse");
  beskrivelseOutput.textContent = beskrivelse;

  const dato = formData.get("dato");
  datoOutput.textContent = dato;

  const skala = formData.get("skala");
  skalaOutput.textContent = skala;

  form.reset();
}

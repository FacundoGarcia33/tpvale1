const alerta = document.querySelector("#incorrecto")
const alerta2 = document.querySelector("#correcto")

alerta.addEventListener("click", () => {
    Swal.fire({
        icon: "error",
        title: "Incorrecto",
        text: "La respuesta es incorrecta!",
    });
});

alerta2.addEventListener("click", ()=>{
    Swal.fire({
        title: "Correcto!",
        text: "Aqui te dejare una explicacion!",
        icon: "success"
      });
})
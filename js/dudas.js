const btns = document.querySelectorAll('.pregunta-titulo');

btns.forEach(btn => {
  btn.addEventListener("click", () => {
    const respuesta = btn.nextElementSibling;

    // Cierra todas las respuestas menos la actual
    document.querySelectorAll('.respuesta').forEach(r => {
      if (r !== respuesta) r.style.maxHeight = null;
    });

    // Alterna la respuesta actual
    if (respuesta.style.maxHeight) {
      respuesta.style.maxHeight = null;
    } else {
      respuesta.style.maxHeight = respuesta.scrollHeight + "px";
    }
  });
});

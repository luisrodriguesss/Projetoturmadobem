document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const inputs = form.querySelectorAll("input[required], textarea[required]");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let valido = true;

    form.querySelectorAll(".erro").forEach((msg) => msg.remove());

    inputs.forEach((campo) => {
      if (campo.value.trim() === "") {
        valido = false;
        mostrarErro(campo, "⚠️ Este campo é obrigatório");
      } else if (campo.type === "email" && !validarEmail(campo.value)) {
        valido = false;
        mostrarErro(campo, "⚠️ Digite um e-mail válido");
      }
    });

    if (valido) {
      const nome = document.getElementById("nome").value.trim();
      localStorage.setItem("nomeUsuario", nome);
      form.reset();
      alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
    }
  });

  function mostrarErro(campo, mensagem) {
    const span = document.createElement("span");
    span.classList.add("erro");
    span.style.color = "red";
    span.style.fontSize = "14px";
    span.textContent = mensagem;
    campo.insertAdjacentElement("afterend", span);
  }

  function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});


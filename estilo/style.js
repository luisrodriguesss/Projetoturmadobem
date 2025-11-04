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

const botaoToggle = document.createElement("button");
botaoToggle.textContent = "Mostrar/Ocultar Estatísticas";
botaoToggle.style.margin = "20px auto";
botaoToggle.style.display = "block";
botaoToggle.style.padding = "10px 20px";
botaoToggle.style.background = "#a3c23e";
botaoToggle.style.color = "#fff";
botaoToggle.style.border = "none";
botaoToggle.style.borderRadius = "8px";
botaoToggle.style.cursor = "pointer";

document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");
  const estatisticas = document.querySelector(".estatisticas");
  if (estatisticas && main) {
    main.insertAdjacentElement("beforeend", botaoToggle);

    botaoToggle.addEventListener("click", () => {
      estatisticas.style.display =
        estatisticas.style.display === "none" ? "block" : "none";
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const nomeSalvo = localStorage.getItem("nomeUsuario");
  if (nomeSalvo) {
    const header = document.querySelector("header h1");
    const saudacao = document.createElement("p");
    saudacao.textContent = `Bem-vindo de volta, ${nomeSalvo}! 😊`;
    saudacao.style.fontSize = "16px";
    saudacao.style.marginTop = "6px";
    saudacao.style.color = "#222";
    header.insertAdjacentElement("afterend", saudacao);
  }
});



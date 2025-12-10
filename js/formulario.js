const formulario = document.querySelector("form");

function formularioEnviado(resposta) {
  if (resposta.ok) {
    formulario.innerHTML =
      "<p class='font2-500 col-2' style='padding: 16px; border-radius: 4px; background: var(--c2)><span class='font2-500' style='color: #317a00;'>Mensagem enviada</span>, em breve entraremos em contato. Geralmente respondemos em 24 horas.";
  } else {
    formulario.innerHTML =
      "<p class='font2-500 col-2' style='padding: 16px; border-radius: 4px; background: var(--c2);'><span class='font2-500' style='color: var(--p2);'>Erro no envio</span>, você pode enviar diretamente para o nosso e-mail em: contato@bikcraft.net";
  }
}

function enviarFormulario(event) {
  event.preventDefault();
  const botao = document.querySelector("form button");
  botao.disabled = true;
  botao.innerText = "Enviando...";

  const data = new FormData(formulario);

  fetch("./enviar.php", {
    method: "POST",
    body: data,
  }).then(formularioEnviado);
}

formulario.addEventListener("submit", enviarFormulario);

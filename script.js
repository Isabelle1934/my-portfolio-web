// Alternar entre o tema claro e escuro
const botaoTema = document.getElementById("tema");

botaoTema.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Validação do formulário
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  // Verifica os campos vazios
  if (nome === "" || email === "" || mensagem === "") {
    alert("Preencha todos os campos!");
    return;
  }

  // Valida o e-mail
  const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!formatoEmail.test(email)) {
    alert("Digite um email válido!");
    return;
  }

  // Simulação de envio
  alert("Mensagem enviada com sucesso!");
  formulario.reset();
});

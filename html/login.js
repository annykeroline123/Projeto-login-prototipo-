document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  // Simulação de login — substitua pela lógica real (ex: API)
  const usuarioCorreto = "admin";
  const senhaCorreta = "1234";

  if (username === usuarioCorreto && password === senhaCorreta) {
    message.style.color = "green";
    message.textContent = "Login realizado com sucesso! Redirecionando...";
    
    setTimeout(() => {
      window.location.href = "dashboard.html"; // Página pós-login
    }, 1500);
  } else {
    message.style.color = "red";
    message.textContent = "Usuário ou senha incorretos!";
  }
});
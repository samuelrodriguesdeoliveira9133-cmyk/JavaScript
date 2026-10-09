// QUESTÃO 17 — Operadores lógicos
let usuarioLogado = true;
let temPermissao = false;
if (usuarioLogado && temPermissao) {
  console.log("Acesso Total");
} else if (usuarioLogado || temPermissao) {
  console.log("Acesso Limitado");
} else {
  console.log("Negado");
}
// Resposta: B) Acesso Limitado.
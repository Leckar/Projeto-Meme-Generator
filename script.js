// Variáveis necessárias para o funcionamento do código;
const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
// Função handler do listener do text input;
const textHandler = () => {
  const newText = textInput.value;
  memeText.innerText = `${newText}`;
};
// Listener do text input;
const textListener = () => {
  textInput.addEventListener('input', textHandler);
};
// Fun
window.onload = () => {
  textListener();
};

// Variáveis necessárias para o funcionamento do código;
const textInput = document.querySelector('#text-input');
const fileInput = document.querySelector('#meme-insert');
const memeContainer = document.querySelector('#meme-image-container');
const memeImg = document.querySelector('#meme-image');
// Função handler dos botões elementais;
const fireHandler = () => {
  memeContainer.style.border = '3px dashed rgb(255, 0, 0)';
};
const waterHandler = () => {
  memeContainer.style.border = '5px double rgb(0, 0, 255)';
};
const earthHandler = () => {
  memeContainer.style.border = '6px groove rgb(0, 128, 0)';
};
// Função handler das imagens preset;
const presetHandler = (target) => {
  const origin = target;
  memeImg.src = origin.src;
};
// Listener das imagens preset:
const presetListener = () => {
  const presetClasses = ['meme-1', 'meme-2', 'meme-3', 'meme-4'];
  for (let i = 0; i < presetClasses.length; i += 1) {
    const newTarget = document.querySelector(`#${presetClasses[i]}`);
    newTarget.addEventListener('click', (e) => presetHandler(e.target));
  }
};
// Listener dos botões:
const elementalListener = () => {
  const fireBttn = document.querySelector('#fire');
  const waterBttn = document.querySelector('#water');
  const earthBttn = document.querySelector('#earth');
  fireBttn.addEventListener('click', fireHandler);
  waterBttn.addEventListener('click', waterHandler);
  earthBttn.addEventListener('click', earthHandler);
};
// Função handler do listener do text input;
const textHandler = () => {
  const memeText = document.querySelector('#meme-text');
  const newText = textInput.value;
  memeText.innerText = `${newText}`;
};
// Função handler do file input;
const fileHandler = () => {
  const newImg = fileInput.files[0]; // ENcontrado na documentação de createObjectURL;
  memeImg.src = URL.createObjectURL(newImg); // Método cujo funcionamento não foi 100% compreendido;
  // documentação em: https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL/ ;
};
// Listener dos inputs;
const inputListener = () => {
  textInput.addEventListener('input', textHandler);
  fileInput.addEventListener('change', fileHandler);
};
// Listener do carregamento da página;
window.onload = () => {
  inputListener();
  elementalListener();
  presetListener();
};

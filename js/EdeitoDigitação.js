const botao = document.getElementById('saibamais');
const lista = document.getElementById('numeros_em_destaque');
const itens = document.querySelectorAll('.texto');

botao.addEventListener('click', () => {
  lista.classList.toggle('hidden');
  lista.classList.toggle('visible');

  itens.forEach((item, index) => {
    let i = 0;
    const textContent = item.textContent;
    item.textContent = '';
    const typingInterval = setInterval(() => {
      item.textContent += textContent[i];
      i++;
      if (i === textContent.length) {
        clearInterval(typingInterval);
      }
    }, 50); // Ajuste o intervalo para controlar a velocidade da digitação
  });
});
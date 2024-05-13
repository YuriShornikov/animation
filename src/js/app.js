const btn = document.querySelector('.btn');
const block = document.querySelector('.block');

btn.addEventListener('click', () => {
  if (block.style.maxHeight) {
    
    block.style.maxHeight = null;
    
    // Убираем block по таймингу
    setTimeout(() => {
      if (!block.style.maxHeight) {
        block.style.display = 'none';
      }
    }, 500);
  } else {
    block.style.display = 'block';
    block.style.maxHeight = block.scrollHeight + "px";
  }
})

// chat

const circle = document.querySelector('.circle');
const chat = document.querySelector('.chat');
const closeBtn = document.querySelector('.close');

circle.addEventListener('click', () => {
  circle.style.transform = 'scale(0)';
  circle.style.opacity = '0';

  setTimeout(() => {
      chat.classList.remove('hidden');
  }, 300);

});

closeBtn.addEventListener('click', () => {
  chat.classList.add('hidden');
  circle.style.transform = 'scale(1)';
  circle.style.opacity = '1';
});
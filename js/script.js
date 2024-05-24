const slideGroups = document.querySelectorAll('.slide-group');

  slideGroups.forEach((slideGroup) => {
    const slides = slideGroup.querySelectorAll('.slides');
    const dotsContainer = slideGroup.querySelector('.nav-dots');
    let currentIndex = 0;
    const slidesLength = slides[0].children.length;
  
    function showSlide(index) {
      slides.forEach(slide => {
        slide.style.transform = `translateX(-${index * 100}%)`;
      });
      updateDots(index, dotsContainer);
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slidesLength;
      showSlide(currentIndex);
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slidesLength) % slidesLength;
      showSlide(currentIndex);
    }
  
    function updateDots(index, container) {
      const dots = container.querySelectorAll('.nav-dot');
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
        dot.classList.toggle('black-dot', i === index);
      });
    }
  
    for (let i = 0; i < slidesLength; i++) {
      const dot = document.createElement('div');
      dot.classList.add('nav-dot');
      dotsContainer.appendChild(dot);
      dot.addEventListener('click', () => {
        showSlide(i);
        currentIndex = i;
      });
    }
  
    const nextButton = slideGroup.querySelector('.next');
    const prevButton = slideGroup.querySelector('.prev');
  
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
  
    // Adicionei clearInterval para evitar múltiplas chamadas de setInterval
    let intervalId = setInterval(nextSlide, 3000);
  
    // Pare o intervalo quando o mouse estiver sobre os slides
    slides.forEach(slide => {
      slide.addEventListener('mouseenter', () => {
        clearInterval(intervalId);
      });
      slide.addEventListener('mouseleave', () => {
        intervalId = setInterval(nextSlide, 3000);
      });
    });
  
    showSlide(currentIndex);
  });

  //Menu celular

  function clickMenu() {
    var itens = document.getElementById('itens');
    var burguerIcon = document.getElementById('burguer');
    var closeIcon = document.getElementById('closeIcon');

    if (itens.style.display === 'block') {
        itens.style.display = 'none';
        burguerIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    } else {
        itens.style.display = 'block';
        burguerIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    }
}

function closeMenu() {
    var itens = document.getElementById('itens');
    var burguerIcon = document.getElementById('burguer');
    var closeIcon = document.getElementById('closeIcon');

    itens.style.display = 'none';
    burguerIcon.style.display = 'block';
    closeIcon.style.display = 'none';
}

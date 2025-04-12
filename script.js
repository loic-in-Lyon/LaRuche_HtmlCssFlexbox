// toggle flex direction
document.addEventListener('DOMContentLoaded', () => {
  const toggleButtons = document.querySelectorAll('.flex-direction-toggle');

  toggleButtons.forEach(toggleButton => {
    toggleButton.addEventListener('click', () => {
      const parent = toggleButton.parentElement;

      if (parent.style.flexDirection === 'column') {
        parent.style.flexDirection = 'row';
        toggleButton.textContent = 'Row';
      } else {
        parent.style.flexDirection = 'column';
        toggleButton.textContent = 'Column';
      }
    });
  });
});


// toggle borders
document.addEventListener('DOMContentLoaded', () => {
  const toggleBordersButton = document.querySelector('.toggle-borders');

  toggleBordersButton.addEventListener('click', () => {
      document.body.classList.toggle('show-borders');
  });
});

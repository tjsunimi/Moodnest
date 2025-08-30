const buttons = document.querySelectorAll('.filter-buttons button');
const cards = document.querySelectorAll('.card');





buttons.forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.filter-buttons button.active').classList.remove('active');
        button.classList.add('active');

        const category = button.dataset.category;

        cards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});




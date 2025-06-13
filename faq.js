document.addEventListener('DOMContentLoaded', function () {
  const questions = document.querySelectorAll('.faq__question');
  const answerBox = document.querySelector('.faq__answer');
  const title = answerBox.querySelector('h3');
  const lines = answerBox.querySelector('.faq__lines');
  const answerText = answerBox.querySelectorAll('p');

  const answers = [
    {
      title: 'Что нужно, чтобы начать работу с future technologies company (ftc)?',
      text: [
        'Для начала работы необходимо пройти регистрацию на официальном сайте компании и пополнить баланс личного кабинета.',
        'Затем вы можете выбрать инвестиционный план и начать зарабатывать.'
      ]
    },
    {
      title: 'Могу ли я не заработать, инвестируя с future technologies company (ftc)?',
      text: [
        'Компания гарантирует стабильную доходность в рамках выбранного плана.',
        'Однако, как и в любом инвестиционном проекте, существует определённый уровень риска.'
      ]
    },
    {
      title: 'Какая минимальная и максимальная сумма депозита?',
      text: [
        'Минимальный размер депозита – <span class="highlight">100 рублей</span>.',
        'Максимальный размер депозита – <span class="highlight">80 000 000 рублей</span>.'
      ]
    }
  ];

  questions.forEach((question, index) => {
    question.addEventListener('click', () => {
      questions.forEach(q => q.classList.remove('active'));
      question.classList.add('active');

      title.innerHTML = answers[index].title;
      answerText[0].innerHTML = answers[index].text[0];
      answerText[1].innerHTML = answers[index].text[1];
    });
  });
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


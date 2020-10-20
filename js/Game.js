class Game {

  constructor(container, icons) {

    this.icons = icons;

    this.title = document.createElement('h3');
    this.title.innerText = 'Make our choice';
    container.appendChild(this.title);

    icons.forEach((icon, hand) => {
      const button = document.createElement('button');
      button.innerText = icon;
      container.appendChild(button);
      button.onclick = () => this.play(hand);
    })
  }

  play(hand) {
    const computer = getRandomHand();
    const winner = getWinner(hand, computer);
    const text = `You picked ${this.icons[hand]}, computer picked ${this.icons[computer]}`

    if (winner === hand) {
      this.title.innerText = `${text} YOU WIN! 😀`;
    } else if (winner === computer) {
      this.title.innerText = `${text} you lose! 😥`;
    } else {
      this.title.innerText = `${text} no winner 😕`;
    }
  }

}
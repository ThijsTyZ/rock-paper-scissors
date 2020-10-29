const rock = 0;
const paper = 1;
const scissors = 2;

function getWinner(hand1, hand2) {
  if (hand1 === hand2) return undefined;

  switch (hand1) {
    case rock: {
      return hand2 === scissors ? hand1 : hand2;
    }
    case paper: {
      return hand2 === rock ? hand1 : hand2;
    }
    case scissors: {
      return hand2 === paper ? hand1 : hand2;
    }
    default: {
      throw new Error(`Invalid value for hand1 '${hand1}'`);
    }
  }
}

function getRandomHand() {
  return Math.floor(Math.random() * 3);
}

/**
 * Test our code
 */
console.assert(getWinner(rock, rock) === undefined);
console.assert(getWinner(rock, paper) === paper);
console.assert(getWinner(rock, scissors) === rock);
console.assert(getWinner(paper, rock) === paper);
console.assert(getWinner(paper, paper) === undefined);
console.assert(getWinner(paper, scissors) === scissors);
console.assert(getWinner(scissors, rock) === rock);
console.assert(getWinner(scissors, paper) === scissors);
console.assert(getWinner(scissors, scissors) === undefined);

for (let i = 0; i < 100; i++) {
  const hand = getRandomHand();
  console.assert(hand === rock || hand === paper || hand === scissors);
}
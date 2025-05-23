const loveLetters = [
  "I love you more than words can describe.",
  "Even though we're far apart, my love for you is always near.",
  "Every day with you in my life is a gift.",
  "You're the first person I think of when I wake up and the last before I sleep.",
  "I can’t wait for the day I get to hold you again.",
  "Your smile is my favorite sunshine.",
  "No distance can stop this love we share.",
  "You're my everything. Always have been, always will be.",
  "You're my everything my baby, never forget that",
  "Every letter here is a piece of my heart — just for you."
];

let index = 0;

function showNextLetter() {
  document.getElementById("letter").textContent = loveLetters[index];
  index = (index + 1) % loveLetters.length;
}

// Show the first letter on load
showNextLetter();

const adjectives = [
  "awful",
  "boring",
  "cheap",
  "creepy",
  "cruel",
  "dark",
  "depressing",
  "disgusting",
  "dull",
  "bloody",
  "evil",
  "fragile",
  "finger-licking",
  "harsh",
  "horrible",
  "impotent",
  "insane",
  "irritating",
  "lazy",
  "salty",
  "prickly",
  "mean",
  "miserable",
  "mediocre",
  "noisy",
  "overpriced",
  "pathetic",
  "picky",
  "puny",
  "rude",
  "selfish",
  "shallow",
  "stupid",
  "tacky",
  "buttery",
  "ugly",
  "unpleasant",
  "rock-hard",
  "delicious",
  "hairy",
  "wretched",
  "busty",
];

const nouns = [
  "apples",
  "bananas",
  "chairs",
  "tables",
  "dogs",
  "cats",
  "trees",
  "fisting",
  "books",
  "geese",
  "pencils",
  "yo mama",
  "scissors",
  "cups",
  "plates",
  "forks",
  "knives",
  "spoons",
  "beds",
  "Taylor Swift fans",
  "doors",
  "walls",
  "floors",
  "ceilings",
  "keys",
  "locks",
  "the Boomers",
  "fans",
  "doorknobs",
  "windowpanes",
  "doorframes",
  "chair legs",
  "table legs",
  "tabletops",
  "chair seats",
  "light switches",
  "fan blades",
  "keyholes",
  "lock mechanisms",
  "ceiling lights",
  "floor tiles",
  "doorknob stems",
  "window latches",
  "window sills",
  "window frames",
  "tablecloths",
  "chair cushions",
  "bedsheets",
];

  // Select the button and phrase container
  const generateButton = document.getElementById("generateButton");
  const generatedPhraseElement = document.getElementById("generatedPhrase");



// Your cheesyYoutubeTitle function
const cheesyYoutubeTitle = () => {
    let i = Math.floor(Math.random() * adjectives.length);
    let j = Math.floor(Math.random() * nouns.length);
    return `The ${adjectives[i]} TRUTH about ${nouns[j]}.`;
  };

  
  
  // Attach event listener to the button
  generateButton.addEventListener("click", () => {
    // Generate the title
    const cheesyTitle = cheesyYoutubeTitle();
    const h2Element = document.getElementById("YTtitle");
  h2Element.textContent = cheesyTitle;
  });
  
export function getTheLogestWord(log) {
  const mySentence =
    'Be the change and the change you wish to see in the world and the world';
  log(mySentence);
  const words = mySentence.split(' ');
  log(words);
  const lengthOfEachWord = words.map((item) => item.length);
  log('Length of each word');
  log(lengthOfEachWord);
  const maxValue = Math.max(...lengthOfEachWord);
  const indexOfMax = lengthOfEachWord.indexOf(Math.max(...lengthOfEachWord));
  log(indexOfMax);
  log(words[indexOfMax]);
}

export function getTheLogestWordWithEasy(log) {
  const mySentence =
    'Be the change and the change you wish to see in the world';
  log(mySentence);
  const words = mySentence.split(' ');
  log(words);
  const wordCounts = countInstances(words);
  log(wordCounts);
}

function countInstances(words) {
  const accumulator = {};
  for (let word of words) {
    if (accumulator[word]) {
      accumulator[word]++;
    } else {
      accumulator[word] = 1;
    }
  }
  return accumulator;
}

//accumulator must be a dictionary
function countInstance(accumulator, word) {
  if (accumulator[word]) {
    accumulator[word]++;
  } else {
    accumulator[word] = 1;
  }
  return accumulator;
}

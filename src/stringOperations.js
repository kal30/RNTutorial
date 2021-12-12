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
  //log(words);
  let wordCounts = countInstancesReduce(words);
  reportWordsLoopSorted(wordCounts, log);
}

function countInstancesLoop(words) {
  let accumulator = {};
  for (let word of words) {
    accumulator = countInstance(accumulator, word);
  }
  return accumulator;
}
function countInstancesReduce(words, index) {
  const counts = words.reduce(countInstance, {});
  return new Map(Object.entries(counts));
}

//accumulator must be a dictionary
function countInstance(accumulator, word, index) {
  if (accumulator[word]) {
    accumulator[word].count++;
    accumulator[word].index.push(index);
  } else {
    accumulator[word] = {
      index: [index],
      count: 1,
    };
  }
  return accumulator;
}

// Same results different approach

function reportWords(wordCounts, log) {
  const values = wordCounts.keys().map((key) => {
    log('Word ' + key + ':' + wordCounts[key].count);
  });
}

function reportWordsLoopSorted(wordCounts, log) {
  const entries = [...wordCounts.entries()];
  const entriesSorted = entries.sort((a, b) => b[1].count - a[1].count);
  for (let [k, v] of entriesSorted) {
    log('Word ' + k + ':' + v.count);
  }
}

export function reverseAWord(log) {
  const myWord = 'Change';
  const myWordToArray = [...myWord];
  log(myWordToArray);
  log(myWordToArray.reverse().join(''));
}

export function reverseASentance(log) {
  const mySentence =
    'Be the change and the change you wish to see in the world';
  const sentenceToArray = mySentence.split(' ');
  log(sentenceToArray.reverse().join(' '));
}

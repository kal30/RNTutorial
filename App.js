import React from 'react';
import { test_scope_bad } from './src/scope_bad';
import { test_for_of } from './src/iterables';
import { getEven, getGreaterThen90 } from './src/filter';
import {
  getTheLogestWord,
  getTheLogestWordWithEasy,
  reverseAWord,
  reverseASentance,
} from './src/stringOperations';
import { test_sort_map } from './src/mapsort';

import ButtonList from './src/ButtonList';

function App() {
  const setOfFunctions = [
    test_scope_bad,
    test_for_of,
    getEven,
    getGreaterThen90,
    getTheLogestWord,
    getTheLogestWordWithEasy,
    reverseAWord,
    reverseASentance,
    test_sort_map,
  ];
  return <ButtonList setOfFunctions={setOfFunctions} />;
}

export default App;

import React from 'react';
import {test_scope_bad} from './src/scope_bad';
import {test_for_of} from './src/iterables';

import ButtonList from './src/ButtonList';

function App() {
  const setOfFunctions = [test_scope_bad, test_for_of];
  return <ButtonList setOfFunctions={setOfFunctions} />;
}

export default App;

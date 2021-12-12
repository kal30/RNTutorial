// assigning an array and looping through it
export function test_for_of(log) {
  const birds = ['Parrot', 'Falcon', 'Owl'];
  log('Declare array of birds');
  log(birds);
  log('for let bird of birds');
  for (let bird of birds) {
    log(bird);
  }
}

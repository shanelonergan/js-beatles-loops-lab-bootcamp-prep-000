var whoPlaysWhat = [];

var musicians = [
  'John Lennon',
  'Paul McCartney',
  'George Harrison',
  'Ringo Starr',
];

var instuments = [
  'Guitar',
  'Bass Guitar',
  'Lead Guitar',
  'Drums',
];

function theBeatlesPlay(musicians, instruments) {
  for (var i = 0; i < 4; i++) {
    whoPlaysWhat.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return whoPlaysWhat;
}

function johnLennonFacts(array) {
  var i = -1;
  var excl = '!!!';
  function incrementVariable() {
    i = i + 1;
    return i;
  }

  while (incrementVariable() < 4) {
    array[i] = (array[i] + excl);
  }

  return array;
}

johnLennonFacts(facts);


//function iLoveTheBeatles(num) {//

//}//

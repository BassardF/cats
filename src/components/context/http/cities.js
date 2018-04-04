const MOQ = [
  'Wellington, WG, New Zealand',
  'Wellington Point, QL, Australia',
  'Wellingborough, EN, United Kingdom',
  'Wellington, CO, United States'
]

export async function fetchCities (firstCharacters) {
  if (!firstCharacters || firstCharacters.length < 3) return [];
  // else return fetch(`http://autocompletecity.geobytes.com/AutoCompleteCity?callback=?&sort=size&q=${firstCharacters}`)
  else return MOQ;
}

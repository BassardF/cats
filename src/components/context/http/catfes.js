import db from '../firebase/firebaseInit';

export async function fetchCatfes (country, city) {
  console.log("fetchCatfes");
  let cafes = [];
  const querySnapshot = await db.collection(`countries/${country}/cities/${city}/catcafes`).get();
  querySnapshot.forEach((doc) => {
    cafes.push({
      ...doc.data(),
      key: doc.id
    });
  });
  return cafes;
}

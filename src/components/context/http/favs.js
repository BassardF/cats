import db from '../firebase/firebaseInit';

export async function fetchFavs () {
  console.log("fetchFavs");
  let cafes = [];
  const querySnapshot = await db.collection(`fav`).get();
  querySnapshot.forEach((doc) => {
    cafes.push({
      ...doc.data(),
      key: doc.id
    });
  });
  return cafes;
}

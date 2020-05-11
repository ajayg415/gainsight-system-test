export const fetchAllData = async () => {
  //console.log(process.env.GET_ALL_GAMES)
  let resp = await fetch('http://starlord.hackerearth.com/gamesarena');
  return await resp.json()
};


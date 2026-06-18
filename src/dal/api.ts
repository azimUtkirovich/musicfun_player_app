const apiKey = '5d8992fa-890c-4ea6-bcd3-9fd6fe80fae4'
const headers = {"api-key": apiKey}

export const getTrack = (trackId: string) => {
  return fetch(
    "https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" + trackId,
    {
      headers: headers,
    },
  ).then((res) => res.json());
};

export const getTracks =()=> {
     return fetch(
      "https://musicfun.it-incubator.app/api/1.0/playlists/tracks?pageSize=5",
      {
        headers: headers,
      },
    )
      .then((res) => res.json())
}

const apiKey = import.meta.env.VITE_API_KEY;
const headers: Record<string, string> = apiKey ? { "api-key": apiKey } : {};

if (apiKey) {
  headers['api-key'] = apiKey;
}

export const getTrack = (trackId: string) => {
  return fetch(
    "https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" + trackId,
    { headers: headers },
  ).then((res) => {
    if (!res.ok) throw new Error("Network response was not ok");
    return res.json();
  });
};

export const getTracks = () => {
  return fetch(
    "https://musicfun.it-incubator.app/api/1.0/playlists/tracks?pageSize=5",
    { headers: headers },
  ).then((res) => {
    if (!res.ok) throw new Error("Network response was not ok");
    return res.json();
  });
};

const apiKey = import.meta.env.VITE_API_KEY || "";
const headers = { "api-key": apiKey };

interface TrackResponse {
  id: string;
  title: string;
  [key: string]: unknown;
}

export const getTrack = (trackId: string): Promise<TrackResponse> => {
  return fetch(
    "https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" + trackId,
    {
      headers: headers,
    },
  ).then((res) => res.json());
};

export const getTracks = (): Promise<TrackResponse[]> => {
  return fetch(
    "https://musicfun.it-incubator.app/api/1.0/playlists/tracks?pageSize=5",
    {
      headers: headers,
    },
  ).then((res) => {
    if (!res.ok) throw new Error("Network response was not ok");
    return res.json();
  });
};

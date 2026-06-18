import { useEffect, useState, type CSSProperties } from "react";
import "./App.css";

type Attachment = {
  url: string;
};

type TrackAttributes = {
  title: string;
  attachments: Attachment[];
};

type Track = {
  id: string;
  attributes: TrackAttributes;
};

type TrackDetailAttributes = {
  title: string;
  lyrics: string;
  attachments: Attachment[];
};

type TrackDetailResource = {
  id: string;
  attributes: TrackDetailAttributes;
};

export function App() {
  const [tracks, setTracks] = useState<Track[] | null>(null);
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null);
  const [selectedTrack, setSelectedTrack] =
    useState<TrackDetailResource | null>(null);

  useEffect(() => {
    fetch(
      "https://musicfun.it-incubator.app/api/1.0/playlists/tracks?pageSize=5",
      {
        headers: {
          "api-key": "b6d2c657-1f5e-4ba8-9517-8f4c40370cef",
        },
      },
    )
      .then((res) => res.json())
      .then((json) => {
        setTracks(json.data);
      });
  }, []);

  const handleSelectTrack = (trackId: string) => {
    setSelectedTrackId(trackId);

    fetch(
      "https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" + trackId,
      {
        headers: {
          "api-key": "b6d2c657-1f5e-4ba8-9517-8f4c40370cef",
        },
      },
    )
      .then((res) => res.json())
      .then((json) => {
        setSelectedTrack(json.data);
      });
  };

  return (
    <>
      <h1>Musicfun Player</h1>
      {tracks === null && <span>Loading...</span>}
      {tracks?.length === 0 && <span>No Tracks</span>}
      <ul>
        {tracks?.map((track) => {
          const style: CSSProperties = {};
          if (track.id === selectedTrackId) {
            style.border = "1px solid orange";
          }
          const handleClick = () => {
            handleSelectTrack(track.id);
          };
          return (
            <li style={style} key={track.id}>
              <div onClick={handleClick}>{track.attributes.title}</div>
              <audio controls src={track.attributes.attachments[0].url}></audio>
            </li>
          );
        })}
      </ul>
      <hr />
      <h2>Track Details</h2>
      {!selectedTrackId && <span>No Selected Track</span>}
      {selectedTrackId && !selectedTrack && <span>Loading...</span>}
      {selectedTrack && (
        <div>
          <h4>{selectedTrack.attributes.title}</h4>
          <p>{selectedTrack.attributes.lyrics}</p>
        </div>
      )}
      {selectedTrackId &&
        selectedTrack &&
        selectedTrack.id !== selectedTrackId && <span>Loading...</span>}
    </>
  );
}

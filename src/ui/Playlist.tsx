import { useTracks } from "../bll/useTracks";
import { TrackItem } from "./TrackItem";
import styles from "./Playlist.module.css"

type Props = {
  selectedTrackId: string | null;
  onTrackSelect: (trackId: string) => void;
};

export function Playlist(props: Props) {
  const { tracks } = useTracks();

  return (
    <div>
      {tracks === null && <span>Loading...</span>}
      {tracks?.length === 0 && <span>No Tracks</span>}
      <ul className={styles.tracks}>
        {tracks?.map((track) => {
          return (
            <TrackItem
              key={track.id}
              track={track}
              isSelected={track.id === props.selectedTrackId}
              onTrackSelect={props.onTrackSelect}
            />
          );
        })}
      </ul>
    </div>
  );
}

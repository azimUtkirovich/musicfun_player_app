import { clsx } from "clsx";
import type { Track } from "../dal/types";
import styles from "./TrackItem.module.css";

type TrackItemProps = {
  track: Track;
  isSelected: boolean;
  onTrackSelect: (trackId: string) => void;
};

export function TrackItem(props: TrackItemProps) {
  const classNames = clsx({
    [styles.track]: true,
    [styles.selected]: props.isSelected,
  });

  const handleClick = () => {
    props.onTrackSelect(props.track.id);
  };
  return (
    <li className={classNames}>
      <div onClick={handleClick}>{props.track.attributes.title}</div>
      <audio controls src={props.track.attributes.attachments[0].url}></audio>
    </li>
  );
}

import { PageTitle } from "./PageTitle";
import { Playlist } from "./Playlist";
import { TrackDetails } from "./TrackDetails";
import { useTrackSelection } from "../bll/useTrackSelection";

export function MainPage() {
  const { handleTrackSelect, selectedTrackId } = useTrackSelection();

  return (
    <div>
      <PageTitle value={"Musicfun Player"} />
      <Playlist
        selectedTrackId={selectedTrackId}
        onTrackSelect={handleTrackSelect}
      />
      <hr />
      <TrackDetails selectedTrackId={selectedTrackId} />
    </div>
  );
}

import { useEffect, useState } from "react";
import type { TrackDetailResource } from "../dal/types";
import { getTrack } from "../dal/api";

export function useTrack(selectedTrackId: string | null) {
  const [selectedTrack, setSelectedTrack] =
    useState<TrackDetailResource | null>(null);

  useEffect(() => {
    if (!selectedTrackId) return;

    getTrack(selectedTrackId).then((json) => {
      setSelectedTrack(json.data);
    });
  }, [selectedTrackId]);
  return { selectedTrack };
}

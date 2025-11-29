import { useEffect, useState } from "react";
import { getTrack, type GetTrackDetailsOutputData } from "../dal/api";

export function useTrackDetail(trackId: string | null) {
  const [selectedTrack, setSelectedTrack] =
    useState<GetTrackDetailsOutputData | null>(null);

  useEffect(() => {
    if (!trackId) {
      setSelectedTrack(null);
      return;
    }

    getTrack(trackId).then((json) => {
      setSelectedTrack(json.data);
    });
  }, [trackId]);

  return { selectedTrack };
}

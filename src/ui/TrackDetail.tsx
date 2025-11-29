import { useTrackDetail } from "../bll/useTrackDetail";

type Props = {
  trackId: string | null;
};

export function TrackDetail({ trackId }: Readonly<Props>) {

  const { selectedTrack } = useTrackDetail(trackId)

  return (
    <div>
      <h2>Details</h2>
      {!selectedTrack && !trackId && "Track is not selected."}
      {!selectedTrack && trackId && "Loading..."}
      {selectedTrack && trackId && trackId !== selectedTrack.id && "Loading..."}
      {selectedTrack && (
        <div>
          <h3>{selectedTrack.attributes.title}</h3>
          <h4>Lyrics</h4>
          <p>{selectedTrack.attributes.lyrics ?? "no lyrics"}</p>
        </div>
      )}
    </div>
  );
}

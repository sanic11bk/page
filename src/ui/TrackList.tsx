import { useTracks } from "../bll/useTracks";
import { PageTitle } from "./PageTitle";
import { TrackItem } from "./TrackItem";

type Props = {
  selectedTrackId: string | null;
  onTrackSelect: (trackId: string | null) => void;
};

export function TrackList({ selectedTrackId, onTrackSelect }: Readonly<Props>) {

  const { tracks } = useTracks()

  if (tracks === null) {
    return (
      <div>
        <PageTitle />
        <span>loading...</span>
      </div>
    );
  }

  if (tracks.length === 0) {
    return (
      <div>
        <PageTitle />
        <span>No tracks</span>
      </div>
    );
  }

  const handleResetClick = () => {
    onTrackSelect(null);
  };

  const handleClick = (trackId: string) => {
    onTrackSelect(trackId);
  };

  return (
    <div>
      <button type="button" onClick={handleResetClick}>
        reset
      </button>
      <hr />
      <ul>
        {tracks.map((track) => {
          return (
            <TrackItem
              key={track.id}
              track={track}
              isSelected={track.id === selectedTrackId}
              onSelect={handleClick}
            />
          );
        })}
      </ul>
    </div>
  );
}

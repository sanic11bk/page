export type GetTrackDetailsOutputData = {
  id: string;
  attributes: {
    title: string;
    lyrics: string | null;
  };
};

type Attachments = {
  url: string;
};

type TrackListItemOutputAttributes = {
  title: string;
  attachments: Array<Attachments>;
};

export type TrackListItemOutput = {
  id: string;
  attributes: TrackListItemOutputAttributes;
};

type GetTrackListOutput = {
  data: Array<TrackListItemOutput>
}

type GetTrackDetailsOutput = {
  data: GetTrackDetailsOutputData
}

const prepareHeaders = () => {
  if(!import.meta.env.VITE_API_KEY) return undefined;
  return {
    "api-key": import.meta.env.VITE_API_KEY
  }
}

export const getTrack = (trackId: string) => {
  const promise: Promise<GetTrackDetailsOutput> = fetch(
    "https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" + trackId,
    {
      headers: prepareHeaders(),
    }
  ).then((res) => res.json());

  return promise;
};

export const getTracks = () => {
  const promise: Promise<GetTrackListOutput> = fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks", {
    headers: prepareHeaders(),
  }).then((res) => res.json());

  return promise;
};

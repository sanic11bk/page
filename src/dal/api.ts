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

export const getTrack = (trackId: string) => {
  const promise: Promise<GetTrackDetailsOutput> = fetch(
    "https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" + trackId,
    {
      headers: { "api-key": "31c64668-dc79-4c42-9710-d78c061005b7" },
    }
  ).then((res) => res.json());

  return promise;
};

export const getTracks = () => {
  const promise: Promise<GetTrackListOutput> = fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks", {
    headers: {
      "api-key": "31c64668-dc79-4c42-9710-d78c061005b7",
    },
  }).then((res) => res.json());

  return promise;
};

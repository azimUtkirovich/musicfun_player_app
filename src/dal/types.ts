export type Attachment = {
  url: string;
};

export type TrackAttributes = {
  title: string;
  attachments: Attachment[];
};

export type Track = {
  id: string;
  attributes: TrackAttributes;
};

export type TrackDetailAttributes = {
  title: string;
  lyrics: string;
  attachments: Attachment[];
};

export type TrackDetailResource = {
  id: string;
  attributes: TrackDetailAttributes;
};
export type createShortUrlType = {
  originalUrl: string;
  userId: string;
  shortCode: string;
};

export type updateShortUrlType = {
  updatedOriginalUrl: string;
};

export type shortUrlType = {
  id: string;
  originalUrl: string;
  userId: string;
  shortCode: string;
  createdAt: Date;
  updatedAt: Date;
};

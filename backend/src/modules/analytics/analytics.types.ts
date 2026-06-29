export type creteAnalyticsType = {
  shortUrlId: string;
  clickedAt: Date;
  ipAddress?: string;
  userAgent?: string;
  referrer?: string;
  country?: string;
};

export type RecordClickInputType = {
  shortUrlId: string;
  ipAddress?: string;
  userAgent?: string;
  referrer?: string;
};

export type RequestMetaDataType = {
  ipAddress: string;
  userAgent: string;
  referrer: string;
};

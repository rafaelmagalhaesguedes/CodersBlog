let cache: any = null;
let cacheTimestamp: number = 0;
const CACHE_VALIDITY = 5 * 60 * 1000; // Cache is valid for 5 minutes

export const getCache = () => {
  const currentTime = Date.now();

  // If cache is valid and has data, return it
  if (cache && (currentTime - cacheTimestamp) < CACHE_VALIDITY) {
    return cache;
  }

  // If cache is not valid, return null
  return null;
};

export const setCache = (data: any) => {
  // Update cache and timestamp
  cache = data;
  cacheTimestamp = Date.now();
};

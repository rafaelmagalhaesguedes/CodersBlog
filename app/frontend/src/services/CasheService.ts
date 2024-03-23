let cache: any = null;
let cacheTimestamp: number = 0;
const CACHE_VALIDITY = 5 * 60 * 1000; // Cache is valid for 5 minutes
const denyList: string[] = []; // List of denied tokens

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

export const clearCache = () => {
  cache = null;
  cacheTimestamp = 0;
};

export const addToDenyList = (token: string) => {
  denyList.push(token);
};

export const isTokenDenied = (token: string) => {
  return denyList.includes(token);
};

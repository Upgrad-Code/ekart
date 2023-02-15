import { TIMEOUT_SEC } from './config';

const timeout = (sec) => {
  return new Promise((_, reject) => {
    return setTimeout(() => {
      return reject(
        new Error(`Request took too long! Timeout after ${sec} second`)
      );
    }, sec * 1000);
  });
};

export const AJAX = async (
  url,
  uploadData = undefined,
  errMsg = 'Something went wrong.'
) => {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);

    const res = await Promise.race([timeout(TIMEOUT_SEC), fetchPro]);
    if (!res.ok) {
      throw new Error(`${errMsg} ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};

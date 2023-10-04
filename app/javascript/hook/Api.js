/**
 * Object Request Header
 */
export const requestHeader = {
  Accept: 'application/json',
  'Cache-Control': 'no-cache',
  'Content-Type': 'application/json',
};

/**
   *
   * @param {string} url
   * @param {string, [GET, POST, PATCH, PUT...]} method
   * @param {payload} payload (body)
   * @param {boolean} text
   * @param {boolean} form
   * @returns Response Data;
   */
let API_USER_URL = 'http://127.0.0.1:3000';

if (process.env.NODE_ENV === 'production') {
  API_USER_URL = 'https://reserve-lectures.onrender.com';
}

export async function request(url, method, payload, text, form) {
  if (form === true) {
    requestHeader['Content-Type'] = 'multipart/form-data';
  } else {
    requestHeader['Content-Type'] = 'application/json';
  }

  if (method === 'GET') {
    return fetch(API_USER_URL + url, {
      method,
      headers: { ...requestHeader }, // Clone the headers object
    })
      .then((res) => {
        if (text === true) {
          return res.text();
        }
        return res.json();
      })
      .catch((err) => {
        throw new Error(err);
      });
  }
  return fetch(API_USER_URL + url, {
    method,
    headers: { ...requestHeader }, // Clone the headers object
    body: form === true ? payload : JSON.stringify(payload),
  })
    .then((res) => {
      if (text === true) {
        return res.text();
      }
      return res.json();
    })
    .catch((err) => {
      throw new Error(err);
    });
}

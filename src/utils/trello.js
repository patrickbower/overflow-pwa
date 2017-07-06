import config from "./config";

export const get = {
  all: `/1/boards/${config.boardId}/lists?`
};

export function query(action) {
  return `${config.url}${action}&key=${config.key}&token=${config.token}`;
}

export function request(url) {
  return fetch(query(url))
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(function(err) {
      throw new Error(err);
    });
}

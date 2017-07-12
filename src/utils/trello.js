import config from './config';

export function getLists() {
  return `/1/boards/${config.boardId}/lists?`;
}

export function getCards(listId) {
  return `/1/lists/${listId}/cards?`;
}

export function putCard(listId, title) {
  return `/1/lists/${listId}/cards?name=${title}`;
}

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

import config from './config';

export function query(action) {
  return `${config.url}${action}&key=${config.key}&token=${config.token}`;
}

export function getLists() {
  return `/1/boards/${config.boardId}/lists?`;
}

export function getCards(listId) {
  return `/1/lists/${listId}/cards?`;
}

export function putCard(listId, title) {
  return `/1/lists/${listId}/cards?name=${title}`;
}

export function deleteCard(cardId) {
  return `/1/cards/${cardId}?`;
}

export function compleate(cardId) {
  return `/1/cards/${cardId}/labels?color=green&name=done`;
}

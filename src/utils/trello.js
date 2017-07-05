import config from "./config";

export function query(action) {
  return `${config.url}${action}&key=${config.key}&token=${config.token}`;
}

export function request(url, callBack) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      callBack(data)
    })
    .catch(function(err) {
      throw new Error(err);
    });
}

export function getAll() {
  return `/1/boards/${config.boardId}/lists?cards=open&card_fields=name&fields=name&card_fields=labels&fields=labels`;
}

export function getDateLastActivity(listId) {
  return `/1/lists/${listId}?fields=name&cards=open&card_fields=dateLastActivity`;
}

import * as trello from '../utils/trello';
import * as fetch from '../utils/fetch';

export function put(listId, title) {
  return fetch.request(fetch.constructor(trello.putCard(listId, title), 'POST'))
    .then(data => {
      const newCard = {};
      newCard[data.id] = {
        label: 'todo',
        name: data.name,
        id: data.id
      };
      return newCard;
    });
}

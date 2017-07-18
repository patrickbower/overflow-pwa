import * as trello from '../utils/trello';
import * as fetch from '../utils/fetch';

export function deleteMethod(cardId) {
  return fetch.request(fetch.constructor(trello.deleteCard(cardId), 'DELETE'))
    .then(data => {
      return true;
    });
}

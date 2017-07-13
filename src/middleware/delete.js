import * as trello from '../utils/trello';

export function remove(cardId) {
  return trello.remove(trello.deleteCard(cardId)).then(data => {
    return true;
  });
}

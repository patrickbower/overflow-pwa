import * as trello from '../utils/trello';

export function compleate(cardId) {
  return trello.post(trello.compleate(cardId)).then(data => {
    return true;
  });
}

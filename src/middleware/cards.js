import * as trello from '../utils/trello';

export function get(listId) {
  return trello.request(trello.getCards(listId)).then(data => {
    const cards = data.map(card => {
      return {
        name: card.name,
        label: card.labels.length > 0 ? card.labels[0].name : false
      };
    });
    return cards;
  });
}

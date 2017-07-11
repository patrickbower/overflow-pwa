import * as trello from '../utils/trello';

export function get(listId) {
  return trello.request(trello.getCards(listId)).then(cards => {
    const done = [];
    for (let card of cards) {
      if (card.labels.length > 0 && card.labels[0].name === 'done') {
        done.push(card.name);
      }
    }
    console.log(done);
    return done;
  });
}

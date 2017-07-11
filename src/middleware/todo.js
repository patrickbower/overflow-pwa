import * as cards from './cards';

export function get(listId) {
  // cards.get(listId).then(data => {
  //   const todos = data.filter(card => {
  //     return card.label === false;
  //   })
  //   return todos;
  // });
  console.log(cards.get(listId));
}

// import * as trello from '../utils/trello';
//
// export function get(listId) {
//   return trello.request(trello.getCards(listId)).then(data => {
//
//     const cards = data.map(card => {
//       return {
//         name: card.name,
//         label: card.labels.length > 0 ? card.labels[0].name : 'todo'
//       };
//     });
//
//     const todos = cards.filter(card => {
//       return card.label === 'todo';
//     })
//
//     return todos;
//   });
// }

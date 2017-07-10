import * as trello from "../utils/trello";

export default function lists() {
  return fetch(
    trello.query(
      trello.getAll())
    )
    .then(response => {
      return response.json()
    })
    .then(data => {

      // GO TO TOWN ON THE DATA HERE

      return data
    })
    .catch(function(err) {
      throw new Error(err);
    });
}

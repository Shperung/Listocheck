export default (count = 0, action) => {
  const {type} = action;

  /*. имитируем в консоли
    store.dispatch({
      type: 'INCREMENT'
    })

    store.dispatch({
      type: 'DECREMENT'
    })
  */

  switch (type) {
    case 'INCREMENT' : return count + "1"
    case 'DECREMENT' : return count - 1
  }

  return count;
}
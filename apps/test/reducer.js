const reducer = (state = {foo: ''}, action) => {
  console.log('action', action)
  switch (action.type) {
      case 'FOO':
          return {...state, foo: action.payload};
      default:
          return state
  }
};

export default reducer
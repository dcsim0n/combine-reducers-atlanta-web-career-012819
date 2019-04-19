import C from '../constants'
import {combineReducers} from 'redux';


const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer
})
export default rootReducer

function booksReducer(state = [],action){
  switch (action.type) {
    case C.ADD_BOOK:
      return [...state,action.book]
    case C.REMOVE_BOOK:
      return state.filter(book => book.id === action.id ? false : true)
    default:
      return state
  }
}

function authorsReducer(state=[], action) {
  switch (action.type) {
    case C.ADD_AUTHOR:
      return [...state, action.author]
    case C.REMOVE_AUTHOR:
      return state.filter(author=> author.id === action.id ? false : true)  
    default:
      return state
  }
}
// function bookApp(state = {
//   authors: [],
//   books: []
// }, action) {
//   let idx
//   switch (action.type) {

//     case C.ADD_BOOK:
//       return {
//         ...state,
//         books: [...state.books, action.book]
//       };

//     case C.REMOVE_BOOK:
//       idx = state.books.indexOf(action.id);
//       return {
//         ...state,
//         books: [
//           state.books.slice(0, idx),
//           state.books.slice(idx + 1),
//         ]
//       };

//     case C.ADD_AUTHOR:
//         return {
//           ...state,
//           authors: [...state.authors, action.author]
//         };

//     case C.REMOVE_AUTHOR:
//       idx = state.authors.indexOf(action.id);
//       return {
//         ...state,
//         authors: [
//           state.authors.slice(0, idx),
//           state.authors.slice(idx + 1)
//         ]
//       };

//     default:
//       return state;
//     }
// };

import { ADD_BOOK, FETCHED_BOOKS, FETCHING_BOOKS } from "../actions/books";

const defaultState = {
  favBook: { title: "Count" },
  books: [],
  isLoading: false
};

function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, books: [...state.books, action.payload] };
    case FETCHING_BOOKS:
      return { ...state, isLoading: true };
    case FETCHED_BOOKS:
      return { ...state, isLoading: false, books: action.payload };
    default:
      return state;
  }
}

export default rootReducer;

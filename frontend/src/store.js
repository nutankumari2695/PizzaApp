import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'react-thunk';
// import create from 'zustand';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllPizzasReducers } from './reducers/pizzaReducers';

const finalReducer = combineReducers({
    getAllPizzasReducers,
});

const initialState = {};

// Correctly compose enhancers with middleware
const composeEnhancers = composeWithDevTools(applyMiddleware(thunk));


const store = createStore(finalReducer, initialState, composeEnhancers);

export default store;












// const useStore = create((set) => ({
//     message: 'Hello from Zustand!',
//     updateMessage: (newMessage) => set({ message: newMessage }),
//   }));
  
//   export default useStore;














// import { combineReducers } from "redux";
// import { createStore, applyMiddleware } from "redux";
// // import thunk from 'react-thunk'; // Corrected import
// import { composeWithDevTools } from "redux-devtools-extension"; // Corrected capitalization
// import { getAllPizzasReducers } from "./reducers/pizzaReducers"; // Corrected import path

// const finalReducer = combineReducers({
//    getAllPizzasReducers // Object shorthand syntax
// });

// const initialState = {};

// // Correctly compose enhancers with middleware
// const composeEnhancers = composeWithDevTools(applyMiddleware());

// const store = createStore(finalReducer, initialState, composeEnhancers);

// export default store;


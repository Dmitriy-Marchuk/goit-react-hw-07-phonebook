import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { fetchContacts } from './contactsOperations';

const entities = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
});

export default combineReducers({
  entities,
  isLoading,
  error,
});

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: { entities: [], isLoading: false, error: null },
//   extraReducers: {
//     [fetchContacts.fulfilled]: (state, action) => {
//       return {
//         ...state,
//         entities: action.payload,
//       };
//     },
//     [fetchContacts.pending]: state => {
//       return { ...state, isLoading: true };
//     },
//     [fetchContacts.rejected]: state => {
//       return { ...state, isLoading: false };
//     },
//   },
// });

// export default contactsSlice.reducer;

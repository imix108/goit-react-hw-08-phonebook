import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  editContact,
  deleteContact,
} from './operations';

export const contactInitialState = {
  items: null,
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilledGetAllContacts = (state, { payload }) => {
  state.isLoading = false;
  state.items = payload;
};

const handleFulfilledAddContact = (state, { payload }) => {
  state.isLoading = false;
  state.items.push(payload);
};

const handleFulfilledEditContact = (state, { payload }) => {
  const editedContact = payload;
  const index = state.items.findIndex(
    contact => contact.id === editedContact.id
  );

  if (index !== -1) {
    state.items[index] = editedContact;
  }

  state.isLoading = false;
};

const handleFulfilledDeleteContact = (state, { payload }) => {
  const contactId = payload.id; 
  const index = state.items.findIndex(contact => contact.id === contactId);
  if (index !== -1) {
    state.isLoading = false;
    state.items.splice(index, 1);
  }
};



const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledGetAllContacts)
      .addCase(addContact.fulfilled, handleFulfilledAddContact)
      .addCase(editContact.fulfilled, handleFulfilledEditContact)
      .addCase(deleteContact.fulfilled, handleFulfilledDeleteContact)
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          handlePending(state);
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          handleRejected(state, action.payload);
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
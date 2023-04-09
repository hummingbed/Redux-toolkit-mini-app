import { createSlice } from '@reduxjs/toolkit';


const initialState = [
  { id: 1, name: 'john', email: 'john@gmail.com', },
  { id: 2, name: 'marc', email: 'marc@gmail.com', }
];


export const userSlice = createSlice({
  name: 'users',
  initialState,

  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const { id, name, email } = action.payload;
      const existingUser = state.find(user => user.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.email = email;
      }
    },
  }

});

export const { addUser, } = userSlice.actions;

// export const selectCount = (state) => state.coun.value;


export default userSlice.reducer;

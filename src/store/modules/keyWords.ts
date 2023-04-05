import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface initialStateType {
  searchKeyWord: string;
}

const initialState: initialStateType = {
  searchKeyWord: '',
};

const keyWordsState = createSlice({
  name: 'keywords',
  initialState,
  reducers: {
    changeSearchKeyWords(state, { payload }: PayloadAction<string>) {
      state.searchKeyWord = payload;
    },
  },
});

export const { changeSearchKeyWords } = keyWordsState.actions;
export default keyWordsState.reducer;

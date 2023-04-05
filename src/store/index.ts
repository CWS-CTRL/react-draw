import { configureStore } from '@reduxjs/toolkit';
import {
  useSelector,
  shallowEqual,
  useDispatch,
  TypedUseSelectorHook,
} from 'react-redux';

import keyWordsReducer from './modules/keyWords';

const store = configureStore({
  reducer: {
    keyWords: keyWordsReducer,
  },
});

type GetStateFnType = typeof store.getState;
type IRootState = ReturnType<GetStateFnType>;
type DispatchType = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
export const useAppDispatch: () => DispatchType = useDispatch;
export const shallowEqualApp = shallowEqual;

export default store;

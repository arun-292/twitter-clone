import { Instance, types } from 'mobx-state-tree';
import { createContext, useContext } from 'react';
import { auth } from './Auth';
import { tweets } from './Tweets';

const user = JSON.parse(localStorage.user || null);

const RootModel = types.model({
  auth,
  tweets,
});

const initialState = RootModel.create({
  auth: {
    token: localStorage.token || '',
    user: user,
  },
  tweets: {
    tweetList: [],
    loading: false,
    error: null,
  },
});

export const rootStore = initialState;

export type RootInstance = Instance<typeof RootModel>;
const RootStoreContext = createContext<null | RootInstance>(null);

export const MSTProvider = RootStoreContext.Provider;
export const useMst = () => {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider');
  }
  return store;
};

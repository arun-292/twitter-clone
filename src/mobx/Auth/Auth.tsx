import { types } from 'mobx-state-tree';

type Xuser = {
  userName: string;
  _id: string;
};

type UserDetails = {
  token: string;
  user: Xuser;
};

export const auth = types
  .model({
    token: types.string,
    user: types.maybeNull(
      types.model({
        userName: types.string,
        _id: types.string,
      }),
    ),
  })
  .actions((self) => ({
    setUser: (xUser: UserDetails) => {
      self.token = xUser.token;
      self.user = xUser.user;
    },
  }));

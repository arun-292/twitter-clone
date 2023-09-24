import { flow, types } from 'mobx-state-tree';
import { NODE_API } from '../../config/config';

export type TTweetBy = {
  _id: string;
  fullName: string;
  lower_userName: string;
};

export type TTweets = {
  _id: string;
  tweetBy: TTweetBy;
  tweetText: string;
  createdAt: string;
};

const TweetList = types.array(
  types.model({
    _id: types.string,
    tweetBy: types.model({
      _id: types.string,
      fullName: types.string,
      userName: types.string,
    }),
    tweetText: types.string,
    createdAt: types.string,
  }),
);

export const tweets = types
  .model({
    tweetList: TweetList,
    loading: types.boolean,
    error: types.maybeNull(types.string),
  })
  .actions((self) => ({
    fetchTweets: flow(function* () {
      try {
        self.loading = true;
        self.error = 'null';

        // Perform the network request
        const response = yield fetch(`${NODE_API}/tweets/getAll`);

        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }

        // Assuming the API returns JSON data
        const data = yield response.json();
        if (data.length) {
          self.tweetList = data
            .map((elem: TTweets) => {
              return {
                ...elem,
                tweetBy: {
                  ...elem?.tweetBy,
                  userName: elem?.tweetBy.lower_userName,
                },
              };
            })
            .sort((t1: TTweets, t2: TTweets) => {
              if (t1._id < t2._id) return 1;
              if (t1._id > t2._id) return -1;
            });
        }
        // Assuming the API returns an array of tweet data
        //self.tweetList = response.data;

        self.loading = false;
      } catch (error) {
        self.loading = false;
      }
    }),
  }));

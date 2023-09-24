import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import CustomTypography from '../CustomTypography/CustomTypography';
import { useMst } from '../../mobx/root';
import { observer } from 'mobx-react-lite';

const Tweets: React.FC = () => {
  const {
    tweets: { fetchTweets, tweetList },
  } = useMst();

  useEffect(() => {
    fetchTweets();
    setInterval(() => fetchTweets(), 10000);
  }, []);

  return [...tweetList, ...tweetList, ...tweetList].map((tweet) => {
    return (
      <React.Fragment key={tweet._id}>
        <Grid item xs={12} className="add-tweet-root-grid">
          <Grid item xs={12} container className="add-tweet-parent-grid">
            <Grid className="profile-img">
              <img
                src={'https://drive.google.com/thumbnail?id=1s2Jq8wLcL3bRVyuAbbLlDxWSnUT_RVwO'}
                alt="Profile"
                width={40}
              />
            </Grid>
            <Grid item className="add-tweet-sub-grid">
              <CustomTypography fontWeight={600}>{tweet.tweetBy.fullName} </CustomTypography>
              <CustomTypography className="tweet-message">{tweet.tweetText} </CustomTypography>
            </Grid>
          </Grid>
        </Grid>
        <Grid className="contentBorder2 bb" />
      </React.Fragment>
    );
  });
};

export default observer(Tweets);

import { Button, Grid, TextField } from '@material-ui/core';
import {
  AddPhotoAlternate,
  EmojiEmotionsOutlined,
  EventOutlined,
  GifOutlined,
  KeyboardArrowDownOutlined,
  LocationOnOutlined,
  PollOutlined,
  Public,
} from '@material-ui/icons';
import React, { useState } from 'react';
import { NODE_API } from '../../config/config';
import { useMst } from '../../mobx/root';
import Tweets from '../Tweets';

const Feed: React.FC = () => {
  const {
    auth: { user },
  } = useMst();

  const [isOptionsEnabled, setIsOptionsEnabled] = useState<boolean>(false);
  const [tweetText, setTweetText] = useState<string>('');

  const onTweetPost = () => {
    fetch(`${NODE_API}/tweets/create`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ tweetBy: user?._id, tweetText }),
    })
      .then(async (res) => {
        const data = await res.json();
        console.log('data = ', data);
        setTweetText('');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Grid className="contentBorder2 bb" />
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
            {isOptionsEnabled && (
              <Button className="assignment-button assignment-button-border">
                Everyone <KeyboardArrowDownOutlined />
              </Button>
            )}

            <TextField
              name="tweet"
              placeholder="What is happening?!"
              className="add-tweet"
              multiline
              InputProps={{ disableUnderline: true }}
              onFocus={() => setIsOptionsEnabled(true)}
              onChange={(e) => setTweetText(e.target.value)}
              value={tweetText}
            />
            {isOptionsEnabled && (
              <>
                <Button className="assignment-button public-button-border">
                  <Public width={15} /> Everyone can reply
                </Button>
                <Grid className="contentBorder2 bb" />
              </>
            )}
            <Grid item container justifyContent="space-between" className="action-items">
              <Grid item>
                <Button className="filter-buttons">
                  <AddPhotoAlternate />
                </Button>
                <Button className="filter-buttons">
                  <GifOutlined />
                </Button>
                <Button className="filter-buttons">
                  <PollOutlined />
                </Button>
                <Button className="filter-buttons">
                  <EmojiEmotionsOutlined />
                </Button>
                <Button className="filter-buttons">
                  <EventOutlined />
                </Button>
                <Button className="filter-buttons">
                  <LocationOnOutlined />
                </Button>
              </Grid>
              <Grid item>
                <Button className="post-button" onClick={onTweetPost}>
                  Post
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid className="contentBorder2 bb" />
      <Tweets />
    </>
  );
};

export default Feed;

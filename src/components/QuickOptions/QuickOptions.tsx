import { Button, Grid, TextField } from '@material-ui/core';
import React from 'react';
import CustomTypography from '../CustomTypography/CustomTypography';
import { MoreHorizRounded, SearchOutlined } from '@material-ui/icons';

const whatsHappening = [
  {
    header: 'Trending',
    name: 'Shubh',
    posts: '13.6K',
  },
  {
    header: 'Indian Premire League',
    name: '#MSDhoni',
    posts: '11.1K',
  },
  {
    header: 'Sports Trending',
    name: '#JioCinema',
    posts: '1547',
  },
  {
    header: 'Only on Twitter Trending',
    name: '#KaalaonHotstar',
    posts: '1856',
  },
  {
    header: 'Trending in india',
    name: '#शिवराज_का_परिवार',
    posts: '10.5K',
  },
];

const QuickOptions: React.FC = () => {
  return (
    <>
      <Grid item container className="quick-options-root">
        <TextField
          name="tweet"
          placeholder="Search"
          className="search"
          variant="filled"
          InputProps={{
            disableUnderline: true,
            startAdornment: <SearchOutlined />,
          }}
          fullWidth
        />
        <Grid item className="sunscribe-to-premium common-grid">
          <CustomTypography className="content-header" fontWeight={600}>
            Subscribe to Premium
          </CustomTypography>
          <CustomTypography className="content" fontWeight={600}>
            {' '}
            Subsctibe to unlock new features and if eligible, receive a share of ads revenue.
          </CustomTypography>
          <Button className="subscribe-button">Subscribe</Button>
        </Grid>
        <Grid item className="whats-happening common-grid">
          <CustomTypography className="content-header" fontWeight={600}>
            Whats happening
          </CustomTypography>
          {whatsHappening.map((elem, index) => {
            return (
              <Button key={index} fullWidth className="sub-content-button">
                <Grid item container direction="column" alignContent="flex-start">
                  <CustomTypography className="trend">{elem.header}</CustomTypography>
                  <CustomTypography className="title" fontWeight={600}>
                    {elem.name}
                  </CustomTypography>
                  <CustomTypography className="posts">{elem.posts} Posts</CustomTypography>
                </Grid>
                <Grid item>
                  <MoreHorizRounded />
                </Grid>
              </Button>
            );
          })}
          <Button fullWidth className="show-more-content-button">
            <CustomTypography className="show-more">Show more</CustomTypography>
          </Button>
        </Grid>

        <Grid item className="who-to-follow common-grid">
          <CustomTypography className="content-header" fontWeight={600}>
            Who to follow
          </CustomTypography>
          {whatsHappening.map((elem, index) => {
            return (
              <Grid key={index}>
                <CustomTypography>{elem.header}</CustomTypography>
                <CustomTypography>{elem.name}</CustomTypography>
                <CustomTypography>{elem.posts}</CustomTypography>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default QuickOptions;

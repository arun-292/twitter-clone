import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Explore from '../Explore';
import Notifications from '../Notifications';
import Messages from '../Messages';
import Lists from '../Lists';
import Bookmarks from '../Bookmarks';
import Communities from '../Communities';
import Verified from '../Verified';
import Profile from '../Profile';
import Home from '../Home';
import Root from '../Root';
import SignUp from '../SignUp';
import SignIn from '../SignIn';

interface RoutesProps {}

const TwitterRoutes: React.FC<RoutesProps> = () => {
  return (
    <Routes>
      <Route path="/" Component={Root}>
        <Route path="/i/flow/signup" element={<SignUp />} />
        <Route path="/i/flow/login" element={<SignIn />} />
        <Route path="/i/bookmarks" element={<Bookmarks />} />
        <Route path="/i/verified-choose" element={<Verified />} />
      </Route>
      <Route path="/home" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/compose/tweet" element={<Messages />} />
      <Route path="/akashsolanki292" element={<Profile />}>
        <Route path="/akashsolanki292/lists" element={<Lists />} />
        <Route path="/akashsolanki292/communities" element={<Communities />} />
      </Route>
    </Routes>
  );
};

export default TwitterRoutes;

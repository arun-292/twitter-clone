import {
  Home,
  HomeOutlined,
  Search,
  NotificationsOutlined,
  NotificationsActive,
  MailOutline,
  ListAltOutlined,
  BookmarkBorderOutlined,
  PeopleOutline,
  PersonOutline,
  MoreHorizRounded,
} from '@material-ui/icons';

interface IQuickActionConfig {
  key: number;
  name: string;
  path: string;
  Icon?: any;
  ActiveIcon?: any;
}

export const QuickActionConfig: IQuickActionConfig[] = [
  { key: 0, name: 'Home', path: '/home', Icon: HomeOutlined, ActiveIcon: Home },
  { key: 1, name: 'Explore', path: '/explore', Icon: Search },
  {
    key: 2,
    name: 'Notifications',
    path: '/notifications',
    Icon: NotificationsOutlined,
    ActiveIcon: NotificationsActive,
  },
  { key: 3, name: 'Messages', path: '/messages', Icon: MailOutline },
  { key: 4, name: 'Lists', path: '/akashsolanki292/lists', Icon: ListAltOutlined },
  { key: 5, name: 'Bookmarks', path: '/i/bookmarks', Icon: BookmarkBorderOutlined },
  { key: 6, name: 'Communities', path: '/akashsolanki292/communities', Icon: PeopleOutline },
  { key: 7, name: 'Verified', path: '/i/verified-choose', Icon: Home },
  { key: 8, name: 'Profile', path: '/akashsolanki292', Icon: PersonOutline },
  { key: 9, name: 'More', path: '', Icon: MoreHorizRounded },
];

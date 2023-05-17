import {ICON_NAME} from '../..';
import {theme} from '../../theme';

export const slides = {

  user: [
    {
      title: 'Quality assets',
      content: 'Rise invests your money into the best dollar investments around the world.', 
      background:theme.palette.biege,
      color:theme.palette.secondary.orange,
      image: ICON_NAME.ribbon,
    },
    {
      title: 'Superior Selection',
      content: 'Our expert team and intelligent algorithms select assets that beat the markets.',
      background:theme.palette.indigo,
      image: ICON_NAME.magnify,
      color:theme.palette.offPink.pink200
    },
    {
      title: 'Better Performance',
      content: 'You earn more returns, achieve more of your financial goals and protect your money from devaluation.',
      image: ICON_NAME.wheel,
      background:theme.palette.mageta,
      color:theme.palette.primary.green100
    },
  ],
};

import BrickWallsIcon from '../../components/brickWallsIcon';
import ExitIcon from '../../components/exitIcon';
import HomeIcon from '../../components/homeIcon';
import OperatorIcon from '../../components/operatorIcon';
import ProfileIcon from '../../components/profileIcon';
import ShopIcon from '../../components/shop';
import { IconType } from '../../index.interface';

export const desktopIconOrder: IconType[] = [
   {
      title: 'خانه',
      icon: HomeIcon,
      route: location.pathname === '/' ? '/' : '/home',
   },
   {
      title: 'کسب و پیشه',
      icon: ShopIcon,
      route: '/trade',
   },
   {
      title: 'نوسازی',
      icon: BrickWallsIcon,
      route: '/renovation',
   },
   {
      title: 'پشتیبانی',
      icon: OperatorIcon,
      route: '/support',
   },
   {
      title: 'پروفایل',
      icon: ProfileIcon,
      route: '/profile',
   },
   {
      title: 'خروج',
      icon: ExitIcon,
      route: '/login',
   },
];

export const androidIconOrder: IconType[] = [
   {
      title: 'پروفایل',
      icon: ProfileIcon,
      route: '/profile',
   },
   {
      title: 'پشتیبانی',
      icon: OperatorIcon,
      route: '/support',
   },
   {
      title: 'خانه',
      icon: HomeIcon,
      route: location.pathname === '/' ? '/' : '/home',
   },
   {
      title: 'نوسازی',
      icon: BrickWallsIcon,
      route: '/renovation',
   },
   {
      title: 'کسب و پیشه',
      icon: ShopIcon,
      route: '/trade',
   },
];

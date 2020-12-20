import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps187074Navigator from '../features/Maps187074/navigator';
import Additem187073Navigator from '../features/Additem187073/navigator';
import Maps187069Navigator from '../features/Maps187069/navigator';
import UserProfile187065Navigator from '../features/UserProfile187065/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps187074: { screen: Maps187074Navigator },
Additem187073: { screen: Additem187073Navigator },
Maps187069: { screen: Maps187069Navigator },
UserProfile187065: { screen: UserProfile187065Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

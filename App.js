import {
  createStackNavigator,
} from 'react-navigation';

import Home from './Home';
import Screen1 from './Screen1';

const App = createStackNavigator({
  Home: { screen: Home },
  Screen1: { screen: Screen1 },
});

export default App;
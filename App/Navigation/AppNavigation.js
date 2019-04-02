import { createStackNavigator, createAppContainer } from 'react-navigation'
import QuadFourScreen from '../Containers/QuadFourScreen'
import FourQuadrants from '../Containers/FourQuadrants'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  QuadFourScreen: { screen: QuadFourScreen },
  FourQuadrants: { screen: FourQuadrants },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'QuadFourScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)

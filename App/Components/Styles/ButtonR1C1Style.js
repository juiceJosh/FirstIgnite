import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1
  },
  r1c1 : {
    width: Metrics.screenWidth / 2,
    height: Metrics.screenHeight / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.fire,
    borderRadius: Metrics.smallMargin
  },
})

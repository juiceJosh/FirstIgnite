import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1
  },
  r2c2: {
    width: Metrics.screenWidth / 2,
    height: Metrics.screenHeight / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.bloodOrange,
    borderRadius: Metrics.smallMargin
  },
  textStyle: {
    fontSize: 14,
  }
})

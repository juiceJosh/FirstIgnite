import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1
  },
  inputStyle: {
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 14,
  },
  r1c2: {
    width: Metrics.screenWidth / 2,
    height: Metrics.screenHeight / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.frost,
    borderRadius: Metrics.smallMargin
  },
})

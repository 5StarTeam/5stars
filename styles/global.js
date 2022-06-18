import { StyleSheet } from 'react-native'

const inputBg = '#FBEFED'
const textColor = '#68433D'
const captionColor = '#BD918A'
const placeholderColor = '#AE908C'
const primaryColor = '#E6998C'
const containerBgColor = '#FFFCFC'
const greyColor = '#A3B3C5'

const globalStyles = StyleSheet.create({
  signupLoginContainer: {
    padding: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: containerBgColor,
  },
  text: {
    color: textColor,
    fontSize: 16,
    lineHeight: 24,
  },
  boldText: {
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: textColor,
    marginBottom: 5,
  },
  caption: {
    color: captionColor,
  },
  inputWrapper: {
    paddingHorizontal: 18,
    borderRadius: 30,
    width: '100%',
    backgroundColor: inputBg,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    marginRight: 7,
    paddingVertical: 13,
    justifyContent: 'center',
  },
  input: {
    paddingVertical: 13,
    color: textColor,
    width: '86%',
    alignSelf: 'center',
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    color: textColor,
  },
  btnContainer: {
    width: '100%',
    padding: 12,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: primaryColor,
  },
  btnContainerAlt: {
    width: '100%',
    padding: 12,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: primaryColor,
  },
  btnContainerSq: {
    width: '100%',
    padding: 12,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: primaryColor,
  },
  btnContainerSqAlt: {
    width: '100%',
    padding: 12,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: primaryColor,
  },
  btnContainerSmall: {
    width: '49%',
    padding: 12,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: primaryColor,
  },
  btnContainerAltSmall: {
    width: '49%',
    padding: 12,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: primaryColor,
  },
  btnLogoutContainer: {
    width: '100%',
    padding: 12,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E46767',
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  btnTextAlt: {
    color: primaryColor,
    fontSize: 16,
  },
  btnLogoutText: {
    color: '#E46767',
    fontSize: 16,
  },
  passwordHint: {
    fontSize: 10,
    color: '#808080',
    paddingHorizontal: '3%',
  },
  exploreViewContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    flex: 1,
  },
  profileContainer: {
    backgroundColor: '#FFFAFA',
    paddingTop: 10,
    paddingHorizontal: 50,
    flex: 1,
    alignItems: 'center',
  },
  profileSetupContainer: {
    backgroundColor: containerBgColor,
    justifyContent: 'center',
    paddingHorizontal: '10%',
    flex: 1,
    alignItems: 'center',
  },
  p: {
    fontSize: 16,
    marginBottom: 16,
    color: 'grey',
  },
  container: {
    backgroundColor: '#fff',
  },
  font20Orange: {
    fontWeight: 'bold',
    fontSize: 20,
    color: primaryColor,
    marginTop: 10,
    marginBottom: 7,
  },
  notifItemWrapper: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D2DCE5',
    backgroundColor: '#fff',
  },
  notifText: {
    color: '#647A91',
    lineHeight: 24,
  },
  itineraryImageSmall: {
    height: 175,
    width: '100%',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    resizeMode: 'cover',
  },
  exploreSightsContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: containerBgColor,
  },
  exploreSightsScrollContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  greyText: {
    color: '#647A91',
  },
  ratingText: {
    color: '#FFBD59',
    fontWeight: 'bold',
    marginLeft: 3,
    marginRight: 6,
    fontSize: 14,
  },
  durationText: {
    color: greyColor,
    // fontWeight: 'bold',
    marginLeft: 3,
    marginRight: 6,
    fontSize: 14,
  },
  seenText: {
    color: primaryColor,
    // fontWeight: 'bold',
    marginLeft: 3,
    marginRight: 10,
    fontSize: 14,
  },
  costText: {
    color: '#52AA6B',
    fontWeight: 'bold',
    marginLeft: 3,
    marginRight: 6,
    fontSize: 14,
  },
  greyHeader: {
    color: '#647A91',
    fontWeight: 'bold',
    fontSize: 16,
    paddingVertical: 7,
  },
  twoBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width: "100%",
  },
  containerStd: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: containerBgColor,
  },
})

export { inputBg, textColor, primaryColor, captionColor, containerBgColor, placeholderColor, greyColor, globalStyles }

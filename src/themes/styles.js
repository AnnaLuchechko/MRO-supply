import fonts from './fonts';
import metrics from './metrics';
import colors from './colors';

const Styles = {
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  marginContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: metrics.baseMargin,
    paddingVertical: metrics.baseMargin,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  row: {
    flexDirection: 'row',
  },
  wrap: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  start: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  end: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  imageContain: {
    resizeMode: 'contain',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  imageCover: {
    resizeMode: 'cover',
    flex: 1
  },
  formInput: {
    flex: 1,
    height: 50,
    padding: 10,
  },
  button: {
    height: 50,
    backgroundColor: colors.primaryColor
  },
  border: {
    borderWidth: 1,
    borderRadius: metrics.radius,
    borderColor: colors.gray96,
  },
  borderLeft: {
    borderWidth: 1,
    borderTopLeftRadius: metrics.radius,
    borderBottomLeftRadius: metrics.radius,
    borderColor: colors.gray92,
  },
  borderRight: {
    borderWidth: 1,
    borderTopRightRadius: metrics.radius,
    borderBottomRightRadius: metrics.radius,
    borderColor: colors.gray92,
  },
  imageContain: {
    resizeMode: 'contain',
    flex: 1,
    width: null,
    height: null,
  },
  radius: {
    borderRadius: metrics.radius,
    borderWidth: 1,
    borderColor: colors.gray96,
    padding: metrics.baseMargin
  },

  radiusThin: {
    borderRadius: metrics.radius,
    borderWidth: 1,
    borderColor: colors.gray96,
  }
};

export default Styles;
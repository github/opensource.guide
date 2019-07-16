/**
 * This function assumes logger is an instance of AppEventsLogger and has been
 * created using AppEventsLogger.newLogger() call.
 */
public void logAdImpressionEvent (String adType) {
    Bundle params = new Bundle();
    params.putString(AppEventsConstants.EVENT_PARAM_AD_TYPE, adType);
    logger.logEvent(AppEventsConstants::EVENT_NAME_AD_IMPRESSION, params);
}

// google analytics

import ReactGA from 'react-ga'

const trackingId = 'UA-155223836-2'

export function initializeGA () {
  ReactGA.initialize(trackingId)
  ReactGA.pageview('/notes-app')
}

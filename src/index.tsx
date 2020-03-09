import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { StoreProvider } from './helpers/store-provider'
import TweetStore from './stores/tweet-store'

const tweetStore = new TweetStore([])

// @ts-ignore - for debugging
window.tweetStore = tweetStore

ReactDOM.render(
  <StoreProvider value={tweetStore}>
    <App />
  </StoreProvider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

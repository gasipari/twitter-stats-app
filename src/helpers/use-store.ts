import { useContext } from 'react'
import { StoreContext } from './store-provider'
import TweetStore from '../stores/tweet-store'

export const useStore = (): TweetStore => useContext(StoreContext)

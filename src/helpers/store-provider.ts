import { createContext } from 'react'
import TweetStore from '../stores/tweet-store'

export const StoreContext = createContext<TweetStore>({} as TweetStore)

export const StoreProvider = StoreContext.Provider

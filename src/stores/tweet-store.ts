import { action, computed, observable } from 'mobx'
import { now } from 'mobx-utils'
import find from 'lodash.find'
import TweetItem from './tweet-item'

export default class TweetStore {
    @observable.shallow list: TweetItem[] = []

    constructor(tweets: string[]) {
      tweets.forEach(this.addTweet)
    }


    @observable tweetCount: number = 0

    @observable startTime: number = Date.now()

    @observable countries: any[] = []

    @observable languages: any[] = []

    @action
    addTweet = (rawTweet: any) => {
      if (!find(this.list, { id: rawTweet.id })) {
        this.list.push(new TweetItem(rawTweet.id, rawTweet.text, rawTweet.user.name,
          rawTweet.user.screen_name, rawTweet.user.profile_image_url_https))

        // incremenet tweetCount
        this.tweetCount += 1

        // update countries stats
        const countryIndex = this.countries.find(
          (item) => item.name === rawTweet.place.country,
        )
        if (countryIndex) {
          countryIndex.value += 1
        } else {
          this.countries.push({
            name: rawTweet.place.country,
            value: 1,
          })
        }

        // update languages stats
        const languageIndex = this.languages.find(
          (item) => item.name === rawTweet.lang,
        )
        if (languageIndex) {
          languageIndex.value += 1
        } else {
          this.languages.push({
            name: rawTweet.lang,
            value: 1,
          })
        }
      }
    }

    @action
    resetTweets = () => {
      this.list = []
    }

    @action
    updateStartTime = (time: number) => {
      this.startTime = time
    }

    @computed
    get allTweets(): TweetItem[] {
      return this.list
    }

    @computed
    get minutesRunning(): number {
      return Math.round((now() - this.startTime)/ 120000)
    }

    @computed
    get averageTweetsPerMinute(): number {
      return this.tweetCount / ((now() - this.startTime) / 60000)
    }

    @computed
    get tweetsByCountry(): any[] {
      return this.countries
    }

    @computed
    get tweetsByLanguage(): any[] {
      return this.languages
    }
}

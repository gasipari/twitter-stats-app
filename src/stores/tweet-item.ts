import { observable } from 'mobx'

export default class TweetItem {
    @observable id: string = ''

    @observable text: string = ''

    @observable userName: string = ''

    @observable screenName: string = ''

    @observable profileImage: string = ''

    constructor(id: string, text: string, userName: string, screenName: string, profileImage: string) {
      this.id = id
      this.text = text
      this.userName = userName
      this.screenName = screenName
      this.profileImage = profileImage
    }
}

import React from 'react'
import { useObserver } from 'mobx-react-lite'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

import useStyles from '../styles/Styles'
import { useStore } from '../helpers/use-store'
import TweetItem from '../stores/tweet-item'


const TweetsList = () => {
  const classes = useStyles()

  const tweetStore = useStore()

  return useObserver(() => (
    <List className={classes.list}>
      {tweetStore.allTweets.map((row: TweetItem) => (
        <div key={row.id}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={row.userName} src={row.profileImage} />
            </ListItemAvatar>
            <ListItemText
              primary={row.screenName}
              secondary={(
                <>
                  <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                    {row.userName}
                  </Typography>
                  {row.text}
                </>
                )}
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </div>
      ))}
    </List>
  ))
}

export default TweetsList

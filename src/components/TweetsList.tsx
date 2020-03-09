import React from 'react'
import { useObserver } from 'mobx-react-lite'
import { Virtuoso } from 'react-virtuoso'

import { makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

import { useStore } from '../helpers/use-store'


// styles
const useStyles = makeStyles((theme) => ({
  inline: {
    display: 'inline',
    paddingRight: 5,
  },
  list: {
    height: 680
  }
}))

const TweetsList = () => {
  const classes = useStyles()
  const tweetStore = useStore()

  return useObserver(() => (
    <Virtuoso
    totalCount={tweetStore.allTweets.length}
    overscan={200}
    item={index => {
      return (
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={tweetStore.allTweets[index].userName} src={tweetStore.allTweets[index].profileImage} />
          </ListItemAvatar>
          <ListItemText
            primary={tweetStore.allTweets[index].screenName}
            secondary={(
              <>
                <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                  {tweetStore.allTweets[index].userName}
                </Typography>
                {tweetStore.allTweets[index].text}
              </>
              )}
          />
          </ListItem>
      )
    }}
    className={classes.list}
  />
  ))
}

export default TweetsList

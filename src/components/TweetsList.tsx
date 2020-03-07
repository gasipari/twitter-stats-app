import React, { useState, useEffect }  from 'react'

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }),
);

const TweetsList = () => {
  const classes = useStyles()
  const [list, setList] = useState({ items: [] })

  return (
    <List className={classes.root}>
        {list.items.map((row: any)=> (
        <div key={row.id}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt={row.user.name} src={row.user.profile_image_url_https} />
                </ListItemAvatar>
                <ListItemText primary={row.user.screen_name} secondary={ <React.Fragment>
                    <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                        {row.user.name}
                    </Typography>
                    {row.text}
                    </React.Fragment>
                    }
                    />
            </ListItem>
            <Divider variant="inset" component="li" />
        </div>
        ))}
    </List>
  )
}

export default TweetsList
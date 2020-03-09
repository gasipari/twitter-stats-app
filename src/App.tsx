import React from 'react'

// material ui
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import PublicIcon from '@material-ui/icons/Public'
import Button from '@material-ui/core/Button'
import { useStore } from './helpers/use-store'
import pubnub from './config/pubnub-config'

// custom app components
import TweetsList from './components/TweetsList'
import StatsList from './components/StatsList'
import TotalTweetsCard from './components/TotalTweetsCard'
import MinutesRunning from './components/MinutesRunning'
import AverageTweetsMinute from './components/Average'

// app styles
import useStyles from './styles/Styles'

const App = () => {
  const classes = useStyles()

  const tweetStore = useStore()

  // start data stream
  const start = () => {
    // cleanup list & start timer
    tweetStore.resetTweets()
    tweetStore.updateStartTime(Date.now())

    // subscribe to twitter strean
    pubnub.subscribe({
      channels: ['pubnub-twitter'],
    })
    pubnub.addListener({
      message: (data: any) => {
        if (data.message.place && data.message.place.country && data.message.lang === 'en') {
          tweetStore.addTweet(data.message)
        }
      },
    })
  }

  // stop data stream
  const stop = () => {
    pubnub.unsubscribe({
      channels: ['pubnub-twitter'],
    })
    console.log('===========tweets stream stoped=========================')
    console.log(tweetStore.totalTweetsNumber)
    console.log('====================================')
  }

  return (
    <div className="App">
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <PublicIcon />
            <Typography variant="h6" noWrap>
              Twitter Real Time Stats
            </Typography>
            <div className={classes.appBarBtn}>
              <Button variant="contained" color="primary" onClick={() => start()}>
                Start
              </Button>
              <Button variant="contained" color="secondary" onClick={() => stop()}>
                Stop
              </Button>
            </div>
          </Toolbar>
        </AppBar>
        <main className={classes.content}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <TweetsList />
              </Paper>
            </Grid>
            <Grid item xs={8}>
              <Paper className={classes.paper}>
                <Grid container spacing={3}>
                  <Grid item xs>
                    <TotalTweetsCard />
                  </Grid>
                  <Grid item xs>
                    <MinutesRunning />
                  </Grid>
                  <Grid item xs>
                    <AverageTweetsMinute />
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Paper className={classes.paper}>
                      <StatsList title="Country" type="countries" />
                    </Paper>
                  </Grid>
                  <Grid item xs>
                    <Paper className={classes.paper}>
                      <StatsList title="Language" type="languages" />
                    </Paper>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </main>
      </div>
    </div>
  )
}

export default App

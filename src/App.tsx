import React, { useEffect } from 'react'

// material ui 
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import PublicIcon from '@material-ui/icons/Public'
import Button from '@material-ui/core/Button'

// custom app components
import TweetsList from './components/TweetsList'
import StatsCard from './components/StatsCard'
import StatsList from './components/StatsList'

// app styles
import useStyles from './styles/Styles'
import pubnub from './config/PubnubConfig'


function App() {
  // test pubnub data stream
  useEffect(() => {
    console.log('====================================');
    console.log('test pubnub data stream');
    console.log('====================================');
    pubnub.addListener({
      message: (message: any) => {
        console.log(message.message)
      }
    }); 
  });


  const classes = useStyles()

  // start data stream
  const start = () => {
    pubnub.subscribe({
      channels: ['pubnub-twitter']
      });
  }

  // stop data stream
  const stop = () => {
    pubnub.unsubscribe({
      channels: ['pubnub-twitter'],
    });
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
                  <StatsCard title={'Total tweets'} index={0} />
                </Grid>
                <Grid item xs>
                  <StatsCard title={'Minutes running'} index={1} />
                </Grid>
                <Grid item xs>
                  <StatsCard title={'Average tweets per minute'} index={2} />
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Paper className={classes.paper}>
                    <StatsList title={'Country'} type={'countries'}/>
                  </Paper>
                </Grid>
                <Grid item xs>
                  <Paper className={classes.paper}>
                  <StatsList title={'Language'} type={'languages'}/>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </main>
    </div>
  </div>
  );
}

export default App;

import React from 'react'
import { useObserver } from 'mobx-react-lite'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { useStore } from '../helpers/use-store'


const MinutesRunning = () => {
  const tweetStore = useStore()

  return useObserver(() => (
    <Card style={{ display: 'flex' }}>
      <CardContent>
        <Typography style={{ fontSize: 14 }} color="textSecondary" gutterBottom>
          Minutes running
        </Typography>
        <Typography variant="h5" component="h2">
          {tweetStore.minutesRunning}
        </Typography>
      </CardContent>
    </Card>
  ))
}
export default MinutesRunning

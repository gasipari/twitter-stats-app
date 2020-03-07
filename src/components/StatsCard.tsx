import React, { useState, useEffect }  from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

interface Props {
  title: string
  index: number
}

const StatsCard = ({title, index}: Props) => {
    const [total, setTotal] = useState(0)
  
    return (
        <Card style={{display: 'flex'}}>
        <CardContent>
          <Typography style={{fontSize: 14}} color="textSecondary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h5" component="h2">
            {total}
          </Typography>
        </CardContent>
      </Card>
    )
  }
  export default StatsCard
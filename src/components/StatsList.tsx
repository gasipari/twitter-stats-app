import React from 'react'
import { useObserver } from 'mobx-react-lite'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { useStore } from '../helpers/use-store'

interface IProps {
  title: string
  type: string
}

const StatsList = ({ title, type }: IProps) => {
  const tweetStore = useStore()

  return useObserver(() => (
    <Table size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell>{title}</TableCell>
          <TableCell align="right">Tweets</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {type === 'countries' ? tweetStore.countries.map((row: any) => (
          <TableRow key={row.name}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.value}</TableCell>
          </TableRow>
        )) : tweetStore.languages.map((row: any) => (
          <TableRow key={row.name}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ))
}

export default StatsList

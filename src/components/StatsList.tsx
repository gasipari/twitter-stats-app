import React, { useState, useEffect } from 'react'
// import firebase from '../config/firebaseConfig'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

interface Props {
  title: string
  type: string
}

const StatsList = ({title, type}: Props) => {
    const [list, setList] = useState({ items: [] })
  
    return (
      <Table size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell>{title}</TableCell>
          <TableCell align="right">Tweets</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {list.items.map((row: any) => (
        <TableRow key={row.name}>
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="right">{row.value}</TableCell>
        </TableRow>
        ))}
      </TableBody>
    </Table>
    )
  }

  export default StatsList
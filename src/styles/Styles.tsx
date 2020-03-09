import { makeStyles } from '@material-ui/core/styles'

// styles
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#1F4DCC',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingTop: theme.spacing(10),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxHeight: 700,
    overflow: 'auto',
  },
  appBarBtn: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  list: {
    width: '100%',
    maxWidth: 360,
    maxHeight: 700,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
    paddingRight: 5,
  },
}))

export default useStyles

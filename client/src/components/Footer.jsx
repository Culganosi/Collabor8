import React from 'react'
import { Typography } from '@material-ui/core'

export default function Footer() {
  return (
    <footer>
    <Typography variant="h6" align="center" gutterBottom>
      Footer
    </Typography>
    <Typography variant="subtitle1" align="center" color="textSecondary">
      Something for your feet
    </Typography>
  </footer>
  )
}

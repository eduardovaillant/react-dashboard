import { Grid } from './styles'
import Aside from '../Aside'
import Content from '../Content'
import MainHeader from '../MainHeader'

import React from 'react'

const Layout: React.FC = () => {
  return (
    <Grid>
      <MainHeader />
      <Aside />
      <Content />
    </Grid>
  )
}

export default Layout
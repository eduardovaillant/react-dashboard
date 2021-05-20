import { Container, Profile, Welcome, UserName } from './styles'
import emojis from '../../utils/emojis'
import Toggle from '../Toggle/'

import React, { useMemo } from 'react'

const MainHeader: React.FC = () => {

  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojis.length)
    return emojis[index]
  }, [])

  return (
    <Container>
      <Toggle /> 
      <Profile>
        <Welcome>Olá, {emoji}</Welcome>
        <UserName>Eduardo Brito Vaillant</UserName>
      </Profile>
    </Container>
  )
}

export default MainHeader
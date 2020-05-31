import React from 'react'
import { Bio, Counter, Header, LinkedInBadge, HelloProps, Navigation } from './components'
import './App.scss'

export default function App() {
  return (
    <>
      <Header />
      <Navigation />
      {/* <Bio /> */}
      <LinkedInBadge />
      {/* <HelloProps compiler='Typescript' framework='React' /> */}
      {/* <Counter /> */}
    </>
  )
}
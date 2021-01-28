import React from 'react'
import { Route } from 'react-router-dom'
import {
  Home,
  About,
  FindBc,
  FindXyz,
  Map
} from './pages'

export default function Router() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/find-bc" component={FindBc} />
      <Route path="/find-xyz" component={FindXyz} />
      <Route path="/map" component={Map} />
    </div>
  )
}

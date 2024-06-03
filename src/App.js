import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import TeamMatches from './components/TeamMatches'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route exact path="/matches/:id" component={TeamMatches} />
  </BrowserRouter>
)

export default App

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Header from './components/Header/Header'
import Lolomo from './Pages/Lolomo/Lolomo'
import Home from './Pages/Home/Home'
import MovieDetails from './Pages/MovieDetails/MovieDetails'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/' exact component={() => <Redirect to='/home' />} />
          <Route path='/home' exact component={Home} />
          <Route path='/movies' exact component={Lolomo} />
          {/* dynamic route for  individual movie */}
          <Route path='/movie/:id' exact component={MovieDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App

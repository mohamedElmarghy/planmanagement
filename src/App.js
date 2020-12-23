import React from 'react';
import { Route , BrowserRouter, Switch } from 'react-router-dom'; 
import DashBoard from './components/dashboard/DashBoard';
import NavBar from './components/layout/NavBar';
import Create from './components/project/Create';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import ProjectDetail from './components/project/ProjectDetail'
class App extends React.Component {
  render() {
    return (
      <div>
         <BrowserRouter>
           <NavBar />
            <Switch>
              <Route exact path='/' component={DashBoard} />
              <Route path='/projects/:id' component={ProjectDetail}/>
              <Route path='/create' component={Create} />
              <Route path='/signIn'  component={SignIn} />
              <Route path='/signUp' component={SignUp} />
            </Switch>
         </BrowserRouter>
      </div>
    )
  }
}

export default App

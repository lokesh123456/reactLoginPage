import React from 'react';

import { render } from 'react-dom';
import {browserHistory,Route,Router,IndexRoute} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Signup from './Signup';
import Login from './Login';
import App from '../Main';
import Logout from './Logout';
injectTapEventPlugin();

export default class MainComponent extends React.Component {
        render() {

            return (
              <MuiThemeProvider muiTheme={getMuiTheme()}>
                 <Router history={browserHistory}>
                     <Route path="/" component={App}>
                       <IndexRoute component={Login}/>
                       <Route path={'Signup'} component={Signup}/>
                         <Route path={'Login'} component={Login}/>
                         <Route path={'Logout/:user'} component={Logout}/>
                       </Route>
                 </Router>
             </MuiThemeProvider>
           );
            }



        }

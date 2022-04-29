import React,{useState} from 'react';
import Views from './views';
import LeftPanel from './components/panels/left_panel';
import RightPanel from './components/panels/right_panel';
import './css/index.scss';
import { useCookies } from 'react-cookie';

import CustomErrorBoundary from './components/errors';

function App() {
  
  const [cookies, setCookie, removeCookie] = useCookies(['auth']);

  const initialState = {
    loggedIn: true,//cookies.auth ? true : false,
    authData:null
  }
  
  const [state,setState] = useState( initialState)


  const SwitchMode = ({token, ...auth_data}) =>{
    
    setState((prev_state)=>{
      if(token){
        setCookie('auth', token);

        return {
          ...prev_state,
          loggedIn:!state.loggedIn,
          authData:auth_data
        }
      }

      return prev_state;
      
    })
  }

  const handleSignOut = ()=>{
    
    setState((prev_state)=>{
      removeCookie('auth');
      return {...initialState, loggedIn:false};
    })

    
  }
  

  return (
    <CustomErrorBoundary>
      <div className={`app_container ${!state.loggedIn ? 'sign_in_mode':''}`}>
        <div className="forms_container">
          <Views switchMode={SwitchMode} loggedIn={state.loggedIn}/>
        </div>

        <div className="panels_container">
          <LeftPanel/>
          <RightPanel signOut={handleSignOut}/>
        </div>
      
      </div>
    </CustomErrorBoundary>
  );
}

export default App;

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
    loggedIn: false,//cookies.auth ? true : false,
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

  //  
  
  return (//${!state.loggedIn ? 'login':''}
    <CustomErrorBoundary>
      <div className={`app_container login`}>
        <div className="form_container">
          <Views switchMode={SwitchMode} {...state}/>
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

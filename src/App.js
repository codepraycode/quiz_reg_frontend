import React,{useState} from 'react';
import Views from './views';

import './css/index.scss';
import { useCookies } from 'react-cookie';

import CustomErrorBoundary from './components/errors';

function App() {
  // removeCookie
  const [cookies, setCookie, ] = useCookies(['auth']);

  const initialState = {
    loggedIn: cookies.auth ? true : false,
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

  // const handleSignOut = ()=>{
    
  //   setState((prev_state)=>{
  //     removeCookie('auth');
  //     return {...initialState, loggedIn:false};
  //   })

    
  // }

  //  
  
  return (//${!state.loggedIn ? 'login':''}
    <CustomErrorBoundary>
      <div className={`app_container`}>

        <div className="header">

          <div className="imgs">
            <img src='assets/img/dtce.png' alt="RCCG"/>
            <img src='assets/img/rccg_70.png' alt="RCCG"/>
          </div>

          <h2>RCCG JUNIOR CHURCH</h2>
          <p>Annual Competition Registrations</p>
        </div>
          
        <div className='app_content'>
          <Views switchMode={SwitchMode} {...state}/>
        </div>

      </div>

        
    </CustomErrorBoundary>
  );
}

export default App;

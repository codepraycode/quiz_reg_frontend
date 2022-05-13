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

  const handleSignOut = ()=>{
    
    setState((prev_state)=>{
      removeCookie('auth');
      return {...initialState, loggedIn:false};
    })

    
  }

  //  
  
  return (//${!state.loggedIn ? 'login':''}
    <CustomErrorBoundary>
      <div className={`app_container ${!state.loggedIn ? 'login':''}`}>
        <div className="header">

          <div className="content">
            <img src="/assets/img/rccg.png" alt="Redeemed Christian Church Of God"/>

            <h3>An Header here</h3>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid
            </p>
              
          </div>

        </div>
          
        <div className="form_container">
          <Views switchMode={SwitchMode} {...state}/>
        </div>

        <>
          <LeftPanel/>
          <RightPanel signOut={handleSignOut}/>
        </>


        <div className="footer">
          <div className="content">
              
                <img src="/assets/img/rccg.png" className="image" alt="" />
                <h3>Another Header here</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti.
              </p>

              <button className="btn transparent" onClick={handleSignOut}>
                  Sign Out
                </button>
          </div>

            
          </div>
        </div>

        
    </CustomErrorBoundary>
  );
}

export default App;

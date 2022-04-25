import React,{useState} from 'react';
import Views from './views';
import LeftPanel from './components/panels/left_panel';
import RightPanel from './components/panels/right_panel';
import './css/index.scss';


function App() {
  const [state,setState] = useState( {
    isLogin:false,
  })


  const SwitchMode = () =>{
    setState({
      ...state,
      isLogin:!state.isLogin
    })
  }

  return (
    <div className={`mycontainer ${state.isLogin ? 'sign_in_mode':''}`}>
      <div className="forms_container">
        <Views switchMode={SwitchMode} loggedIn={state.isLogin}/>
      </div>

      <div className="panels_container">
        <LeftPanel/>
        <RightPanel/>
      </div>
     
    </div>
  );
}

export default App;

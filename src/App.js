import React,{useState} from 'react';
import Login from './views/login';
import LeftPanel from './components/left_panel';
import RightPanel from './components/right_panel';
import './css/index.scss';


function App() {
  const [state,setState] = useState( {
    isLogin:true,
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
        <div className="form_container">
          <Login switchMode={SwitchMode}/>
          </div>
      </div>

      <div className="panels_container">
        <LeftPanel/>
        <RightPanel/>
      </div>
     
    </div>
  );
}

export default App;

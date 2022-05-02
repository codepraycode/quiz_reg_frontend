import React,{useState} from 'react';
/* 
    Region Will Sign in
 */
const LoginForm = (props) => {
    const [state,setState] = useState({
        email:'',
        password:'',
        err:null,
        loading:false
    });


    const handleSubmit = (e)=>{
        e.preventDefault();

        let {email,password} = state;

        let data = {
            email,
            password
        }


        
        props.login(data,(error)=>{
            setState({
                ...state,
                err:error,
                loading:false
            });
            return;
        });
        // props.switchMode();

        setState({
            ...state,
            err:null,
            loading:true
        })
    }

    const handleInputChange = (e) =>{
        e.preventDefault();

        let field_name = e.target.type;
        let field_value = e.target.value;

        let new_state = {...state}
        new_state[field_name] = field_value;

        setState({
            ...state,
            ...new_state,
            err:null
        })
    }

    return (
        <form className="sign_in_form" onSubmit={handleSubmit}>
                <h2 className="title"> Region Sign in</h2>
                <span className="err text-danger">{state.err}</span>

                <div className="input_field">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <input 
                    type="email" 
                    placeholder="Region Email" 
                    value={state.email}
                    onChange={handleInputChange}
                    required={true}
                    />
                    
                </div>
                
                
                <div className="input_field">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Password" value={state.password}
                    onChange={handleInputChange} required={true}/>
                    
                </div>
                
                <button 
                    type="submit" 
                    value="Login" 
                    className="btn solid"
                    disabled={state.loading}
                >
                    {state.loading ? 'Loading':'Login'}
                </button>
                
            </form>
        
        
    );
};

export default LoginForm;
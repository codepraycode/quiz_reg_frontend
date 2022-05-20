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
        <div className="sign_in_form card">
            <div className="card_header">
                <h3>Region Sign in</h3>
            </div>
            
            <form onSubmit={handleSubmit}>
                <div className="card_body">
                    <span className="error text-danger">{state.err}</span>
                    <div className="input_field">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                        <input 
                        type="email" 
                        className='form-control'
                        placeholder="Region Email" 
                        value={state.email}
                        onChange={handleInputChange}
                        required={true}
                        />
                        
                    </div>
                    
                    
                    <div className="input_field">
                        <i className="fas fa-lock"></i>
                        <input type="password" className='form-control' placeholder="Password" value={state.password}
                        onChange={handleInputChange} required={true}/>
                        
                    </div>
                </div>


                <div className="card_footer">
                    <button 
                        type="submit" 
                        value="Login" 
                        className="btn btn-success"
                        disabled={state.loading}
                    >
                        {state.loading ? 'Loading':'Login'}
                    </button>
                </div>
        
            </form>
        </div>
       
        
        
    );
};

export default LoginForm;
import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'; 
import Icon from '@material-ui/core/Icon'; 
import Send from '@material-ui/icons/Send'; 
import PermIdentity from '@material-ui/icons/PermIdentity';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { Card, TextField, CardContent ,CardHeader } from '@material-ui/core'; 
import { Router, Route, Switch, Redirect } from "react-router-dom";  
import 'tachyons';
import './Signin.css'; 

const authentication={  
    isSignin:false,
    authenticate(cb){ 
        this.isSignin = true
        setTimeout(cb,100)
    }, 
    signout(cb){ 
        this.isSignin=false
        setTimeout(cb,1000)
    } 
}

class Signin extends React.Component{   
    constructor(props){ 
        super(props); 
        this.state={ 
            step:1,
            firstName:'',
            lastName:'', 
            submit:false,
            aadharNumber:'',
            panNumber:'',
            address:'',
            email:'',
            industryName:'',
            companyName:'',
            companyId:'',
            pinCode:'',
            phoneNumber:'',
            progress:0, 
            password:'', 
            signin:0
        }
    } 

    //go to next step  
    nextStep=()=>{ 
        const {step}=this.state;
        this.setState({ 
            step:step+1,
            progress:25
        });
    } 
    SigninCheck=()=>{ 
        console.log(this.state.email); 
        console.log(this.state.password);  
        const {signin}=this.state;
        this.setState({ 
            signin:signin+1
        }); 
        console.log(this.state.signin);

    } 
    prevStep=()=>{ 
        const {step}=this.state; 
        this.setState({ 
            step:step-1
        });
    }
render(){   
    if(this.state.signin===0){  
        return(  
            <div className="mainLayout" >  
            <Card className="cardLayout">   
                <CardContent className="formLayout">   
                    <div className="heading">   
                            <PermIdentity  
                                color="error"
                                style={{fontSize:50}}  
                    /> 
                    </div> 
                    <CardHeader title="Sign In"/>   
                        <div className="formCard"> 
                            <div > 
                                <TextField  
                                    id="standard-dense" 
                                    label="Email" 
                                    margin="normal"  
                                    onChange={(e)=>{ 
                                    this.setState({ 
                                        email:e.target.value
                                    }) 
                                    }}
                                    
                                />  
                            </div> 
                            <div className="formElement"> 
                                <TextField  
                                    id="standard-dense" 
                                    label="Password"  
                                    fullWidth="true" 
                                    className="formElement" 
                                    type="password"
                                    onChange={(e)=>{ 
                                    this.setState({ 
                                        password:e.target.value
                                    }) 
                                    }}
                                />  
                            </div>  
                        </div>
                    <Button  color="secondary" onClick={this.SigninCheck}>
                        Submit
                        {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
                        <Send/>
                    </Button>
                </CardContent> 
            </Card>  
        </div>
    );  
}  
if(this.state.signin>0) { 
    return <Redirect  to="/admin/dashboard"/>;
}
}
}  
export default Signin;
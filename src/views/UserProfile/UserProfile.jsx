import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx"; 
import Update from "@material-ui/icons/Update";  
import MailOutline from "@material-ui/icons/MailOutline"; 
import Phone from "@material-ui/icons/Phone"; 
import AddAlert from "@material-ui/icons/AddAlert"; 
import CardIcon from "components/Card/CardIcon.jsx"; 
import TableChart from "@material-ui/icons/TableChart"; 
import Feedback from "@material-ui/icons/Feedback";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx"; 
import Chat from "@material-ui/icons/Chat";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";  
import Typography from '@material-ui/core/Typography';   
import Table from "components/Table/Table.jsx";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon'; 
import ListItemText from '@material-ui/core/ListItemText'; 
import Divider from '@material-ui/core/Divider'; 
import Snackbar from "components/Snackbar/Snackbar.jsx";
import SnackbarContent from '@material-ui/core/SnackbarContent';
import CircularProgressbar from 'react-circular-progressbar';  
import formurlencoded from 'form-urlencoded';
import tachyons from 'tachyons'; 
import './UserProfile.css';

import avatar from "assets/img/faces/marc.jpg"; 
const percentage=42;
const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

class  UserProfile extends React.Component{ 
  constructor(props){ 
    super(props);  
    this.state={ 
      bl:false,
      mailNotif:false,
      callNotif:false,
    } 


  const { classes } = props;
  }  
  componentWillUnmount() {
    var id = window.setTimeout(null, 0);
    while (id--) {
      window.clearTimeout(id);
    }
  } 
  
  closeNotif=()=>{ 
    this.setState({ 
      bl:false,
      mailNotif:false,
      callNotif:false,
    })
  }
  
  showNotification(place) {
    var x = [];
    x[place] = true;
    this.setState(x);
    this.alertTimeout = setTimeout(
      function() {
        x[place] = false;
        this.setState(x);
      }.bind(this),
      6000
    );
  }
  render(){  
    return (
      <div>  
      <div className="user-profile-display"> 
              <GridItem xs={12} sm={12} md={4} >
                <Card profile>
                  <CardAvatar profile>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img src={avatar} alt="..." />
                    </a>
                  </CardAvatar>
                  <CardBody profile > 
                  <Typography>  
                        <h4>Name: Sanath Swaroop</h4>
                      </Typography>
                    <Divider /> 
                    <Typography>  
                        <h4>Company: Koryo, Inc</h4>
                      </Typography>
                    <Divider /> 
                    <Typography>  
                        <h4>UID: 623287778412</h4>
                      </Typography>
                    <Divider /> 
                    <Typography>  
                        <h4>Phone: 8790682297</h4>
                      </Typography>
                    <Divider /> 
                    <Typography>  
                        <h4>Loan Amount :54,00,000/-</h4>
                      </Typography>
                    <Divider />
                  <List component="nav">
                    <ListItem button divider>
                      <ListItemText primary="Status : Loan Due" />
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary="PayRec ID : A1514" />
                    </ListItem>
                    <Divider  />
                  </List> 
                  </CardBody>
                </Card>
              </GridItem>   
            <GridItem xs={12} sm={12} md={4} lg={8}>
                <Card className="main-card-display" >   
                <CardBody className="msme-card-display"> 
                    <Typography>   
                    <h2>MSME Points</h2>  
                    </Typography> 
                    <CircularProgressbar 
                              className="progress-circle"
                              percentage={percentage}
                              text={`258`}  
                              initialAnimation='true'  
                              styles={{
                                  path: { strokeLinecap: 'butt' ,  stroke: '#00CED1',},
                                  text: { fill: '#000' }, 
                                  trail: {stroke: `rgb(236, 239, 241)`} 
                              }}
                    />  
                  </CardBody>  
                <CardBody className="msme-card-display"> 
                    <Typography>   
                    <h2>Current Status:</h2>  
                    </Typography>  
                    <Typography>   
                    <h2 style={{color:'red'}}>EMI Due</h2>  
                    </Typography> 
                  </CardBody>  
                  <div className="user-profile-display" > 
                  <CardBody>  
                        <Card>
                        <CardHeader color="primary" stats icon>
                            <CardIcon color="primary">
                            <TableChart/>
                            </CardIcon>
                            <h5 className="card-text" style={{color:'black'}}> Bucket 2</h5>
                        </CardHeader>
                        </Card> 
                  </CardBody>  
                  <CardBody>  
                        <Card>
                        <CardHeader color="danger hover grow" stats icon>  
                            <CardIcon color="danger" onClick={()=>{this.showNotification("bl")}} href>   
                            <Chat/>
                            </CardIcon>
                            <h5 className="card-text" style={{color:'black'}}>Send Reminder Message</h5>
                        </CardHeader>
                        </Card>
                  </CardBody> 
                  </div> 
                  <div className="user-profile-display" > 
                  <CardBody>  
                        <Card>
                        <CardHeader color="warning" stats icon>
                            <CardIcon color="warning" onClick={()=>{this.showNotification("mailNotif")}}>
                            <MailOutline/>
                            </CardIcon>
                            <h5 className="card-text" style={{color:'black'}}>Send Reminder Mail</h5>
                        </CardHeader>
                        </Card> 
                  </CardBody>  
                  <CardBody>  
                        <Card>
                        <CardHeader color="info" stats icon>
                            <CardIcon color="info" onClick={()=>{this.showNotification("callNotif")}}>
                            <Phone/>
                            </CardIcon>
                            <h5 className="card-text" style={{color:'black'}}>Send Reminder Call</h5>
                        </CardHeader>
                        </Card>
                  </CardBody>  
                  <CardBody>  
                        <Card>
                        <CardHeader color="info" stats icon>
                            <CardIcon color="info">
                            <Feedback/>
                            </CardIcon>
                            <h5 className="card-text" style={{color:'black'}}>Number of Extension Requests Made : 4 </h5>
                        </CardHeader>
                        </Card>
                  </CardBody> 
                  </div>
                </Card>
              </GridItem>  
        </div>  
        <div className="payment-history">  
          <Typography>  
            <h2>Payment History</h2>
          </Typography> 
          <Divider/>   
          <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4 >Payment History of Mr. Sanath Swaroop</h4>
                <p >
                  List containing all the payments made on or before 27th Feb, 2018
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="secondary"
                  tableHead={["Id", "MSME Points", "Loan Amount", "Latest EMI", "Due"]}
                  tableData={[
                    ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738","www.google.com"],
                    ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789","www.google.com"],
                    ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142","www.google.com"],
                    ["Philip Chaney", "Korea, South", "Overland Park", "$38,735","www.google.com"],
                    ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542","www.google.com"],
                    ["Mason Porter", "Chile", "Gloucester", "$78,615","www.google.com"]
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        </div>
          
        <div className="reminder-catalogue">  
          <Divider/>
              <Typography>  
                <h2>Reminder Catalogue</h2>
              </Typography> 
          <Divider/>  
          <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4 >Reminder History of Mr. Sanath Swaroop</h4>
                <p >
                  List containing all the Reminders made on or before 27th Feb, 2018
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="secondary"
                  tableHead={["Date of the Reminder", "Type of the Reminder", "Response","For Emi Due "]}
                  tableData={[
                    ["25/02/2019", "Niger", "Oud-Turnhout", "$36,738","www.google.com"],
                    ["25/02/2019", "Curaçao", "Sinaai-Waas", "$23,789","www.google.com"],
                    ["25/02/2019", "Netherlands", "Baileux", "$56,142","www.google.com"],
                    ["23/12/2019", "Korea, South", "Overland Park", "$38,735","www.google.com"],
                    ["23/12/2019", "Malawi", "Feldkirchen in Kärnten", "$63,542","www.google.com"],
                    ["23/12/2019", "Chile", "Gloucester", "$78,615","www.google.com"]
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        </div> 
        <Snackbar
                    place="bl"
                    color="success"
                    icon={AddAlert} 
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                    message="Message Sent"
                    open={this.state.bl}
                    closeNotification={this.closeNotif}
                    close
        />    
        <Snackbar
                    place="bl"
                    color="success"
                    icon={MailOutline} 
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                    message="Mail Sent"
                    open={this.state.mailNotif}
                    closeNotification={this.closeNotif}
                    close
        />    
        <Snackbar
                    place="bl"
                    color="success"
                    icon={Phone} 
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                    message="Call Initiated"
                    open={this.state.callNotif}
                    closeNotification={this.closeNotif}
                    close
        />   
      </div> 
      );

  }
}

export default withStyles(styles)(UserProfile);

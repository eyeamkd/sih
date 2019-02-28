import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility"; 
import Feedback from "@material-ui/icons/Feedback"; 
import GraphicEq from "@material-ui/icons/GraphicEq";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx"; 
import CircularProgressbar from 'react-circular-progressbar';  
import { NavLink } from "react-router-dom";
import 'react-circular-progressbar/dist/styles.css';  
import './Dashboard.css';

import { bugs, website, server } from "variables/general.jsx";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import { withTheme } from "@material-ui/core";
const percentage = 60; 
const percentage2=80;
const percentage3=40;
class Dashboard extends React.Component {  
  
  state = {
    value: 0 ,
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    series: [[12, 17, 7, 17, 23, 18, 10]],
    values:[],
    finaldata:[[]], 
    loanGiven:0, 
    revenue:0, 
    amountrecovered:0, 
    defaulters:0, 
    extensions:0, 
    avgmsme:0,
  }; 
  //const dataobj=[];
  componentDidMount(){ 
    fetch('http://localhost:3001/leaderboard')
    .then(response=>response.json()) 
    .then(resp=>{ resp.map((key,index)=>{
      //console.log(resp[index].msmep); 
      this.setState({ 
          values: this.state.values.concat([resp[index].msmep]),
      }) 
    // console.log(this.state.values);
    })  
    this.setState({ 
      finaldata: [this.state.values],
    }) 
  })
    .catch(err=>console.log(err)); 
    console.log(this.state.series); 

    fetch('http://localhost:3001/loangiven')
    .then(resp=>resp.json())
    .then(fin=>this.setState({loanGiven:fin[0].count})) 
    .catch(err=>console.log(err)) 

    fetch('http://localhost:3001/totalrevenue')
    .then(resp=>resp.json())
    .then(fin=>this.setState({revenue:fin[0].sum})) 
    .catch(err=>console.log(err)) 

    fetch('http://localhost:3001/amountrecovered')
    .then(resp=>resp.json())
    .then(fin=>this.setState({amountrecovered:fin[0].sum})) 
    .catch(err=>console.log(err)) 

    fetch('http://localhost:3001/defaulters')
    .then(resp=>resp.json())
    .then(fin=>this.setState({defaulters:fin[0].count})) 
    .catch(err=>console.log(err)) 

    fetch('http://localhost:3001/extensions')
    .then(resp=>resp.json())
    .then(fin=>this.setState({extensions:fin[0].count})) 
    .catch(err=>console.log(err)) 

    fetch('http://localhost:3001/averagemsme')
    .then(resp=>resp.json())
    .then(fin=>this.setState({avgmsme:fin[0].avg})) 
    .catch(err=>console.log(err))
  // console.log(this.state.values); 
  } 
  decimal=(x)=>{ 
    let num = parseFloat(this.state.avgmsme);
    return num.toFixed(2);
  } 
  addCommas=(x)=>{ 
    x=x.toString();
    var lastThree = x.substring(x.length-3);
    var otherNumbers = x.substring(0,x.length-3);
    if(otherNumbers != '')
        lastThree = ',' + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree; 
    return res;
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  }; 
  render() {  
    console.log(this.state.finaldata);
    const chartData ={  
      
      data:{ 
        labels:this.state.labels,
        series:this.state.finaldata,
      }
    }
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="primary" stats icon>
                <CardIcon color="primary">
                  <Icon>content_copy</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Loans Given</p>
                <h3 className={classes.cardTitle}>
                  {this.state.loanGiven}
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Store />
                </CardIcon>
                <p className={classes.cardCategory}>Amount Received</p>
                <h5 className={classes.cardTitle}>{this.addCommas(this.state.revenue)}</h5>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  Last 24 Hours
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Icon>info_outline</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Loan Applications</p>
                <h3 className={classes.cardTitle}>75</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <LocalOffer />
                  Updated Just Now
                </div>
              </CardFooter>
            </Card>
          </GridItem> 
      
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="danger" stats icon>
                <CardIcon color="danger">
                  <Icon>info_outline</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Recovery Amount</p>
                <h3 className={classes.cardTitle}>{this.addCommas(this.state.amountrecovered)}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <LocalOffer />
                  Updated Just Now
                </div>
              </CardFooter>
            </Card>
          </GridItem>  

          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="danger" stats icon>  
              <NavLink  to="/admin/defaulterslist" style={{color:'white'}}   activeClassName="active">
                <CardIcon color="danger">
                  <Accessibility />
                </CardIcon> 
                </NavLink>
                <p className={classes.cardCategory}>Defaulters</p>
                <h3 className={classes.cardTitle}>{this.state.defaulters}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>  
          <div class="">  
          </div>
            <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon> 
              <NavLink  to="/admin/extensionrequests" style={{color:'white'}}   activeClassName="active">
                <CardIcon color="info">
                  <Feedback/>
                </CardIcon> 
                </NavLink>
                <p className={classes.cardCategory}>Extension Requests</p>
                <h3 className={classes.cardTitle}>{this.state.extensions}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>  
        </GridContainer>  
          <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={chartData.data}
                  type="Line"
                  options={dailySalesChart.options}
                  listener={dailySalesChart.animation}
                /> 
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>MSME Points Coverage</h4>
                <p className={classes.cardCategory}>
                  
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 4 minutes ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="warning">
                <ChartistGraph
                  className="ct-chart"
                  data={emailsSubscriptionChart.data}
                  type="Bar"
                  options={emailsSubscriptionChart.options}
                  responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                  listener={emailsSubscriptionChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Increase in the number of Users</h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> campaign sent 2 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="danger">
                <ChartistGraph
                  className="ct-chart"
                  data={completedTasksChart.data}
                  type="Line"
                  options={completedTasksChart.options}
                  listener={completedTasksChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Loan Repayment Variation</h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> campaign sent 2 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);

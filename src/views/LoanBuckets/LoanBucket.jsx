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
import TableChart from "@material-ui/icons/TableChart"
import GraphicEq from "@material-ui/icons/GraphicEq";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx"; 
import ProgressBar from "components/ProgressBar/ProgressBar.js";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx"; 
import CircularProgressbar from 'react-circular-progressbar'; 
import Divider from '@material-ui/core/Divider'; 
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'; 
import 'react-circular-progressbar/dist/styles.css';  
import './BucketsDisplay.css';

import { bugs, website, server } from "variables/general.jsx";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import { withTheme } from "@material-ui/core";
const percentage =30; 
const percentage2=40;
const percentage3=20; 
const percentage4=10;
class LoanBucket extends React.Component {  
  
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
    bucket1:0,
    bucket2:0,
    bucket3:0,
    bucket4:0
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
                <CardHeader color="info" stats icon>
                    <CardIcon color="info">
                    <Icon>table_chart</Icon>
                    </CardIcon>
                    <p className={classes.cardCategory}><b>Bucket 1</b></p>
                    <h3 className={classes.cardTitle}>35</h3>
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
                <CardHeader color="primary" stats icon>
                    <CardIcon color="primary">
                    <TableChart/>
                    </CardIcon>
                    <p className={classes.cardCategory}><b>Bucket 2</b></p>
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

                <GridItem xs={12} sm={6} md={3}>
                <Card>
                <CardHeader color="warning" stats icon>
                    <CardIcon color="warning">
                    <TableChart/>
                    </CardIcon>
                    <p className={classes.cardCategory}><b>Bucket 3</b></p>
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

            <GridItem xs={12} sm={6} md={3}>
                <Card>
                <CardHeader color="danger" stats icon>
                    <CardIcon color="danger">
                    <TableChart/>
                    </CardIcon>
                    <p className={classes.cardCategory}><b>Bucket 4</b></p>
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
                <Grid container alignItems="center">
                    <Grid item xs>
                        <Typography gutterBottom variant="h4">
                        Overall Stats
                        </Typography>
                    </Grid>
                    </Grid>
                <div  className="progress-circle-display">  
                    <div className="progress-circle-layout">   
                            <CircularProgressbar 
                            className="progress-circle"
                            percentage={percentage}
                            text={`${percentage}%`}  
                            initialAnimation='true'  
                            styles={{
                                path: { strokeLinecap: 'butt' ,  stroke: '#00CED1',},
                                text: { fill: '#000' }, 
                                trail: {stroke: `rgb(236, 239, 241)`} 
                            }}
                            /> 
                            <h4> % of users who have made the payment <b>before</b> the payment deadline</h4>  
                    </div> 
                </div>   

                <div  className="progress-circle-display">  
                    <div className="progress-circle-layout">   
                            <CircularProgressbar 
                            className="progress-circle"
                            percentage={percentage2}
                            text={`${percentage2}%`}  
                            initialAnimation='true'  
                            styles={{
                                path: { strokeLinecap: 'butt' ,  stroke: '#673AB7',},
                                text: { fill: '#000' }, 
                                trail: {stroke: `rgb(236, 239, 241)`} 
                            }}
                            /> 
                            <h4> % of users who have made the payment <b>on the day</b>of the payment deadline</h4>  
                    </div> 
                </div>   

                <div  className="progress-circle-display">  
                    <div className="progress-circle-layout">   
                            <CircularProgressbar 
                            className="progress-circle"
                            percentage={percentage3}
                            text={`${percentage3}%`}  
                            initialAnimation='true'  
                            styles={{
                                path: { strokeLinecap: 'butt' ,  stroke: '#ff8f00',},
                                text: { fill: '#000' }, 
                                trail: {stroke: `rgb(236, 239, 241)`} 
                            }}
                            /> 
                            <h4> % of users who have made the payment <b>after</b> payment deadline </h4>  
                    </div> 
                </div>   

                <div  className="progress-circle-display">  
                    <div className="progress-circle-layout">   
                    <CircularProgressbar 
                        percentage={percentage4}
                        text={`${percentage4}%`}   
                        initialAnimation='true' 
                        styles={{
                            path: { stroke: '#ff3d00', strokeLinecap: 'butt' },
                            text: { fill: '#000' }, 
                            trail: {stroke: `rgb(236, 239, 241)`}
                        }} 
                        className="CircularProgressbar-trail progress-circle"
                        // call function directly
                    /> 
                        <h4> % of users who have <b>not</b> made the payment</h4>  
                    </div> 
                </div>    
                
                <Grid container alignItems="center"> 
                    <Grid item xs>
                        <Typography gutterBottom variant="h4">
                            Variation in past months
                        </Typography>
                    </Grid>
                    </Grid> 
                    <Divider variant="middle" />  
                <GridContainer>   
                        <GridItem xs={12} sm={12} md={4}>
                    <Card chart>
                    <CardHeader color="info">
                        <ChartistGraph
                        className="ct-chart"
                        data={chartData.data}
                        type="Line"
                        options={dailySalesChart.options}
                        listener={dailySalesChart.animation}
                        /> 
                    </CardHeader>
                    <CardBody>
                        <h4 className={classes.cardTitle}>Varitation in the number of people in Bucket 1 </h4>
                    </CardBody>
                    </Card>
                </GridItem>  
                <GridItem xs={12} sm={12} md={4}>
                    <Card chart>
                    <CardHeader color="primary">
                        <ChartistGraph
                        className="ct-chart"
                        data={chartData.data}
                        type="Line"
                        options={dailySalesChart.options}
                        listener={dailySalesChart.animation}
                        /> 
                    </CardHeader>
                    <CardBody>
                    <h4 className={classes.cardTitle}>Varitation in the number of people in Bucket 2 </h4>
                    </CardBody>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <Card chart>
                    <CardHeader color="warning">
                        <ChartistGraph
                        className="ct-chart"
                        data={completedTasksChart.data}
                        type="Line"
                        options={completedTasksChart.options}
                        listener={completedTasksChart.animation}
                        />
                    </CardHeader>
                    <CardBody>
                    <h4 className={classes.cardTitle}>Varitation in the number of people in Bucket 3 </h4>
                    </CardBody>
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
                    <h4 className={classes.cardTitle}>Varitation in the number of people in Bucket 4 </h4>
                        
                    </CardBody>
                    </Card>
                </GridItem>
        </GridContainer>  
        <Grid container alignItems="center"> 
                    <Grid item xs>
                        <Typography gutterBottom variant="h4">
                            List of People in Bucket 1
                        </Typography>
                    </Grid>
                    </Grid> 
                    <Divider variant="middle" />  
                     
                    <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Card>
                        <CardHeader color="info">
                            <h4 className={classes.cardTitleWhite}>USERS</h4>
                            <p className={classes.cardCategoryWhite}>
                            List containing all the users associated
                            </p>
                        </CardHeader>
                        <CardBody>
                            <Table
                            tableHeaderColor="secondary"
                            tableHead={["Name", "Country", "City", "Salary", "Profile Link"]}
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
        <Grid container alignItems="center"> 
                    <Grid item xs>
                        <Typography gutterBottom variant="h4">
                            List of People in Bucket 2
                        </Typography>
                    </Grid>
                    </Grid> 
                    <Divider variant="middle" />  
                    
                    <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Card>
                        <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}>USERS</h4>
                            <p className={classes.cardCategoryWhite}>
                            List containing all the users associated
                            </p>
                        </CardHeader>
                        <CardBody>
                            <Table
                            tableHeaderColor="secondary"
                            tableHead={["Name", "Country", "City", "Salary", "Profile Link"]}
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

                     <Grid container alignItems="center"> 
                    <Grid item xs>
                        <Typography gutterBottom variant="h4">
                            List of People in Bucket 3
                        </Typography>
                    </Grid>
                    </Grid> 
                    <Divider variant="middle" />  
                    
                    <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Card>
                        <CardHeader color="warning">
                            <h4 className={classes.cardTitleWhite}>USERS</h4>
                            <p className={classes.cardCategoryWhite}>
                            List containing all the users associated
                            </p>
                        </CardHeader>
                        <CardBody>
                            <Table
                            tableHeaderColor="secondary"
                            tableHead={["Name", "Country", "City", "Salary", "Profile Link"]}
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

                     <Grid container alignItems="center"> 
                    <Grid item xs>
                        <Typography gutterBottom variant="h4">
                            List of People in Bucket 4
                        </Typography>
                    </Grid>
                    </Grid> 
                    <Divider variant="middle" />  
                     
                    <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Card>
                        <CardHeader color="danger">
                            <h4 className={classes.cardTitleWhite}>USERS</h4>
                            <p className={classes.cardCategoryWhite}>
                            List containing all the users associated
                            </p>
                        </CardHeader>
                        <CardBody>
                            <Table
                            tableHeaderColor="secondary"
                            tableHead={["Name", "Country", "City", "Salary", "Profile Link"]}
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
        );
    }
    }

    LoanBucket.propTypes = {
    classes: PropTypes.object.isRequired
    };

export default withStyles(dashboardStyle)(LoanBucket);

import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx"; 
import TableBody from '@material-ui/core/TableBody';
import { TableRow, TableCell } from "@material-ui/core";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};
let names=[]; 
let msmep=[];  
let finalarray=[];
let temp=[];
class TableList extends React.Component {  
  state={ 
    tableData:[[]], 
    tempArray:[], 
    finalArray:[[]]
  } 
  constructor(props){ 
    super(props);
    const { classes } = this.props; 
  }  
  componentDidMount(){   
    fetch('http://localhost:3001/userslist')
    .then(response=>response.json())
    .then(resp=>{resp.map((key,index)=>{     
          this.setState({tableData: this.state.tableData.concat([[resp[index]]])})   
          this.setState({temparray: Object.values(this.state.tableData[index])})  
          this.setState({finalArray: this.state.temparray.concat([this.state.temparray])})
      })})
    .catch(err=>console.log("error in fetching"))   
    
    //console.log(msmep); 
  }   
  makeArray=()=>{
    this.state.tableData.map((index,value)=>{  
      this.state.tableData[index].map((ind,val)=>{  
        console.log(this.state.tableData[index][ind]);
      })

    })
  }
  render(){     
   //this.makeArray();
    //console.log(this.dataArray);
   //console.log(this.state.tableData)  // console.log(this.state.tempArray) 
  console.log(this.state.tableData) 
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={this.props.cardTitleWhite}>USERS</h4>
              <p className={this.props.cardCategoryWhite}>
                List containing all the users associated
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
        <GridItem xs={12} sm={12} md={12}>
          <Card plain>
            <CardHeader plain color="primary">
              <h4 className={this.props.cardTitleWhite}>
                Table on Plain Background
              </h4>
              <p className={this.props.cardCategoryWhite}>
                Here is a subtitle for this table
              </p>
            </CardHeader>
            <CardBody>
            {/*<Table>
      <TableBody>{this.state.finalArray.map((item, key)=>{
                return (
                    <TableRow key = {key}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.msmep}</TableCell>
                    </TableRow>
                  )
              
              })}</TableBody>
        </Table>*/}
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );

  }
  
}

export default withStyles(styles)(TableList);

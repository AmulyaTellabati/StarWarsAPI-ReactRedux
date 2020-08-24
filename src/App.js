import React from "react";
import "./App.css";
import { Table, Button } from "semantic-ui-react";
import {GET_PEOPLE} from "./actionCreator";
import { connect } from "react-redux";


 class AppContainer extends React.Component {
    componentDidMount() {   
      this.props.getPeople(1);
    }
    nextPage(pager,page) {
       pager(page);
      }

  render(){
  
    const { getPeople, list, loading,page} = this.props;
    const filteredList = list.filter(
        (item) => ~item.name.toLowerCase());
  return (
    <div id="app">
      <h1>Star Wars API Demo</h1>

      {loading && <div className="spacing">Loading...</div>}
        {/* loading */}
      {!loading && (
        <Table>
          <Table.Header>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Birth Year</th>
            </tr>
          </Table.Header>
          <Table.Body>
            {filteredList.map((item, index) => {
              return (
                <tr key={index}>
                  <td> {item.name}</td>
                  <td>{item.gender}</td>
                  <td>{item.birth_year}</td>
                </tr>
              );
            })}
          </Table.Body> 
        </Table>
      )}

      <Button onClick={()=>this.nextPage(getPeople,page)}>Next</Button>
    </div>
  );
        }         
};


const mapStateToProps = state =>{
  return {
    loading: state.loading,
    list: state.list,
    page: state.page,
  };
};

const mapDispatchToProps = dispatch =>{
  return {
    getPeople:(page =1) => dispatch(GET_PEOPLE(page)),
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(AppContainer);

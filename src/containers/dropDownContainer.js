import React, { Component } from "react";
import SearchDropdown from "../components/searchDropDown";
import data from "../Json/countries.json";
import users from "../Json/users.json";

class DropDownContainer extends Component {
  state = {
    countriesList: data,
    searchValue: "",
    selectvalue: "",
    userData: [],
  };

  selectSearchHandler = (value) => {
    this.setState({ selectvalue: value });
  };

  addSearchValueHandler = () => {
    let addAcountriesList = data;
    console.log(this.state.searchValue);
    addAcountriesList.push({
      name: this.state.searchValue,
      code: this.state.searchValue,
    });
    this.setState({
      countriesList: addAcountriesList,
      selectvalue: this.state.searchValue,
      searchValue: "",
    });
    console.log("====", addAcountriesList);
  };

  searchValueHandler = (e) => {
    const countriesList = data;

    let filteredCountires = countriesList;

    if (e.target.value.trim()) {
      filteredCountires = countriesList.filter((v) => {
        return v.name
          .toLocaleLowerCase()
          .startsWith(e.target.value.toLocaleLowerCase());
      });
    }
    this.setState({
      searchValue: e.target.value,
      countriesList: filteredCountires,
    });
  };

  addUsers = () => {
    if (this.props.match.path === "/user-add-privilege") {
      this.setState({ userData: users[0].roles });
    } else {
      this.setState({ userData: users[1].roles });
    }
  };

  componentDidMount() {
    // const countriesList = [];
    // for (let i = 0; i < 5; i++) {
    //   countriesList.push(data[i]);
    // }
    // this.setState({ countriesList });
    this.addUsers();
  }

  render() {
    const { countriesList, searchValue, selectvalue, userData } = this.state;

    return (
      <div>
        <SearchDropdown
          countries={countriesList}
          searchValue={searchValue}
          selectvalue={selectvalue}
          searchValueHandler={this.searchValueHandler}
          selectSearchHandler={this.selectSearchHandler}
          addSearchValueHandler={this.addSearchValueHandler}
          userData={userData}
        />
      </div>
    );
  }
}

export default DropDownContainer;

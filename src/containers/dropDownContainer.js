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
    hide: true,
    contriesLength: "",
  };

  selectSearchHandler = (value) => {
    this.setState({ selectvalue: value });
  };

  addSearchValueHandler = () => {
    let addAcountriesList = data;
    addAcountriesList.push({
      name: this.state.searchValue,
      code: this.state.searchValue,
    });
    this.setState({
      countriesList: addAcountriesList,
      selectvalue: this.state.searchValue,
      searchValue: "",
    });
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
      hide: false,
    });
  };

  addUsers = () => {
    if (this.props.match.path === "/user-add-privilege") {
      this.setState({ userData: users[0].roles });
    } else {
      this.setState({ userData: users[1].roles });
    }
  };

  moreHandler = () => {
    this.setState({ countriesList: data, hide: false });
  };

  loadContries = () => {
    const countriesList = [];
    const contriesLength = data.length - 5;
    for (let i = 0; i < 5; i++) {
      countriesList.push(data[i]);
    }
    this.setState({ countriesList, contriesLength });
  };

  componentDidMount() {
    this.loadContries();
    this.addUsers();
  }

  render() {
    const {
      countriesList,
      searchValue,
      selectvalue,
      userData,
      hide,
      contriesLength,
    } = this.state;

    return (
      <div>
        <SearchDropdown
          countries={countriesList}
          searchValue={searchValue}
          selectvalue={selectvalue}
          hide={hide}
          contriesLength={contriesLength}
          searchValueHandler={this.searchValueHandler}
          selectSearchHandler={this.selectSearchHandler}
          addSearchValueHandler={this.addSearchValueHandler}
          moreHandler={this.moreHandler}
          userData={userData}
        />
      </div>
    );
  }
}

export default DropDownContainer;

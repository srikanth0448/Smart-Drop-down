import React from "react";

const SearchDropDown = (props) => {
  const {
    countries,
    searchValue,
    selectvalue,
    searchValueHandler,
    selectSearchHandler,
    addSearchValueHandler,
    userData,
    moreHandler,
    hide,
  } = props;

  return (
    <div>
      <div className="container">
        <div className="row justify-content-md-center mt-4">
          <div className="col-md-4">
            <div className="">
              <button className="btn btn-secondary dropdown-toggle">
                {selectvalue ? selectvalue : "Select Location"}
              </button>
              <div className="list-countries">
                <div className="search-input">
                  <input
                    type="text"
                    className="form-control"
                    name="search"
                    value={searchValue}
                    onChange={searchValueHandler}
                  />
                </div>
                <ul>
                  {countries.length !== 0 ? (
                    countries.map((list) => {
                      return (
                        <a
                          onClick={() => selectSearchHandler(list.name)}
                          className="dropdown-item"
                          key={list.code}
                        >
                          {list.name}
                        </a>
                      );
                    })
                  ) : (
                    <div>
                      <p> "{searchValue}" not Found</p>
                      {userData.indexOf("add") !== -1 ? (
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={addSearchValueHandler}
                        >
                          Add &amp; Select
                        </button>
                      ) : (
                        ""
                      )}
                    </div>
                  )}
                  {hide ? (
                    <p onClick={moreHandler} className="more pull-right">
                      More...
                    </p>
                  ) : (
                    ""
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDropDown;

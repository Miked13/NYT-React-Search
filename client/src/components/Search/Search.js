import React, { Component } from "react";
import "./Search.css";
import Results from "../Results";
import API from "../utils/API";

class Search extends Component {
  state = {
    search: "",
    results: []
  };


  handleFormSubmit = event => {
    event.preventDefault();
    
      API.search("&q=" + this.state.search)
      .then(res => {
        this.setState({ results: res.data })
        this.handleResetButton();
      });
    }

  handleResetButton = () => {
    this.setState({ search: ""})
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [ name ]: value });
  };

  handleArticleSave = index => {
    const newArticle = {
      title: 
        (this.state.results[index].headline.print_headline) ?
          this.state.results[index].headline.print_headline
          :
          this.state.results[index].headline.main,
      date: 
        (this.state.results[index].pub_date) ?
          this.state.results[index].pub_date
          :
          undefined,
      url: this.state.results[index].web_url
    }
    API.saveArticles(newArticle)
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <div className="row">
        <div className="col-sm-12">
        <br />

          <div className="card">
            {/* Card Header */}
            <div className="card-header">
              <strong>
                <i className="fa fa-list-alt"></i> Search
              </strong>
            </div>

            <div className="card-body">
              <form>

                {/* Search Box */}
                <div className="form-group">
                  <label htmlFor="search">Search Term:</label>
                  <input onChange={this.handleInputChange} value={this.state.search} type="text" className="form-control" name="search"></input>
                </div>
            
                {/* Submit & Clear Buttons */}
                <button type="submit" onClick={this.handleFormSubmit} className="btn btn-default text-white bg-info" id="run-search">
                  <i className="fa fa-search"></i> Search
                </button>
                <button type="reset" onClick={this.handleResetButton} className="btn btn-default text-white bg-info" id="clear-all">
                  <i className="fa fa-trash"></i> Clear
                </button>

              </form>

            </div>

          </div>

        </div>
      </div>
      <Results 
        result={ this.state.results }
        saveButton={ this.handleArticleSave } 
      />
      </div>
    );
  };
};

export default Search;
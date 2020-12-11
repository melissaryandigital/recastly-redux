import React from 'react';

// class Search extends React.Component {
var Search = ({handleSearchInputChange}) => {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     value: ''
  //   };
  // }

  // handleSearchInputChange(e) {
  //   this.props.getYouTubeVideos(e.target.value);
  //   this.setState({
  //     value: e.target.value
  //   });
  // }



  return (
    <div className="search-bar form-inline">
      <input
        className="form-control"
        type="text"
        //value={this.props.value}
        onChange={(e) => {handleSearchInputChange(e.target.value)}}
      />
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
}

export default Search;

//notes on what we change
//1. changing his.state.value to this.props.value
//2. changing the onChange={this.handleSearchInputChange.bind(this)} to onChange={handleVideoSearch(e.target.value)}

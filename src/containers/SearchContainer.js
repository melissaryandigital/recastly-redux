import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleVideoSearch from '../actions/search.js';


//methods we're missing:
// not using handleVideoSearch
// not using mapStateToProps
// not using mapDispatchToProps
// not using dispatch?

// mapStateToProps
var mapStateToProps = (state) => ({
  currentVideo: state.currentVideo,
  videoList: state.videoList
})

// mapDispatchToProps
var mapDispatchToProps = (dispatch) => {
  // handleVideoSearch:
  return {};
  // return an object
}


var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;


// From containers spec

// describe('containers', function() {
//   describe('Search Container', function() {
//     before(function () {
//       sinon.spy(store, 'dispatch');
//       component = shallowWithStore(<SearchContainer />, store);
//     });
//     beforeEach(function() {
//       store.dispatch.reset();
//     });
//     it('should have a prop called handleSearchInputChange which dispatches handleVideoSearch', function() {
//       component.props().handleSearchInputChange('kitten mittens');
//       expect(component.props().handleSearchInputChange).to.be.a('function');
//       expect(store.dispatch.callCount).to.equal(1);
//     });
//     it('should be created using the React-Redux connect method', function() {
//       expect(SearchContainer.name).to.equal('Connect');
//     });
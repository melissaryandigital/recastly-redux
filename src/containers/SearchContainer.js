import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';


var SearchContainer = () => {

};

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;


// Melissa note - it imports handleSearchChange but our action is exported as 'handleVideoSearch'


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
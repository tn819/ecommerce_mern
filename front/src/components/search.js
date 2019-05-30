import React from 'react'
import { connect } from 'react-redux';


function Search(props) {
  return (
    <div>
      All items to buy/rent show up here.
    </div>
  )
}

function mapStateToProps(state) {
  return {
    username: state.username,
    items: state.items || [],
  };
};

export default connect(mapStateToProps)(Search);
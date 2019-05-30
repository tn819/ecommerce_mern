import React from 'react'
import { connect } from 'react-redux';
import '../css/searchItem.css'

function SearchItem(props) {
  return (
    <div class='searchItem'>
      <img src={props.img} />
      <div class='offer'>
        
        <p class='type'>Room with private bathroom</p>
        <p class='title'>Stylish, modern studio close 2 city centre</p>
        <p class='keywords'>2 Housemates . Great Kitchen . Removated 2011</p>
        <p class='location'>Berlin</p>
        <p class='price'>500 euro</p>
        
      </div>
      <div class='aboutus'>
        <strong>About us</strong>
        <p>We are a great bunch of people looking for a new housemate. We are honestly the best so are looking for something good as well. Are you this person then leave us a message.</p>
      </div>
      <div class='wanted'>
        <strong>Wanted</strong>
        <p class='age'>30-35 years</p>
        <p class='sex'>Yes please</p>
        <p class='lifestage'>Student</p>
        <p>Are you that special clean person who also kinda likes to hang out and party but not too much because we are kinda old?</p>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {

  };
};

export default connect(mapStateToProps)(SearchItem);
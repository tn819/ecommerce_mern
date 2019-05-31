import React from 'react'
import { connect } from 'react-redux';
import '../css/searchItem.css'


function SearchItem({data}) {

 
  return (
    <div class='searchItem'>
      <img src={data.img} />
      <div class='offer'>
        
        <p class='type'>{data.type}</p>
        <p class='title'>{data.title}</p>
        <p class='keywords'>{data.keywords}</p>
        <p class='location'>{data.location}</p>
        <p class='price'>{data.price}</p>
        
      </div>
      <div class='aboutus'>
        <strong>About us</strong>
        <p>{data.about}</p>
      </div>
      <div class='wanted'>
        <strong>Wanted</strong>
        {/* <p class='age'>{data.wanted.ageFrom} to {data.wanted.ageTo} years</p> */}
        <p class='sex'>{data.wanted.sex}</p>
        <p class='lifestage'>{data.wanted.lifestage}</p>
        <p>{data.wanted.description}</p>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {

  };
};

export default connect(mapStateToProps)(SearchItem);
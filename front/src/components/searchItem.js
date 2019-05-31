import React from 'react'
import { connect } from 'react-redux';
import '../css/searchItem.css'


function SearchItem({data}) {

 
  return (
    <div className='searchItem'>
      <img alt='item picture' src={data.img} />
      <div className='offer'>
        
        <p className='type'>{data.type}</p>
        <p className='title'>{data.title}</p>
        <p className='keywords'>{data.keywords}</p>
        <p className='location'>{data.location}</p>
        <p className='price'>{data.price}</p>
        
      </div>
      <div className='aboutus'>
        <strong>About us</strong>
        <p>{data.about}</p>
      </div>
      <div className='wanted'>
        <strong>Wanted</strong>
        {/* <p className='age'>{data.wanted.ageFrom} to {data.wanted.ageTo} years</p> */}
        <p className='sex'>{data.wanted.sex}</p>
        <p className='lifestage'>{data.wanted.lifestage}</p>
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
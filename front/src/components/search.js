import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import SearchItem from './searchItem';
import { getListings } from "../action";


// const testItems = [{
//   id: 654,
//   image: 'https://media.istockphoto.com/photos/beautiful-luxury-home-exterior-with-green-grass-and-landscaped-yard-picture-id856794608?k=6&m=856794608&s=612x612&w=0&h=Zj19xfoLCw35hQVUj8AJb2KxKiV6lnUXSBORrCvLouA=',
//   title: 'a house',
//   description: 'a crazy description',
//   availableDate: '1/1/2018',
//   availableFrom: '3 month',

// }]

function Search({dispatch, items}) {

  useEffect(() => {
    dispatch(getListings())
  },[])

  
  return (
    <div>
      {items.map(el => <SearchItem data={el}/>)}
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
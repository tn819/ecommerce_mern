import React from 'react'
import { connect } from 'react-redux';
import SearchItem from './searchItem';

const testItems = [{
  id: 654,
  image: 'https://media.istockphoto.com/photos/beautiful-luxury-home-exterior-with-green-grass-and-landscaped-yard-picture-id856794608?k=6&m=856794608&s=612x612&w=0&h=Zj19xfoLCw35hQVUj8AJb2KxKiV6lnUXSBORrCvLouA=',
  title: 'a house',
  description: 'a crazy description',
  availableDate: '1/1/2018',
  availableFrom: '3 month',

}]

function Search(props) {
  return (
    <div>
      {props.items.map(el => <SearchItem img={el.image}/>)}

    </div>
  )
}

function mapStateToProps(state) {
  return {
    username: state.username,
    items: state.items || testItems,
  };
};

export default connect(mapStateToProps)(Search);
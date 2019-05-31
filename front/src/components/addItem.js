import React, {useState} from 'react'
import { connect } from 'react-redux';
import { addListing } from "../action";


function AddItem(props) {
  const [addForm, setAddForm] = useState({price:'', title:'', description:'', keywords:'', location:'', type:'', about:'', image:'', ageFrom:'',ageTo:'',sex:'',lifestage:'',wantedDescription:''})

  const handleClick = (e) => {
    e.preventDefault();
    props.dispatch(addListing(addForm))
};

  const handleChange = (e) => {
    setAddForm({...addForm, [e.target.name]: e.target.value})


      
  }

  return (
    <div>
      <form>
        <label htmlFor='price'>Price</label>
        <input id='price' name='price' value={addForm.price} onChange={handleChange}></input>
        <label htmlFor='price'>Title</label>
        <input id='title' name='title' value={addForm.title} onChange={handleChange}></input>
        <label htmlFor='description'>Description</label>
        <input id='description' name='description' value={addForm.description} onChange={handleChange}></input>
        <label htmlFor='keywords'>Keywords</label>
        <input id='keywords' name='keywords' value={addForm.keywords} onChange={handleChange}></input>
        <label htmlFor='location'>Location</label>
        <input id='location' name='location' value={addForm.location} onChange={handleChange}></input>
        <label htmlFor='type'>Type</label>
        <input id='type' name='type' value={addForm.type} onChange={handleChange}></input>
        <label htmlFor='about'>About</label>
        <input id='about' name='about' value={addForm.about} onChange={handleChange}></input>
        <label htmlFor='image'>Image url</label>
        <input id='image' name='image' value={addForm.image} onChange={handleChange}></input>
        Wanted
        <label htmlFor='ageFrom'>Age from</label>
        <input id='ageFrom' name='ageFrom' value={addForm.ageFrom} onChange={handleChange}></input>
        <label htmlFor='ageTo'>Age to</label>
        <input id='ageTo' name='ageTo' value={addForm.ageTo} onChange={handleChange}></input>
        <label htmlFor='sex'>Sex</label>
        <input id='sex' name='sex' value={addForm.sex} onChange={handleChange}></input>
        <label htmlFor='lifestage'>Lifestage</label>
        <input id='lifestage' name='lifestage' value={addForm.lifestage} onChange={handleChange}></input>
        <label htmlFor='wantedDescription'>Description</label>
        <input id='wantedDescription' name='wantedDescription' value={addForm.wantedDescription} onChange={handleChange}></input>
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  )
}

function mapStateToProps(state) {
  return {

  };
};

export default connect(mapStateToProps)(AddItem);
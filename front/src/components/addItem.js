import React, {useState} from 'react'
import { connect } from 'react-redux';
import { addListing } from "../action";
import styled from 'styled-components';

const FormHolder = styled.div`
 margin-top: 3px;
 display:flex;
 flex-direction:column;
 align-items: center;
 width: 100%;
 min-width: 300px;
`;

const FormField = styled.div`
 margin-top: 3px;
 display:flex;
 flex-direction:column;
 justify-content: space-between;
 align-items: center;
 width: 100%;
 transition: box-shadow .3s;
 padding: 5px;
 border-radius: 15px;
 :hover {
    box-shadow: 0 0 11px rgba(33,33,33,.2); 
    }
`;

const FormFieldLabel = styled.label`
    :hover {
    color:gray
    }
`;

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
    <FormHolder>
      <form>
      
        <FormField><FormFieldLabel htmlFor='price'>Price</FormFieldLabel>
        <input id='price' name='price' value={addForm.price} onChange={handleChange}/></FormField>
        <FormField><FormFieldLabel htmlFor='price'>Title</FormFieldLabel>
        <input id='title' name='title' value={addForm.title} onChange={handleChange}/></FormField>
        <FormField><FormFieldLabel htmlFor='description'>Description</FormFieldLabel>
        <input id='description' name='description' value={addForm.description} onChange={handleChange}/></FormField>
        <FormField><FormFieldLabel htmlFor='keywords'>Keywords</FormFieldLabel>
        <input id='keywords' name='keywords' value={addForm.keywords} onChange={handleChange}/></FormField>
        <FormField><FormFieldLabel htmlFor='location'>Location</FormFieldLabel>
        <input id='location' name='location' value={addForm.location} onChange={handleChange}/></FormField>
        <FormField><FormFieldLabel htmlFor='type'>Type</FormFieldLabel>
        <input id='type' name='type' value={addForm.type} onChange={handleChange}/></FormField>
        <FormField><FormFieldLabel htmlFor='about'>About</FormFieldLabel>
        <input id='about' name='about' value={addForm.about} onChange={handleChange}/></FormField>
        <FormField><FormFieldLabel htmlFor='image'>Image url</FormFieldLabel>
        <input id='image' name='image' value={addForm.image} onChange={handleChange}/></FormField>
        Wanted
        <FormField><FormFieldLabel htmlFor='ageFrom'>Age from</FormFieldLabel>
        <input id='ageFrom' name='ageFrom' value={addForm.ageFrom} onChange={handleChange}/></FormField>
        <FormField><FormFieldLabel htmlFor='ageTo'>Age to</FormFieldLabel>
        <input id='ageTo' name='ageTo' value={addForm.ageTo} onChange={handleChange}/></FormField>
        <FormField><FormFieldLabel htmlFor='sex'>Sex</FormFieldLabel>
        <input id='sex' name='sex' value={addForm.sex} onChange={handleChange}/></FormField>
        <FormField><FormFieldLabel htmlFor='lifestage'>Lifestage</FormFieldLabel>
        <input id='lifestage' name='lifestage' value={addForm.lifestage} onChange={handleChange}/></FormField>
        <FormField><FormFieldLabel htmlFor='wantedDescription'>Description</FormFieldLabel>
        <input id='wantedDescription' name='wantedDescription' value={addForm.wantedDescription} onChange={handleChange}/></FormField>
        <button onClick={handleClick}>Submit</button>
      </form>
    </FormHolder>
  )
}

function mapStateToProps(state) {
  return {

  };
};

export default connect(mapStateToProps)(AddItem);
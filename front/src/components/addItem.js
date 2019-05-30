import React, {useState} from 'react'
import { connect } from 'react-redux';

function AddItem(props) {
  const [addForm, setAddForm] = useState({price:'',})

  const handleClick = (e) => {
    e.preventDefault();
    // props.dispatch(register(registerForm))
};

  const handleChange = (e) => {
    setAddForm({...addForm, [e.target.name]: e.target.value})


      
  }

  return (
    <div>
      Add item to database
      <form>
        <label htmlFor='price'>Price</label>
        <input id='price' name='price' value={addForm.price} onChange={handleChange}></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

function mapStateToProps(state) {
  return {

  };
};

export default connect(mapStateToProps)(AddItem);
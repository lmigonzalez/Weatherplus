import React, {useState} from "react";


import {Form, Button} from 'react-bootstrap';


const Search = (props) =>{

	const {getCity} = props

	const initialValue = '';

	const [inputSearch, setInputSearch] = useState(initialValue)

	
	const handleChange = (e)=>{
		setInputSearch(e.target.value)
		
	}

	const handleSubmit = (e) =>{
		e.preventDefault()
		getCity(inputSearch)
		setInputSearch(initialValue)
		
	}
	// console.log(inputSearch)





	return(
		<Form className="search-form" onSubmit={handleSubmit}>
		<Form.Group className="search-container" controlId="formGroupEmail">
		  <Form.Control 
		  type="text"  
		  name ='inputSearch' 
		  value={inputSearch} 
		  className="input-text" 
		  placeholder="Search for a city..."
		  onChange={handleChange}

		  />
		  <Button className="search-btn" type= 'submit'>Search</Button>
		</Form.Group>
	  </Form>

	)
}


export default Search
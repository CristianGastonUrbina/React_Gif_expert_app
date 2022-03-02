import React, { useState } from 'react'
import PropTypes from "prop-types";
const AddCategory = ({setCategories}) => {


    const [inputValue, setInputValue] = useState("")

    const handleInputChange = (e) => {
            setInputValue(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("inputValue",inputValue)
        if (inputValue !== undefined){
            setCategories(values => [inputValue,...values] )
        }
        

    }

  return(<>
            <form onSubmit={handleSubmit }>
            <input 
                type="text"
                value={inputValue} 
                onChange={handleInputChange}
            />
            </form>
        </>
    
  )
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
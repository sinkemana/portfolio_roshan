import React, { useState } from "react";
import 'semantic-ui-css/semantic.min.css';
import styled from "styled-components";

const SearchBarStyle = styled.div`
  display: flex;
  /* width: 25em; */
  height: 6em;
  /* margin: 0 auto0; */
  justify-content: center;
  align-items: center;
  border: none;
  box-shadow: none;
`;
const Form = styled.form`
  margin: 0 auto;
  text-align: center;
  align-content: center;
`;


const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    const inputChangeHandler = (e) => {
        setSearchTerm(e.target.value)
    
    };
   const  onFormSubmitHandler = (e) => {
        e.preventDefault();
        props.onSubmit(searchTerm) 
    }

    return (
        <SearchBarStyle className="ui segment searchBar">
            <Form onSubmit={onFormSubmitHandler} className="ui form pic">
                <div className="field">
                    <label>Search Image you like</label>
                    <input
                        type="text"
                        autoFocus
                        value={searchTerm}
                        onChange={inputChangeHandler}
                    />
                </div>
            </Form>

        </SearchBarStyle>
    )
}
export default SearchBar;

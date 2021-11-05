import React, { useState } from "react";
import FormSearch from "../components/FormSearch";
import ListContext from "../context/CreateContext";

function Search() {
    const [category, setCategory] = useState('');
    const [web, setWeb] = useState('');

    const text = document.querySelector('#text');
    const categorySelected = document.querySelector('#category');

    const handleOnChangeCategory = ({ target }) => {
        const { name, value } = target;
        if (name === 'text') {
            categorySelected.value = '';
        } else {
            text.value = '';
        }
        setCategory(value);
    }

    const handleOnChangeWeb = ({ target }) => {
        const { value } = target;
        setWeb(value);
    }

    const clickSearch = async () => {
        
    }

    return (
        <FormSearch
            handle={ handleOnChangeCategory }
            web={ handleOnChangeWeb }
            
        />
    )
}

export default Search;

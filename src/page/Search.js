import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import FormSearch from "../components/FormSearch";
import ListContext from "../context/CreateContext";

function Search() {
    const { setList } = useContext(ListContext);

    const [category, setCategory] = useState('');
    const [web, setWeb] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [hide, setHide] = useState(true);

    const textItem = document.querySelector('#text');
    const categorySelected = document.querySelector('#category');

    const handleOnChangeCategory = ({ target }) => {
        const { name, value } = target;

        if (name === 'text') {
            categorySelected && (categorySelected.value = '');
        } else {
            textItem && (textItem.value = '');
        }
        setCategory(value);
    }

    const handleOnChangeWeb = ({ target }) => {
        const { value } = target;
        setWeb(value);
    }

    const clickSearch = async (e) => {
        e.preventDefault();
        await axios.post(`https://backend-lexart.herokuapp.com/${ web }`,
            { category }
        )
            .then(({ data }) => {
                setList(data.message.results)         
                setHide(false);
                return;
            })
            .catch((err) => {
                console.error(err.response.data.message);
                return null;
            });
    }

    useEffect(() => {
        if (category !== '' && web !== '') {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [category, web]);

    return (
        <FormSearch
            handle={ handleOnChangeCategory }
            web={ handleOnChangeWeb }
            disabled={ disabled }
            click={ clickSearch }
            
        />
    )
}

export default Search;

import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import FormSearch from "../components/FormSearch";
import ListContext from "../context/CreateContext";
import Card from "../components/Card";

function Search() {
    const { setList, list } = useContext(ListContext);

    const [category, setCategory] = useState('');
    const [web, setWeb] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [messageError, setMessageError] = useState('');

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
                setList(data.message.results);
                setMessageError('');
                return;
            })
            .catch((err) => {
                setMessageError(err.response.data.message);
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
        <div>
            <FormSearch
            handle={ handleOnChangeCategory }
            web={ handleOnChangeWeb }
            disabled={ disabled }
            click={ clickSearch }
            />
            { messageError
                ? (<p>{ messageError }.</p>)
                : (
                    <div className='table-cards'>
                        {
                            list.map((item, index) => {
                                return (
                                    <Card item={ item } key={ index } />
                                )
                            })
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Search;

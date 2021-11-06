import React from "react";

function FormSearch({ handle, web, disabled, click }) {
    const searchByWeb = () => {
        return (
            <select
                id='web'
                defaultValue=''
                onChange={ web }
            >
                <option value=''>Webs</option>
                <option value='buscape'>buscape</option>
                <option value='mercado-livre'>mercado livre</option>
            </select>
        );
    }

    const searchByCategory = () => {
        return (
            <select
                id='category'
                name='category'
                onChange={ handle }
                defaultValue=' '
            >
                <option value=''>Categorias</option>
                <option value='geladeira'>Geladeira</option>
                <option value='tv'>Tv</option>
                <option value='celular'>Celular</option>
            </select>
        );
    }

    const searchByText = () => {
        return (
            <input
                id='text'
                type='text'
                name='text'
                defaultValue=' '
                onChange={ handle }
            />
        )
    }

    const searchClickBtn = () => {
        return (
            <button
                type='button'
                disabled={ disabled }
                onClick={ click }
            >
                Pesquisar
            </button>
        )
    }
    return (
        <form className='form'>
            <div className='row'>
            { searchByWeb() }
            { searchByCategory() }
            </div>
            <div className='row'>
            { searchByText() }
            { searchClickBtn() }
            </div>
        </form>
    )
}

export default FormSearch;

import React from "react";

function FormSearch({ handle, web, disabled }) {
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
                defaultValue=''
                onChange={ handle }
            />
        )
    }

    const searchClickBtn = () => {
        return (
            <button
                type='button'
                disabled={ disabled }
            >
                Pesquisar
            </button>
        )
    }
    return (
        <form>
            { searchByWeb() }
            { searchByCategory() }
            { searchByText() }
            { searchClickBtn() }
        </form>
    )
}

export default FormSearch;

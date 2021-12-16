import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import SearchPage from '../SearchPage/SearchPage';


const Search = () => {
    return (
        <div>
            <Navbar component={<SearchPage />}></Navbar >

        </div >
    );
};

export default Search;
import React from 'react';
import SearchProject from '../SearchProject/SearchProject';

const SearchProjects = (props) => {
    const { sendProjects } = props;
    return (
        <div>
            {
                sendProjects.map(project => <SearchProject key={project._id} project={project}></SearchProject>)
            }
        </div>
    );
};

export default SearchProjects;
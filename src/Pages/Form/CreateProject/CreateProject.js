import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import AddProject from '../AddProject';

const CreateProject = () => {
    return (
        <div>
            <Navbar component={<AddProject />}></Navbar>
        </div>
    );
};

export default CreateProject;
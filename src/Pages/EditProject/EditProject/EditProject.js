import React from 'react';
import { useParams } from 'react-router-dom';
// import AddProject from '../../Form/AddProject';
import Navbar from '../../Shared/Navbar/Navbar';
import EditForm from '../EditForm/EditForm';

const EditProject = () => {
    const projectId = useParams();



    return (
        <div>
            <Navbar component={<EditForm projectId={projectId}></EditForm>}></Navbar>
        </div>
    );
};

export default EditProject;
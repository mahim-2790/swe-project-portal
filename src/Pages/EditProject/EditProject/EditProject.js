import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import AddProject from '../../Form/AddProject';
import Navbar from '../../Shared/Navbar/Navbar';
import EditForm from '../EditForm/EditForm';

const EditProject = () => {
    const projectId = useParams();
    const [project, setProject] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/project/${projectId.projectId}`)
            .then(res => res.json())
            .then(data => setProject(data))
    }, [projectId.projectId])

    return (
        <div>
            <Navbar component={<EditForm project={project}></EditForm>}></Navbar>
        </div>
    );
};

export default EditProject;
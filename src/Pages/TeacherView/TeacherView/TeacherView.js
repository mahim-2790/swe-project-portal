import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from '../../Shared/Navbar/Navbar';
import TeacherViewForm from '../TeacherViewForm/TeacherViewForm';

const TeacherView = () => {
    const projectId = useParams();
    console.log(projectId);

    return (
        <div>
            <Navbar component={<TeacherViewForm projectId={projectId}></TeacherViewForm>}></Navbar>
        </div>
    );
};

export default TeacherView;
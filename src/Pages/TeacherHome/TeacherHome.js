import React from 'react'
import Navbar from '../Shared/Navbar/Navbar'
import TeacherHomeProjects from './TeacherHomeProjects';

export default function TeacherHome() {

    return (
        <div>
            <Navbar component={<TeacherHomeProjects />} />
        </div>
    )
}

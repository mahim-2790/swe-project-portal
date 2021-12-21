import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import ApproveProject from './TeacherHomeProject';
const TeacherHomeProjects = () => {
    const [projects, setProjects] = useState([]);
    const [teacher, setTeacher] = useState({});

    const { userDetail } = useAuth();
    useEffect(() => {
        async function getTeacher() {
            let res = await fetch(`http://localhost:5000/teachers/${userDetail?.id}`);
            let data = await res.json();
            setTeacher(data);
        }
        getTeacher();
    }, [userDetail])

    useEffect(() => {
        async function fetchProjects() {
            let res = await fetch(`http://localhost:5000/teacher/projects/${teacher?.teacherInitial}`);
            let data = await res.json();
            setProjects(data);
        }
        fetchProjects();
    }, [teacher?.teacherInitial]);

    return (
        <div sx={{ mt: 5 }}>
            {
                projects.map(project => <ApproveProject key={project._id} project={project} />)
            }

        </div>
    );
};

export default TeacherHomeProjects;
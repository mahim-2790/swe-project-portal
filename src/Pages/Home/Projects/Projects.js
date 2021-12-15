import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Project from '../Project/Project';
const Projects = () => {
    const [projects, setProjects] = useState([]);
    const { userDetail } = useAuth()
    // console.log('useDetails from project', userDetail);
    useEffect(() => {
        async function fetchProjects() {
            let res = await fetch(`http://localhost:5000/projects/${userDetail?.id}`);
            let data = await res.json();
            setProjects(data);
            sessionStorage.setItem('userId', userDetail?.id);
        }
        fetchProjects();
    }, [userDetail]);

    return (
        <div sx={{ mt: 5 }}>
            {
                projects.map(project => <Project key={project._id} project={project} />)
            }

        </div>
    );
};

export default Projects;
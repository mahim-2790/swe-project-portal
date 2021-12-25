import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Project from '../Project/Project';
const Projects = () => {
    const [projects, setProjects] = useState([]);
    const { userDetail } = useAuth()
    // console.log('useDetails from project', userDetail);
    useEffect(() => {
        async function fetchProjects() {
            let res = await fetch(`https://secure-ravine-11487.herokuapp.com/projects/${userDetail?.id}`);
            let data = await res.json();
            setProjects(data);
            sessionStorage.setItem('user', JSON.stringify(userDetail));
            sessionStorage.setItem('projects', JSON.stringify(data));
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
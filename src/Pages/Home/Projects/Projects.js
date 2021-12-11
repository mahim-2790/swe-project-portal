import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Project from '../Project/Project';
const Projects = () => {
    const [projects, setProjects] = useState([]);
    const { userDetail } = useAuth();
    console.log('user detail', userDetail.id);
    const test = `http://localhost:5000/projects/${userDetail.id}`;
    console.log('test', test);

    useEffect(() => {
        fetch(`http://localhost:5000/projects/${userDetail.id}`)
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [userDetail.id]);

    return (
        <div sx={{ mt: 5 }}>
            {
                projects.map(project => <Project key={project._id} project={project} />)
            }

        </div>
    );
};

export default Projects;
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import ApproveProject from './ApproveProject';
const ApproveProjects = () => {
    const [projects, setProjects] = useState([]);
    const { userDetail } = useAuth()
    // console.log('useDetails from project', userDetail);
    useEffect(() => {
        async function fetchProjects() {
            let res = await fetch(`http://localhost:5000/projects/${userDetail?.id}`);
            let data = await res.json();
            setProjects(data);
            sessionStorage.setItem('userId', userDetail?.id);
            sessionStorage.setItem('projects', JSON.stringify(data));
        }
        fetchProjects();
    }, [userDetail]);

    return (
        <div sx={{ mt: 5 }}>
            {
                projects.map(project => <ApproveProject key={project._id} project={project} />)
            }

        </div>
    );
};

export default ApproveProjects;
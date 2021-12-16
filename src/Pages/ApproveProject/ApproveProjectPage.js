import React from 'react'
import Navbar from '../Shared/Navbar/Navbar'
import ApproveProjects from './ApproveProjects'

export default function ApproveProjectPage() {
    return (
        <div>
             <Navbar component={<ApproveProjects />} />
        </div>
    )
}

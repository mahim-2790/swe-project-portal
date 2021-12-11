
import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';

import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Navbar component={<Projects />} />
        </div>
    );
};

export default Home;
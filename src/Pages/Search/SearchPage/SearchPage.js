import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import SearchProjects from '../SearchProjects/SearchProjects/SearchProjects';

const SearchPage = () => {
    const [searchTittle, setSearchTittle] = useState('');
    const [searchlanguage, setSearchLanguage] = useState([]);
    const [allProjects, setAllProjects] = useState([]);
    const [sendProjects, setSendProjects] = useState(allProjects);
    useEffect(() => {
        fetch(`https://secure-ravine-11487.herokuapp.com/projects`)
            .then(res => res.json())
            .then(data => {
                setAllProjects(data)
                setSendProjects(data)
            })
    }, [])
    // const lang = allProjects.language;
    let fil = [];
    searchlanguage.forEach(element => {
        fil = allProjects.filter(pro => pro.language.find(lang => lang === element))
        console.log(fil);

    });
    //project.tittle.toLowerCase().includes(searchTittle) ||
    useEffect(() => {
        console.log(searchlanguage);
        let filtered = [];
        if (searchlanguage.length === 0) {
            filtered = allProjects.filter(project =>
                project.tittle.toLowerCase().includes(searchTittle)
            );
        } else {
            searchlanguage.forEach(element => {
                filtered = allProjects.filter(pro => pro.language.find(lang => lang === element))
                console.log(filtered);

            });
        }
        setSendProjects(filtered);
    }, [allProjects, searchlanguage, searchTittle])

    return (
        <div>
            <SearchForm
                setSearchTittle={setSearchTittle}
                setSearchLanguage={setSearchLanguage}
            ></SearchForm>
            <SearchProjects
                sendProjects={sendProjects}
            ></SearchProjects>
        </div>
    );
};

export default SearchPage;
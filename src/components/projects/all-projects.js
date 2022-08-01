import { Fragment } from 'react';
import ProjectsGrid from './projects-grid';
import { useState } from 'react';

function AllProjects(props) {
    const [projects, setProjects] = useState(props.projects);

    const onFilterHandler = (e) => {
        e.preventDefault();
        const target = e.target;
        const filterValue = target.dataset.filter;
        const filteredProject = props.projects.filter(
            (pro) => pro.category === filterValue
        );
        filterValue === 'all'
            ? setProjects(props.projects)
            : setProjects(filteredProject);
    };
    return (
        <Fragment>
            <div className='container'>
                <div className='pt-[80px]'>
                    <p>As a Technical Solution Architect, I have been creating data and content-based solutions for the past 20+ years. I have worked as a solo engineer as well as lead teams of developers in implementing enterprise-scale solutions. I have also served as the face of the development effort to non-technical teams including C-level executives, marketers, product owners, and end users.</p>
                </div>
                <div className='pb-[80px] pt-[20px]'>
                    <p>I am committed to crafting the best solutions for clients in a holistic fashion – understanding the broad scope of a client's business to develop strategic solutions that fit within the larger framework of their technical ecosystem.</p>
                </div>
            </div>
            <div className='grid xl:grid-cols-4 fixed-lg:grid-cols-3 fixed-md:grid-cols-2 gap-[5px]'>
                <ProjectsGrid projects={projects} />
            </div>
        </Fragment>
    );
}

export default AllProjects;

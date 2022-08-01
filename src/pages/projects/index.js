import Head from 'next/head';
import { Fragment } from 'react';
import HeaderTwo from '../../components/header/header-2';
import AllProjects from '../../components/projects/all-projects';
import { getAllItems } from '../../lib/items-util';

function allItemsPage(props) {
    return (
        <Fragment>
            <Head>
                <title>All Projects</title>
                <meta
                    name='description'
                    content='A list of all programming-related tutorials and projects!'
                />
            </Head>
            <HeaderTwo />
            <AllProjects projects={props.projects} />
        </Fragment>
    );
}

export function getStaticProps() {
    const allItems = getAllItems('projects');

    return {
        props: {
            projects: allItems,
        },
    };
}

export default allItemsPage;

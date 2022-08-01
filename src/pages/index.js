import { Fragment } from 'react';
import Head from 'next/head';
import { getAllItems } from '../lib/items-util';
import PageBanner from '../components/page-banner/index';
import AllProjects from '../components/projects/all-projects';

function HomePage(props) {
    return (
        <Fragment>
            <Head>
                <title>Personal Portfolio - Lauren Hightower</title>
                <meta
                    name='description'
                    content='The personal portfolio of Lauren Hightower includes sites developed with various tools and technologies including React, Next.js, Sitecore JSS, '
                />
            </Head>
            <PageBanner />
            <AllProjects projects={props.projects} />
        </Fragment>
    );
}

export function getStaticProps() {
    const projects = getAllItems('projects');
   
    return {
        props: {
            projects: projects,
        },
    };
}

export default HomePage;

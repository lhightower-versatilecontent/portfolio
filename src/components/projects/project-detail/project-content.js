import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import ProjectBanner from './project-banner';
import { Fragment } from 'react';
import Link from 'next/link';
import { IoMdGrid } from 'react-icons/io';

function ProjectContent(props) {
    const { project } = props;

    const imagePath = `/images/projects/${project.slug}/${project.image}`;

    const customRenderers = {
        p(paragraph) {
            const { node } = paragraph;

            if (node.children[0].tagName === 'img') {
                const image = node.children[0];

                return (
                    <Fragment>
                        <div className='project-upper-box md:pt-[150px] pt-[55px]'>
                            <div className='container'>
                                <div className='navigation pb-[50px]'>
                                    <Link href='/'>
                                        <a className='flex items-center text-[14px] leading-6 uppercase'>
                                            <IoMdGrid className='text-[20px] mr-5' />
                                            Back to Projects
                                        </a>
                                    </Link>
                                </div>
                                <ul className='info grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3'>
                                    <li>
                                        <span className='text-[#4D5660] mr-[5px]'>
                                            Client:
                                        </span>
                                        {project?.clientName}
                                    </li>
                                    <li>
                                        <span className='text-[#4D5660] mr-[5px]'>
                                            Year(s):
                                        </span>
                                        {project?.date}
                                    </li>
                                    <li>
                                        <span className='text-[#4D5660] mr-[5px]'>
                                            Website:
                                        </span>
                                        {project?.website?.length ? (
                                            <a href={project?.website} target="_blank" rel="noreferrer">
                                                {project?.website}
                                            </a>
                                        ): 'Not publicly accessible'
                                        }
                                            
                                    </li>
                                    <li>
                                        <span className='text-[#4D5660] mr-[5px]'>
                                            Category:
                                        </span>
                                        {project?.category}
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className='project-description md:pt-[80px] pt-[40px]'>
                            <div className='container'>
                                <div className='content'>
                                    <h2 className='text-[36px] leading-[58px] pb-10'>
                                        Description
                                    </h2>
                                    <p className='text-[18px] leading-8 text-secondary mr-[5px] mb-[15px]'>
                                        Technology:&nbsp;
                                        {project.technology}
                                    </p>
                                    <div
                                        className='text-[18px] leading-8 text-secondary'
                                        dangerouslySetInnerHTML={{
                                            __html: project.additionDesc,
                                        }}
                                    />
                                    <div
                                        className='text-[18px] mt-[15px] leading-8 text-secondary'
                                        dangerouslySetInnerHTML={{
                                            __html: project.p2,
                                        }}
                                    />
                                    {project.p3 ? (
                                    <div style={{borderTop: '1px solid #ccc'}}
                                        className='text-[18px] mt-[25px] pt-[25px] leading-8 text-secondary'
                                        dangerouslySetInnerHTML={{
                                            __html: project.p3,
                                        }}
                                    />
                                    ) : ''}
                                </div>
                                <div className='image md:pt-[85px] pt-[50px]'>
                                    <Image
                                        src={`/images/projects/${project.slug}/${image.properties.src}`}
                                        alt={image.alt}
                                        width={1170}
                                        height={610}
                                        objectFit='cover'
                                    />
                                </div>
                            </div>
                        </div>
                    </Fragment>
                );
            }
        },
    };

    return (
        <article>
            <ProjectBanner
                title={project.title}
                excerpt={project.excerpt}
                categoryName={project.categoryName}
                image={imagePath}
            />
            <ReactMarkdown components={customRenderers}>
                {project.content}
            </ReactMarkdown>
        </article>
    );
}

export default ProjectContent;

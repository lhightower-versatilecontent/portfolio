import Link from 'next/link';

function PageBanner() {
    return (
        <div className='page-banner bg-page-banner-1 flex items-end justify-start lg:h-[350px] h-[350px] bg-fixed bg-center bg-cover relative before:absolute before:bg-black before:opacity-40 before:w-full before:h-full'>
            <div className='container'>
                <div className='banner-content pb-[80px] relative'>
                    <span className='text-[18px] leading-[29px] text-white uppercase max-w-[225px] block'>
                        Lauren Hightower
                    </span>
                    <h2 className='sm:text-[100px] text-[30px] sm:leading-[110px] text-white max-w-[320px]'>
                        Portfolio
                    </h2>
                    <span className="text-white hover:text-primary transition-all text-[14px] pt-[15px] uppercase block" >
                    <Link href='/files/Lauren_Hightower_Resume.pdf'>Resume</Link>
                    &nbsp;|&nbsp;
                    <Link href='mailto:lhightower@versatilecontent.com'>
                            Email
                    </Link>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default PageBanner;

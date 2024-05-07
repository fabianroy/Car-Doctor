import img1 from '../../assets/images/about_us/person.jpg';
import img2 from '../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="md:my-6">
            <div className="hero p-10 pb-20">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='md:w-1/2 relative'>
                        <img src={img1} className='w-3/4 h-80 rounded-lg shadow-xl' />
                        <img src={img2} className='w-1/2 h-60 absolute right-5 top-1/2 border-8 border-white shadow-xl' />
                    </div>
                    <div className='md:w-1/2'>
                        <p className='font-bold text-orange-600 mb-2'>About Us</p>
                        <h1 className="text-4xl font-bold">We are qualified & of experience in this field</h1>
                        <p className="my-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
                        <p className='mb-6'>The majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
                        <button className="btn bg-orange-600 text-white">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
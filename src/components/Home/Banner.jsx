import Banner1 from '../../assets/images/banner/1.jpg';
import Banner2 from '../../assets/images/banner/2.jpg';
import Banner3 from '../../assets/images/banner/3.jpg';
import Banner4 from '../../assets/images/banner/4.jpg';
import Banner5 from '../../assets/images/banner/5.jpg';
import Banner6 from '../../assets/images/banner/6.jpg';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full rounded-xl">
                <div id="slide1" className="carousel-item relative w-full h-[600px] ">
                    <img src={Banner1} className="w-full" />
                    <div className="absolute h-full flex left- top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 mt-32 ml-10'>
                            <h2 className='text-7xl font-bold w-2/5'>Affordable Price For Car Servicing</h2>
                            <p className='text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn bg-orange-600 border-none text-white mr-4">Discover More</button>
                                <button className="btn bg-transparent border border-white text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end left-0 right-10 bottom-10">
                        <a href="#slide6" className="btn btn-circle mr-2">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full h-[600px]">
                    <img src={Banner2} className="w-full" />
                    <div className="absolute h-full flex left- top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 mt-32 ml-10'>
                            <h2 className='text-7xl font-bold w-2/5'>Affordable Price For Car Servicing</h2>
                            <p className='text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn bg-orange-600 border-none text-white mr-4">Discover More</button>
                                <button className="btn bg-transparent border border-white text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end left-0 right-10 bottom-10">
                        <a href="#slide1" className="btn btn-circle mr-2">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full h-[600px]">
                    <img src={Banner3} className="w-full" />
                    <div className="absolute h-full flex left- top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 mt-32 ml-10'>
                            <h2 className='text-7xl font-bold w-2/5'>Affordable Price For Car Servicing</h2>
                            <p className='text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn bg-orange-600 border-none text-white mr-4">Discover More</button>
                                <button className="btn bg-transparent border border-white text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end left-0 right-10 bottom-10">
                        <a href="#slide2" className="btn btn-circle mr-2">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide4" className="carousel-item relative w-full h-[600px]">
                    <img src={Banner4} className="w-full" />
                    <div className="absolute h-full flex left- top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 mt-32 ml-10'>
                            <h2 className='text-7xl font-bold w-2/5'>Affordable Price For Car Servicing</h2>
                            <p className='text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn bg-orange-600 border-none text-white mr-4">Discover More</button>
                                <button className="btn bg-transparent border border-white text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end left-0 right-10 bottom-10">
                        <a href="#slide3" className="btn btn-circle mr-2">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide5" className="carousel-item relative w-full h-[600px]">
                    <img src={Banner5} className="w-full" />
                    <div className="absolute h-full flex left- top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 mt-32 ml-10'>
                            <h2 className='text-7xl font-bold w-2/5'>Affordable Price For Car Servicing</h2>
                            <p className='text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn bg-orange-600 border-none text-white mr-4">Discover More</button>
                                <button className="btn bg-transparent border border-white text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end left-0 right-10 bottom-10">
                        <a href="#slide4" className="btn btn-circle mr-2">❮</a>
                        <a href="#slide6" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide6" className="carousel-item relative w-full h-[600px]">
                    <img src={Banner6} className="w-full" />
                    <div className="absolute h-full flex left- top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 mt-32 ml-10'>
                            <h2 className='text-7xl font-bold w-2/5'>Affordable Price For Car Servicing</h2>
                            <p className='text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn bg-orange-600 border-none text-white mr-4">Discover More</button>
                                <button className="btn bg-transparent border border-white text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end left-0 right-10 bottom-10">
                        <a href="#slide5" className="btn btn-circle mr-2">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Banner;
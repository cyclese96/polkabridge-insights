// import ReactStars from 'react-stars'

import 'tw-elements-baron';
import UserList from "./userlist";

export default function Intro() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col md:flex-row gap-6 justify-start mt-8 md:items-start">
                <div id="carouselIntro" className="carousel slide relative md:w-3/4" data-bs-ride="carousel" style={{width:'80%'}}>
                    <div className="carousel-inner relative w-full overflow-hidden rounded-lg">
                        <div className="carousel-item active relative float-left w-full">
                            <img
                                src="/Article1.png"
                                className="block w-full"
                                alt="..."
                            />
                            <div className="carousel-caption hidden md:block absolute text-center">
                                <h5 className="text-xl">World’s Most Dangerous Technology Ever Made.</h5>
                            </div>
                        </div>
                        <div className="carousel-item relative float-left w-full">
                            <img
                                src="/Article2.png"
                                className="block w-full"
                                alt="..."
                            />
                            <div className="carousel-caption hidden md:block absolute text-center">
                                <h5 className="text-xl">Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item relative float-left w-full">
                            <img
                                src="/Article3.png"
                                className="block w-full"
                                alt="..."
                            />
                            <div className="carousel-caption hidden md:block absolute text-center">
                                <h5 className="text-xl">Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item relative float-left w-full">
                            <img
                                src="/Article3.png"
                                className="block w-full"
                                alt="..."
                            />
                            <div className="carousel-caption hidden md:block absolute text-center">
                                <h5 className="text-xl">4th slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item relative float-left w-full">
                            <img
                                src="/Article3.png"
                                className="block w-full"
                                alt="..."
                            />
                            <div className="carousel-caption hidden md:block absolute text-center">
                                <h5 className="text-xl">5th slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item relative float-left w-full">
                            <img
                                src="/Article3.png"
                                className="block w-full"
                                alt="..."
                            />
                            <div className="carousel-caption hidden md:block absolute text-center">
                                <h5 className="text-xl">6th slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                        type="button"
                        data-bs-target="#carouselIntro"
                        data-bs-slide="prev"
                    >
                        <div className='bg-gray-600 w-12 h-12 rounded-full flex justify-center items-center'>
                            <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </div>
                    </button>
                    <button
                        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                        type="button"
                        data-bs-target="#carouselIntro"
                        data-bs-slide="next"
                    >
                        <div className='bg-gray-600 w-12 h-12 rounded-full flex justify-center items-center'>
                            <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </div>
                    </button>
                </div>

                <UserList />

            </div>
        </div>

    );
}

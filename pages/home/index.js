import Image from "next/image";
import Link from "next/link";
// import ReactStars from 'react-stars'

import ReactStars from "react-rating-stars-component";
import 'tw-elements';
import BeginnerSlide from "./beginnerslide";
import CoinsTokensSlide from "./coinstokensslide";
import Divider from "./divider";
import EcosystemsSlide from "./ecosystemsslide";
import LatestSlide from "./latestslide";


export default function Home() {

  return (
    <div className="gap-6">
      <div className="flex flex-col">
        <div className="flex space-x-4 justify-start">
          <Link href="/home/TodaysNews">
            <a>
              <span className="text-white text-2xl">Today’s News</span>
            </a>
          </Link>
          <div className="bg-gradient-to-b from-pink-300 to-pink-500 w-0.5 rounded"></div>
          <Link href="/home/TrendingArticles">
            <a>
              <span className="text-white text-2xl">Trending Articles</span>
            </a>
          </Link>
          <div className="bg-gradient-to-b from-pink-300 to-pink-500 w-0.5 rounded"></div>
          <Link href="/home/DEFIBasics">
            <a>
              <span className="text-white text-2xl">DEFI BASICS</span>
            </a>
          </Link>
          <div className="bg-gradient-to-b from-pink-300 to-pink-500 w-0.5 rounded"></div>
          <Link href="/home/WeeklyTop">
            <a>
              <span className="text-white text-2xl">Weekly Top</span>
            </a>
          </Link>
        </div>

        <div className="flex space-x-12 justify-start mt-12">
          <div id="carouselExampleCaptions" className="carousel slide relative w-3/4" data-bs-ride="carousel">
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
              data-bs-target="#carouselExampleCaptions"
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
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <div className='bg-gray-600 w-12 h-12 rounded-full flex justify-center items-center'>
                <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </div>
            </button>
          </div>




          <div className="bg-gray-200 bg-opacity-5 px-4 py-4 rounded-lg w-1/4">
            <span className="text-white">
              Top Users
            </span>
            <Divider />
            <table className="table-auto border-separate border-spacing w-full mt-4" >
              <tbody>
                <tr>
                  <td>
                    <img src="/Ellipse 80.png" alt="Ellipse80" />
                  </td>
                  <td>
                    <span className="text-white text-sm block">Kristin Watson</span>
                    <span className="text-white text-sm block">35 Posts</span>
                  </td>
                  <td>
                    <ReactStars
                      count={4}
                      active={true}
                      size={20}
                      isHalf={true}
                      activeColor="#ffd700"
                      color="#ffd700"
                    />
                    <span className="text-white text-sm block">See More Info</span>
                  </td>
                </tr>
                <tr className="mt-4">
                  <td>
                    <img src="/Ellipse 81.png" alt="Ellipse81" />
                  </td>
                  <td>
                    <span className="text-white text-sm block">Dasteen</span>
                    <span className="text-white text-sm block">29 Posts</span>
                  </td>
                  <td>
                    <ReactStars
                      count={5}
                      active={true}
                      size={20}
                      isHalf={true}
                      activeColor="#ffd700"
                      color="#ffd700"
                    />
                    <span className="text-white text-sm block">See More Info</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="/Ellipse 82.png" alt="Ellipse82" />
                  </td>
                  <td>
                    <span className="text-white text-sm block">Marvin McKinney</span>
                    <span className="text-white text-sm block">21 Posts</span>
                  </td>
                  <td>
                    <ReactStars
                      count={3}
                      active={true}
                      size={20}
                      isHalf={true}
                      activeColor="#ffd700"
                      color="#ffd700"
                    />
                    <span className="text-white text-sm block">See More Info</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="/Ellipse 83.png" alt="Ellipse83" />
                  </td>
                  <td>
                    <span className="text-white text-sm block">Bessie Cooper</span>
                    <span className="text-white text-sm block">16 Posts</span>
                  </td>
                  <td>
                    <ReactStars
                      count={3}
                      active={true}
                      size={20}
                      isHalf={true}
                      activeColor="#ffd700"
                      color="#ffd700"
                    />
                    <span className="text-white text-sm block">See More Info</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div className="justify-start mt-12">
            <span className="text-white text-2xl">Latest</span>
            <Divider />
          </div>
          <LatestSlide />
        </div>

        <div>
          <div className="justify-start mt-12">
            <span className="text-white text-2xl">Beginner</span>
            <Divider />
          </div>
          <BeginnerSlide />
        </div>

        <div>
          <div className="justify-start mt-12">
            <span className="text-white text-2xl">Coins & Tokens</span>
            <Divider />
          </div>
          <CoinsTokensSlide />
        </div>

        <div>
          <div className="justify-start mt-12">
            <span className="text-white text-2xl">Ecosystems</span>
            <Divider />
          </div>
          <EcosystemsSlide />
        </div>


        <div className="mx-auto mt-12 w-1/2 space-y-8 flex flex-col items-center">
          <img
            src="/image 2 (2).png"
            className="block border rounded-full w-20 h-20 bg-white"
            alt="..."
          />
          <span className="text-2xl text-white">
            Subscribe For the lastest updates
          </span>
          <span className="text-white">
            Dolore ea mollit excepteur sint. Esse ut cupidatat excepteur excepteur adipisicing nostrud adipisicing quis dolor adipisicing elit quis commodo.
          </span>
          <div className="flex space-x-8 w-full px-4">
            <input className="bg-transparent rounded-lg border border-gray-300 px-5 py-3 text-white pl-4 flex-grow w-2/3" type="text" placeholder="Enter your email here...." />
            <button className="bg-gradient-to-r from-pink-300 to-pink-500 px-5 py-3 rounded-xl text-xl font-medium w-1/3">Subscribe</button>
          </div>
        </div>

      </div>


    </div>
  );
}

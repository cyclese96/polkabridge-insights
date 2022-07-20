import Link from "next/link";

import 'tw-elements-baron';
import BeginnerSlide from "./beginnerslide";
import CoinsTokensSlide from "./coinstokensslide";
import Divider from "../../components/divider";
import EcosystemsSlide from "./ecosystemsslide";
import LatestSlide from "./latestslide";
import Intro from "./intro";

export default function Home() {
  return (
    <div className="gap-2 md:gap-6 w-full">
      <div className="flex flex-col">
        <div className="flex space-x-2 md:space-x-4 justify-start">
          <Link href="/home/TodaysNews">
            <a>
              <span className="text-white text-base md:text-2xl">Today’s News</span>
            </a>
          </Link>
          <div className="bg-gradient-to-b from-pink-300 to-pink-500 w-0.5 rounded"></div>
          <Link href="/home/TrendingArticles">
            <a>
              <span className="text-white text-base md:text-2xl">Trending Articles</span>
            </a>
          </Link>
          <div className="bg-gradient-to-b from-pink-300 to-pink-500 w-0.5 rounded"></div>
          <Link href="/home/DEFIBasics">
            <a>
              <span className="text-white text-base md:text-2xl">DEFI BASICS</span>
            </a>
          </Link>
          <div className="bg-gradient-to-b from-pink-300 to-pink-500 w-0.5 rounded"></div>
          <Link href="/home/WeeklyTop">
            <a>
              <span className="text-white text-base md:text-2xl">Weekly Top</span>
            </a>
          </Link>
        </div>

        <Intro />

        <div className="mb-8">
          <div className="justify-start my-12">
            <span className="text-white text-2xl">Latest</span>
            <Divider />
          </div>
          <LatestSlide />
        </div>

        <div className="mb-8">
          <div className="justify-start my-12">
            <span className="text-white text-2xl">Beginner</span>
            <Divider />
          </div>
          <BeginnerSlide />
        </div>

        <div className="mb-8">
          <div className="justify-start my-12">
            <span className="text-white text-2xl">Coins & Tokens</span>
            <Divider />
          </div>
          <CoinsTokensSlide />
        </div>

        <div className="mb-8">
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
          <span className="text-gray-400">
            Dolore ea mollit excepteur sint. Esse ut cupidatat excepteur excepteur adipisicing nostrud adipisicing quis dolor adipisicing elit quis commodo.
          </span>
          <div className="flex space-x-8 w-full px-4">
            <input className="bg-transparent rounded-lg border border-gray-300 px-5 py-3 text-white pl-4 flex-grow w-2/3" type="text" placeholder="Enter your email here...." />
            <button className="bg-gradient-to-r from-pink-300 to-pink-500 px-5 py-3 rounded-xl text-base font-medium w-1/3">Subscribe</button>
          </div>
        </div>

      </div>


    </div>
  );
}

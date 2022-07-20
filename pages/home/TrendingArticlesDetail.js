import Image from "next/image";
import ReactStars from "react-rating-stars-component";
import Link from "next/link";
import 'tw-elements-baron';
import Divider from "../../components/divider";
import React, { useMemo, useEffect, useState } from 'react';
import { useRouter } from "next/router";

export default function TrendingArticlesDetail(props) {
  const router = useRouter();
  const { item } = router.query;
  console.log("item", item);
  const [itemObj, setItemObj] = useState(JSON.parse(item));

  const [cardItems, setCardItems] = useState([]);
  const itemData = {
    image: itemObj.image,
    kind: {
      name: itemObj.category,
      date: itemObj.readTime
    },
    title: itemObj.title,
    content: itemObj.content,
    author: {
      image: 'Ellipse 80.png', //itemObj.user_avatar,
      name: itemObj.user,
      time: itemObj.createdDate
    }
  }
  useMemo(() => {
    setCardItems(itemData);
  }, []);

  return (
    <div className="my-12">
      {/* <div className="flex flex-wrap justify-center gap-8 mt-8"> */}
      <div className="rounded-2xl space-y-8 py-8">
        <span className="text-white text-justify text-4xl mb-4">{itemData.title}</span>
        <div className="flex flex-col md:flex-row md:space-x-8 justify-start">
          <img src={itemData.image} className="object-fill md:w-3/5 h-96 w-full" />
          <div className="bg-gray-200 bg-opacity-5 px-4 py-4 rounded-lg w-full md:w-1/4 mt-4 md:mt-0">
            <span className="text-white">
              Trending
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
        <span className="text-white text-left text-lg inline-block">{itemData.content}</span>
        <table className="table-auto my-4 w-full">
          <tbody>
            <tr>
              <td>
                <div className="flex space-x-8">
                  <img src={itemData.author.image}
                    className="block"
                    alt="..."
                  />
                  <div>
                    <span className="text-white text-xl text-left block">{itemData.author.name}</span>
                    <span className="text-white text-xl text-left block">See More Info</span>
                  </div>
                </div>
              </td>
              <td className="" align="right">
                <div>
                  <div className="items-center">
                    <div className="flex items-center space-x-4">
                      <img src="TrendingArticlesDetail/Vector (2).png"
                        className="scale-75 bg-gradient-to-r from-pink-500 to-pink-300 py-1 px-1"
                        alt="..."
                      />
                      <img src="TrendingArticlesDetail/Vector (3).png"
                        className="scale-75 bg-gradient-to-r from-pink-500 to-pink-300 py-1 px-1"
                        alt="..."
                      />
                      <img src="TrendingArticlesDetail/Rectangle 316.png"
                        className="scale-75 bg-gradient-to-r from-pink-500 to-pink-300 py-1 px-1"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div className="flex">
                    <span className="text-white text-xl text-pink-500 text-right">Share: </span>
                    <img src="TrendingArticlesDetail/Vector (4).png"
                      className="scale-50"
                      alt="..."
                    />
                    <img src="TrendingArticlesDetail/Vector-1.png"
                      className="scale-50"
                      alt="..."
                    />
                    <img src="TrendingArticlesDetail/Vector (5).png"
                      className="scale-50"
                      alt="..."
                    />
                    <img src="TrendingArticlesDetail/Vector (6).png"
                      className="scale-50"
                      alt="..."
                    />
                    <img src="TrendingArticlesDetail/Vector (7).png"
                      className="scale-50"
                      alt="..."
                    />
                    <img src="TrendingArticlesDetail/Vector (8).png"
                      className="scale-50"
                      alt="..."
                    />
                    <img src="TrendingArticlesDetail/Vector (9).png"
                      className="scale-50"
                      alt="..."
                    />
                    <img src="TrendingArticlesDetail/Vector (10).png"
                      className="scale-50"
                      alt="..."
                    />
                    <img src="TrendingArticlesDetail/Vector (11).png"
                      className="scale-50"
                      alt="..."
                    />
                  </div>
                </div>
              </td>
              <td>

              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* </div> */}
    </div>

  );
}

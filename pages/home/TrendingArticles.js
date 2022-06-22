import Image from "next/image";
import Link from "next/link";
import 'tw-elements';
import Divider from "../../components/divider";
import SlideCard from "../../components/slidecard";
import React, { useMemo, useEffect, useState } from 'react';

export default function TrendingArticles(props) {
    const [cardItems, setCardItems] = useState([]);

    useMemo(() => {
        const itemData = [
            {
                image: 'Rectangle33.png',
                kind: {
                    name: 'Fantasy',
                    date: 1
                },
                title: 'How to make GUI in Java with example example',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ullamcorper suspendisse at mi nulla volutpat.',
                author: {
                    image: 'Ellipse 80.png',
                    name: 'Dasteen',
                    time: 3
                }
            },
            {
                image: 'Article_Image.png',
                kind: {
                    name: 'Fantasy',
                    date: 2
                },
                title: 'How to make GUI in Java with example example',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ullamcorper suspendisse at mi nulla volutpat.',
                author: {
                    image: 'Ellipse 81.png',
                    name: 'Kristin Watson',
                    time: 3
                }
            },
            {
                image: 'Rectangle34.png',
                kind: {
                    name: 'Fantasy',
                    date: 2
                },
                title: 'How to make GUI in Java with example example',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ullamcorper suspendisse at mi nulla volutpat.',
                author: {
                    image: 'Ellipse 82.png',
                    name: 'Marvin McKinney',
                    time: 3
                }
            },
            {
                image: 'Rectangle33.png',
                kind: {
                    name: 'Fantasy',
                    date: 1
                },
                title: 'How to make GUI in Java with example example',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ullamcorper suspendisse at mi nulla volutpat.',
                author: {
                    image: 'Ellipse 80.png',
                    name: 'Dasteen',
                    time: 3
                }
            },
            {
                image: 'Article_Image.png',
                kind: {
                    name: 'Fantasy',
                    date: 2
                },
                title: 'How to make GUI in Java with example example',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ullamcorper suspendisse at mi nulla volutpat.',
                author: {
                    image: 'Ellipse 81.png',
                    name: 'Kristin Watson',
                    time: 3
                }
            },
            {
                image: 'Rectangle34.png',
                kind: {
                    name: 'Fantasy',
                    date: 2
                },
                title: 'How to make GUI in Java with example example',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ullamcorper suspendisse at mi nulla volutpat.',
                author: {
                    image: 'Ellipse 82.png',
                    name: 'Marvin McKinney',
                    time: 3
                }
            }
        ];
        setCardItems(itemData);
    }, []);

    const slides = cardItems.map(function (data, idx) {
        return <SlideCard key={idx} item={data} />
    });
    return (
        <div className="my-12">
            <div className="justify-start my-12 mx-12">
                <div className="mb-4">
                    <span className="text-white text-2xl">Trending Articles</span>
                </div>
                <Divider />
            </div>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
                {slides}
            </div>
        </div>

    );
}

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import SlideCard from "../../components/slidecard";
import React, { useMemo, useEffect, useState } from 'react';
import axios from 'axios';
// require("dotenv").config();
import moment from 'moment'


export default function LatestSlide(props) {
    const [cardItems, setCardItems] = useState([]);
    // const getDiffMonth = ((now, then) => {
    //     var ms = moment(now, "YYYY-MM-DDTHH:mm:ss").diff(moment(then, "YYYY-MM-DDTHH:mm:ss"));
    //     var d = moment.duration(ms);
    //     var diff_month = parseInt(d / 1000 / 3600 / 24 / 30);
    //     return diff_month;
    // });
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(
                "http://localhost:5001/post_apis/posts/1", {
                // mode: 'no-cors',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    // Accept : 'application/json',
                    // 'Content-Type' : 'application/json',
                    'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjMmEwZTJiZjA1MzJmODQyMDI2ODhkIn0sImlhdCI6MTY1NjkyMjMzOCwiZXhwIjoxNjU3MzU0MzM4fQ.WzrC5_WCCiaKEiiLrbO25f4sqYICP5LfcK5_XgOJKl8'
                },
            }).catch(e => console.log("error", e))
            // console.log('response-data: ', response.data[0]);
            // var now = new Date();//"2023-09-06T9:10:20";
            // var then = response.data[0].date;
            // console.log(getDiffMonth(now, then));

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
        }
        getData();
        // console.log(response.data);
    }, []);

    console.log("***************")
    console.log(cardItems);
    // const slides =;
    return (
        <Carousel centerMode={true} centerSlidePercentage={33.33} selectedItem={1} showThumbs={false} showStatus={false} showIndicators={false}>
            {cardItems.map((data, idx) =>
                <SlideCard key={idx} item={data} />
            )}
        </Carousel>
    );
}

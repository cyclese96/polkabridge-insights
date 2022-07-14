import axios from "axios";
import React, { useState, useEffect } from "react";
import SlideCard from "../../components/slidecard";
import { API_URL } from "../../config"


const items = [
    {
        image: 'Rectangle33.png',
        kind: {
            name: 'Fantasy1',
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
            name: 'Fantasy2',
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
            name: 'Fantasy3',
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
            name: 'Fantasy4',
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
            name: 'Fantasy5',
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
            name: 'Fantasy6',
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


const Card = (props) => {
    return (
        <li className="card">
            {/* <span class="material-icons">{props.icon}</span> */}
            {/* <p>{props.copy}</p> */}
            <SlideCard {...props} />
        </li>
    )
}

const LatestSlide = () => {

    const [moveClass, setMoveClass] = useState('');
    const [carouselItems, setCarouselItems] = useState([]);//items);

    useEffect(() => {
        // if (carouselItems.length === 0) {
        axios.get(
            API_URL+'/post_apis/recent',
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                }
            }
        ).then(response => {
            let data = response.data;
            // data.push(data[0]);
            setCarouselItems(data);

            console.log(response.data);

            console.log('response.data.length: ', response.data.length, response.data);
            console.log('carouselItems: ', carouselItems.length, carouselItems);            
            document.documentElement.style.setProperty('--num', carouselItems.length);
        });
        // }
    }, [])

    const handleAnimationEnd = () => {
        if (moveClass === 'prev') {
            shiftNext([...carouselItems]);
        } else if (moveClass === 'next') {
            shiftPrev([...carouselItems]);
        }
        setMoveClass('')
    }

    const shiftPrev = (copy) => {
        let lastcard = copy.pop();
        copy.splice(0, 0, lastcard);
        setCarouselItems(copy);
    }

    const shiftNext = (copy) => {
        let firstcard = copy.shift();
        copy.splice(copy.length, 0, firstcard);
        setCarouselItems(copy);
    }

    return (
        <div className="carousellwrapper module-wrapper">

                <div className="ui">
                    <button onClick={() => setMoveClass('next')} className="prev">
                        <span className="material-icons">chevron_left</span>
                    </button>
                    <button onClick={() => setMoveClass('prev')} className="next">
                        <span className="material-icons">chevron_right</span>
                    </button>
                </div>
            
            {carouselItems.length > 0 &&
            <ul onAnimationEnd={handleAnimationEnd} className={`${moveClass} carousell`}>
                {carouselItems.map((data, idx) =>
                    <Card key={idx} item={data} />
                )}
            </ul>
            }
        </div>
    )
}

export default LatestSlide;
import axios from "axios";
import React, { useState, useEffect, useMemo } from "react";
import SlideCard from "../../components/slidecard";
import { API_URL } from "../../config"

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
    const [carouselItems, setCarouselItems] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                API_URL + '/post_apis/recent',
                {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                    }
                }
            )
            const data = response.data;
            for (let i = 0; i < data.length; i++) {
                data[i].user_avatar = data[i].user.avatar;
                data[i].user = data[i].user.name;
            }
            setCarouselItems(data);
            document.documentElement.style.setProperty('--num', data.length);
        };
        fetchData();
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

            {carouselItems &&
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
import React, { useState, useEffect } from "react";
import SlideCard from "../../components/slidecard";

// const items = [
//     {
//         icon: "face",
//         copy: '01. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
//     }, {
//         icon: "pets",
//         copy: '02. Sed do eiusmod tempor incididunt ut labore.'
//     }, {
//         icon: "stars",
//         copy: '03. Consectetur adipiscing elit.'
//     }, {
//         icon: "invert_colors",
//         copy: '04. Ut enim ad minim veniam, quis nostrud exercitation.'
//     }, {
//         icon: "psychology",
//         copy: '05. Llamco nisi ut aliquip ex ea commodo consequat.'
//     }, {
//         icon: "brightness_7",
//         copy: '06. Misi ut aliquip ex ea commodo consequat.'
//     }
// ];

const items = [
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

const Card = (props) => {
    return (
        <li className="card">
            {/* <span class="material-icons">{props.icon}</span> */}
            {/* <p>{props.copy}</p> */}
            <SlideCard {...props} />
        </li>
    )
}

const CoinsTokensSlide = () => {
    const [moveClass, setMoveClass] = useState('');
    const [carouselItems, setCarouselItems] = useState(items);

    useEffect(() => {
        document.documentElement.style.setProperty('--num', carouselItems.length);
    }, [carouselItems])

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
            <ul onAnimationEnd={handleAnimationEnd} className={`${moveClass} carousell`}>
                {carouselItems.map((data, idx) =>
                    <Card key={idx} item={data} />
                )}
            </ul>
        </div>
    )
}

export default CoinsTokensSlide;
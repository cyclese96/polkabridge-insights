import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import SlideCard from "./slidecard";


var cardItems = [
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
            name:  'Dasteen',
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
            name:  'Kristin Watson',
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
            name:  'Marvin McKinney',
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
            name:  'Dasteen',
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
            name:  'Kristin Watson',
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
            name:  'Marvin McKinney',
            time: 3
        }
    }
]

export default function LatestSlide(props) {
    return (
        <Carousel centerMode={true} centerSlidePercentage={33.33} selectedItem={1} showThumbs={false} showStatus={false} showIndicators={false}>            
            <SlideCard item = {cardItems[0]}/>
            <SlideCard item = {cardItems[1]}/>
            <SlideCard item = {cardItems[2]}/>
            <SlideCard item = {cardItems[3]}/>
            <SlideCard item = {cardItems[4]}/>
            <SlideCard item = {cardItems[5]}/>
        </Carousel>
    );
}

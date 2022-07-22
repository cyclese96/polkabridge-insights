import Image from "next/image";
import Link from "next/link";
import 'tw-elements-baron';
import Divider from "../../components/divider";
import SlideCard from "../../components/slidecard";
import React, { useMemo, useEffect, useState } from 'react';
import axios from "axios";
import { API_URL } from "../../config"
import { SLIDE_LIMIT } from "../../config"


export default function DEFIBasics(props) {
    const [cardItems, setCardItems] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                API_URL + '/post_apis/posts/public/defibasics/1',
                {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                    }
                }
            )
            const data = response.data;
            data.length = data.length > SLIDE_LIMIT ? SLIDE_LIMIT: data.length;
            for (let i = 0; i < data.length; i++) {
                data[i].user_avatar = data[i].user.avatar;
                data[i].user = data[i].user.name;
                data[i].monthAgo = 0;
            }
            setCardItems(data);
        };
        fetchData();        
    }, [])

    const slides = cardItems.map(function (data, idx) {
        return <SlideCard key={idx} item={data} />
    });
    return (
        <div className="my-12">
            <div className="justify-start mt-12 mx-12">
                <div className="mb-4">
                    <span className="text-white text-2xl">DEFI Basics</span>
                </div>
                <Divider />
            </div>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
                {slides}
            </div>
        </div>

    );
}

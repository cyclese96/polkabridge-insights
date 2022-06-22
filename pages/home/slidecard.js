import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export default function SlideCard(props) {
    return (
        <div className="mx-8 my-8 border border-slate-800 rounded-lg px-4 py-4">
            <img src={props.item.image} />
            <div className="flex my-4">
                <span className="text-white text-sm mr-8">{props.item.kind.name}</span>
                <span className="text-white text-sm mr-8">·</span>
                <span className="text-gray-400 text-sm">{props.item.kind.date} Month Ago </span>
            </div>
            <span className="text-white text-left text-2xl inline-block mb-4">{props.item.title}</span>
            <span className="text-gray-400 text-left text-sm inline-block">{props.item.content}</span>
            <table className="table-auto my-4 w-full">
                <tbody>
                    <tr>
                        <td width='20%'>
                            <img src={props.item.author.image}
                                className="block"
                                alt="..."
                            />
                        </td>
                        <td>
                            <span className="text-white text-sm text-left block">{props.item.author.name}</span>
                            <span className="text-white text-sm text-left block">{props.item.author.time} min Read</span>
                        </td>
                        <td align="middle">
                            <span className="text-white text-sm block"></span>
                            <span className="text-white text-left text-sm block mr-4">∙</span>
                        </td>
                        <td className="whitespace-nowrap w-px" align="right">
                            <div>
                                <div className="items-center">
                                    <div className="flex items-center">
                                        <span className="text-white text-sm ">
                                            Read Full
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="grow">
                                    <span className="text-white text-sm text-right">See More Info</span>
                                </div>
                            </div>
                        </td>
                        <td>

                        </td>
                    </tr>
                </tbody>
            </table>
        </div>


    );
}

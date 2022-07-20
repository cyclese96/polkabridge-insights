import 'tw-elements-baron';
import ReactStars from "react-rating-stars-component";
import Divider from "../../components/divider";

const items = [
    {
        avatar: 'Ellipse 80.png',
        name: 'Kristin Watson',
        posts: 35,
        score: 1
    },
    {
        avatar: 'Ellipse 81.png',
        name: 'Kristin Watson2',
        posts: 35,
        score: 5
    },
    {
        avatar: 'Ellipse 82.png',
        name: 'Kristin Watson3',
        posts: 35,
        score: 2
    },
    {
        avatar: 'Ellipse 83.png',
        name: 'Kristin Watson4',
        posts: 35,
        score: 3
    }
]

export default function UserList() {
    const TopUsers = items.map((data, idx) =>
        <tr key={idx}>
            <td>
                <img src={data.avatar} alt={data.avatar} />
            </td>
            <td>
                <span className="text-white text-sm block">{data.name}</span>
                <span className="text-white text-sm block">{data.posts} Posts</span>
            </td>
            <td>
                <ReactStars
                    count={data.score}
                    active={true}
                    size={20}
                    isHalf={true}
                    activeColor="#ffd700"
                    color="#ffd700"
                />
                <span className="text-white text-sm block">See More Info</span>
            </td>
        </tr>
    )
    return (
        <div className="bg-gray-200 bg-opacity-5 px-4 py-4 rounded-lg w-full md:w-1/4">
            <span className="text-white">
                Top Users
            </span>
            <Divider />
            <table className="table-auto border-separate border-spacing w-full mt-4" >
                <tbody>
                    {TopUsers}
                </tbody>
            </table>
        </div>
    )
}
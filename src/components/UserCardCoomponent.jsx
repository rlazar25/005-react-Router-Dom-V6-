import { Link } from "react-router-dom"

function UserCardComponent({ user }) {
    return (
        <div className="w-[200px] border border-blue-300 rounded-lg flex flex-col items-center justify-center p-2">
            <img src={user.image} alt="" />
            <div className="self-start">
                <h2>{user.firstName} {user.lastName}</h2>
                <h5>{user.age}yo</h5>
                <h5>Gender: {user.gender === 'female' ? <span className="text-pink-600">{user.gender}</span> : <span className="text-blue-600">{user.gender}</span>}</h5>
            </div>
            <Link to={`/singleUser/${user.id}`} className=" bg-slate-300 px-4 py-2 rounded-xl my-2 hover:bg-slate-800 hover:text-white">About User</Link>
        </div>
    )
}

export default UserCardComponent
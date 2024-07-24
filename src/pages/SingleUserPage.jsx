import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingPage from "./LoadingPage";

function SingleUserPage() {

    const { id } = useParams();
    const [singleUser, setSingleUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        fetch(`https://dummyjson.com/users/${id}`)
            .then(res => res.json())
            .then(data => {
                setIsLoading(true);
                setSingleUser(data);
            })
    }, [])

    return (
        <div className=" flex my-4 items-center">
            {isLoading ? <>
                <div className="w-[50%] flex flex-col items-center"  >
                <img width={'300px'} src={singleUser.image} alt="" />
                <h1>{singleUser.firstName} {singleUser.lastName}</h1>
            </div>
            <div className="w-[50%]" >
                <h1>Name: {singleUser.firstName} {singleUser.lastName}</h1>
                <h3>Age: {singleUser.age}</h3>
                <h3>Ganeder: {singleUser.gender}</h3>
                <h3>Email: {singleUser.email}</h3>
                <h3>Phone: {singleUser.phone}</h3>
                <h3>Birth Day: {singleUser.birthDate}</h3>
                <h3>Height: {singleUser.height}cm   </h3>
                <h3>weight: {singleUser.weight}kg</h3>
                <h3>Role: {singleUser.role === 'admin' ? < span className="text-red-600"> {singleUser.role}</span> : <span> {singleUser.role}</span>}</h3>

            </div></> : <LoadingPage />}

           
        </div>
    )
}

export default SingleUserPage;
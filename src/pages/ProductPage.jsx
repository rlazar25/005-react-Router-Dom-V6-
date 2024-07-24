import { useEffect, useState } from "react"
import UserCardComponent from "../components/UserCardCoomponent";
import LoadingPage from "./LoadingPage";


function ProductPage() {

    const [allUsers, setAllUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(data => {
                setIsLoading(true)
                setAllUsers(data.users)
            })
    }, [])

    return (
        <div>
            <h1 className="title">All Users</h1>

            <div className="flex flex-wrap justify-center items-center gap-5">
                {isLoading ? allUsers.map((user) => {
                    return <UserCardComponent key={user.id} user={user} />
                }) : <LoadingPage />}
            </div>
        </div>
    )
}

export default ProductPage
import { Link } from "react-router-dom"

function ErrorPage(){
    return (
        <div className="h-[100vh] flex flex-col items-center justify-center">
            <h1 className="absolute top-0 text-[2rem] text-red-600 font-bold">Error Page</h1>

            <Link to='/' className="bg-slate-700 text-white py-2 px-4 rounded-xl">BACK TO HOME</Link>
        </div>
    )
}

export default ErrorPage
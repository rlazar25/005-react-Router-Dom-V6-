function LoadingPage() {
    return (
        <div className="absolute top-0 left-0 bg-slate-500 h-[100vh] w-[100vw] flex items-center justify-center">
            <div className="loadingspinner">
                <div id="square1"></div>
                <div id="square2"></div>
                <div id="square3"></div>
                <div id="square4"></div>
                <div id="square5"></div>
            </div>
        </div>
    )
}

export default LoadingPage;
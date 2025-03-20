
import Screen from "../Screen/Screen";
import "./Home.css"

const Home = () => {
    return (
        <>
            <div className="container camera-frame">
                <h1>Hi, it's <span>Siddhant</span></h1>
                <h2>I'm a Fullstack Web Developer</h2>
                <div className="underline"></div>
                <Screen/>
            </div>
        </>
    )
}

export default Home;
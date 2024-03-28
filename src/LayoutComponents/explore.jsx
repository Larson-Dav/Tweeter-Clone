import { ExploreTrends } from "./explorecomponents/exploretrends";
import '../main.css'

export function Explore() {
    return (
        <>
            <div className="explore-container">
                <div className="explore-input-box">
                    <input placeholder="Search" className="explore-input"></input>
                </div>
                <div><p className="explore-gear">⚙️</p></div>
            </div>
            <div className="explore-title-container">
                <h1 className="explore-title">Trends for you</h1>
            </div>
            <ExploreTrends></ExploreTrends>
            <ExploreTrends></ExploreTrends>
            <ExploreTrends></ExploreTrends>
            <ExploreTrends></ExploreTrends>
            <ExploreTrends></ExploreTrends>
            <hr />
        </>
    )
}
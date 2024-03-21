import { ExploreTrends } from "./explorecomponents/exploretrends";

export function Explore() {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ marginLeft: '8px' }}>
                    <input placeholder="Search" style={{ marginTop: '10px', width: '600px', height: '40px', borderRadius: '30px', border: 'none', backgroundColor: '#202327' }}></input>
                </div>
                <div>
                    <p style={{ fontSize: '25px', marginRight: '10px', marginTop: '15px' }}>⚙️</p>
                </div>
            </div>
            <div style={{ backgroundColor: '#000', height: '90px', marginBottom: '-30px' }} >
                <h1 style={{ marginLeft: '10px' }}>Trends for you</h1>
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
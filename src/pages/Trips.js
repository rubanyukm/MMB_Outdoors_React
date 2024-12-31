import '../css/trips.css';
import Trails from '../components/Trails';

export default function Trips() {

    let IndianTitle = 'Indian Head';
    let IndianDesc = "The Indian Head and Rainbow Falls trail in the Adirondack Mountains of New York is a popular and scenic hike known for its breathtaking views. This challenging loop is approximately 10 miles long, featuring diverse landscapes, including forested paths, steep ascents, and rewarding lookout points. The highlight is the iconic view from Indian Head, where you can gaze over Lower Ausable Lake and surrounding mountains. We had to hike up and over one of the passes to sneak in from the back since we couldn't get permits.";
    let IndianSrc = 'https://www.alltrails.com/widget/recording/evening-hike-at-indian-head-and-rainbow-falls-243facb?u=i&sh=dxd3vd';

    return (
        <body>
            <div id="trips-div">
                <h1 className='trips-h1'>Trips</h1>
                <div className='image-div'>
                    <img src='/gallery/ADK/20.jpg' alt='Indian Head Hike'></img>
                </div>
                <div className='Indian-Head'>
                    <h2>{IndianTitle}</h2>
                    <p>{IndianDesc}</p>
                </div>
                <iframe className="Trail" src={IndianSrc} title="Trail Map"></iframe>
            </div>
        </body>
    )

}
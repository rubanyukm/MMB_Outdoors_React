import '../css/trips.css';
import Trails from '../components/Trails';

export default function Trips() {

    const trailData = {
        imageSrc: '/gallery/ADK/20.jpg',
        trailTitle: 'Indian Head',
        trailDesc: `The Indian Head and Rainbow Falls trail in the Adirondack Mountains of New York is a popular and scenic hike known for its breathtaking views. 
        This challenging loop is approximately 10 miles long, featuring diverse landscapes, including forested paths, steep ascents, and rewarding lookout points. 
        The highlight is the iconic view from Indian Head, where you can gaze over Lower Ausable Lake and surrounding mountains. We had to hike up and over one of the passes to sneak in from the back since we couldn't get permits.`,
        trailSrc: 'https://www.alltrails.com/widget/recording/evening-hike-at-indian-head-and-rainbow-falls-243facb?u=i&sh=dxd3vd',
    };

    return (
        <body>
            <h1 className="trips-h1">Trips</h1>
            <Trails
            imageSrc={trailData.imageSrc}
            trailTitle={trailData.trailTitle}
            trailDesc={trailData.trailDesc}
            trailSrc={trailData.trailSrc}
            />
        </body>
    )

}
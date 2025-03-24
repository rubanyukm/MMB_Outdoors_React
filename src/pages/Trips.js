import '../css/trips.css';
import Trails from '../components/Trails';

export default function Trips() {

    const IndianHead = {
        imageSrc: '/gallery/ADK/55.jpg',
        trailTitle: 'Indian Head',
        trailDesc: `The Indian Head and Rainbow Falls trail in the Adirondack Mountains of New York is a popular and scenic hike known for its breathtaking views. 
        This challenging loop is approximately 10 miles long, featuring diverse landscapes, including forested paths, steep ascents, and rewarding lookout points. 
        The highlight is the iconic view from Indian Head, where you can gaze over Lower Ausable Lake and surrounding mountains.`,
        trailSrc: 'https://www.alltrails.com/widget/recording/evening-hike-at-indian-head-and-rainbow-falls-243facb?u=i&sh=dxd3vd',
    };

    const StantonLake = {
        imageSrc: '/gallery/Montana/IMG_4388.jpg',
        trailTitle: 'Stanton Lake',
        trailDesc: `The Stanton Lake Trail in Montana is a short, scenic hike just under 4 miles round trip, located in Flathead National Forest near Glacier National Park. The trail gently climbs through quiet pine forest before opening up to the serene waters of Stanton Lake, framed by dramatic alpine peaks like Great Northern Mountain. It's a peaceful spot with beautiful reflections on calm days, offering a rewarding view without a strenuous climb—perfect for a quick nature escape.`,
        trailSrc: 'https://www.alltrails.com/widget/trail/us/montana/stanton-lake?u=i&sh=dxd3vd',
    };

    const Highline = {
        imageSrc: '/gallery/Montana/IMG_4303.jpg',
        trailTitle: 'The Highline',
        trailDesc: `The Highline Trail is an iconic alpine hike that offers some of the most breathtaking scenery in Glacier National Park—and honestly, in all of North America. Traversing along the Continental Divide, this trail gives hikers panoramic views of rugged peaks, glacial valleys, wildflower-filled meadows, and the chance to spot mountain goats, bighorn sheep, bears, and more along the way.`,
        trailSrc: 'https://www.alltrails.com/widget/trail/us/montana/highline-trail?u=i&sh=dxd3vd',
    };

    return (
        <body>
            <h1 className="trips-h1">Trails</h1>
            <Trails
            imageSrc={IndianHead.imageSrc}
            trailTitle={IndianHead.trailTitle}
            trailDesc={IndianHead.trailDesc}
            trailSrc={IndianHead.trailSrc}
            />
            <Trails 
            imageSrc={StantonLake.imageSrc}
            trailTitle={StantonLake.trailTitle}
            trailDesc={StantonLake.trailDesc}
            trailSrc={StantonLake.trailSrc}
            />
            <Trails 
            imageSrc={Highline.imageSrc}
            trailTitle={Highline.trailTitle}
            trailDesc={Highline.trailDesc}
            trailSrc={Highline.trailSrc}
            />
        </body>
    )

}
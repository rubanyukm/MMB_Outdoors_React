import '../css/home.css';

export default function Home() {
    return (
        <body>
            <div id="home-div">
                <h1 className='home-h1'>Welcome</h1>
                <h2 className='mmb-h2'>MMB Outdoors</h2>
                <img className='group-photo' src={require('../images/group.jpg')} />
                <p className='home-p'>Lorem Ipsum Dolor Sit Amet</p>
            </div>
        </body>
    )

}
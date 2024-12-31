import '../css/trails.css';

export default function Trails({imageSrc, trailSrc, trailTitle, trailDesc}) {

    let trail = trailSrc;
    let title = trailTitle;
    let desc = trailDesc;

    return (
        <>
            <div className="Trail-Div">
                <div className="Trail-TextContainer">
                    <h2 className="Trail-Title">{trailTitle}</h2>
                    <p className="Trail-Desc">{trailDesc}</p>
                </div>
                <div className="All-Trail">
                    <iframe
                        className="Trail"
                        src={trailSrc}
                        title={`${trailTitle} Map`}
                        frameBorder="0"
                        scrolling="no"
                    ></iframe>
                </div>
                <div className="image-div">
                    <img src={imageSrc} alt={`${trailTitle} Image`} />
                </div>
            </div>
        </>
    )

}
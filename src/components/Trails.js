import '../css/trails.css';

export default function Trails({trailSrc, trailTitle, trailDesc}) {

    let trail = trailSrc;
    let title = trailTitle;
    let desc = trailDesc;

    return (
        <>
            <div className="Trail-Div">
                <div className="Trail-TextContainer">
                    <h2 className="Trail-Title">{title}</h2>
                    <p className="Trail-Desc">{desc}</p>
                </div>
                <div className="All-Trail">
                    <iframe className="Trail" src={trail} width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="AllTrails: Trail Guides and Maps for Hiking, Camping, and Running"></iframe>
                </div>
            </div>
        </>
    )

}
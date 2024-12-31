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
                    <iframe className="Trail" src={trail} frameborder="0" scrolling="no"></iframe>
                </div>
            </div>
        </>
    )

}
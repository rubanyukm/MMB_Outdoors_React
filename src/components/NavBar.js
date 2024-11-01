
import '../css/NavBar.css';
import { Link } from "react-router-dom";
import { Toggle } from "./Toggle.js"

export function NavBar() {
    return (
        <div id="NavBar-div">
            <Link className="Link" to="/">
                <button className='button-80'>Test</button>
            </Link>
            <Link className="Link">
                <Toggle/>
            </Link>
        </div>
    );
}
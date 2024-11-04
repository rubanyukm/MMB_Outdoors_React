import '../css/gallery.css';
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { slides } from '../utils/data.js';
import Images from '../components/Images.tsx';

//optional plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function Gallery() {
    const [index, setIndex] = useState(-1);

    return (
        <>
            <h1>Trip Photos</h1>
            <Images
            data={slides}
            onClick={(currentIndex) => setIndex(currentIndex)}
            />

            <Lightbox
            plugins={[Fullscreen, Zoom, Thumbnails]}
            captions={{
                showToggle: true,
                descriptionTextAlign: 'end',
            }}
            // open={open}
            // close={() => setOpen(false)}

            index={index}
            open={index >= 0}
            close={() => setIndex(-1)}
            slides={slides}
            />
        </>
    )

}
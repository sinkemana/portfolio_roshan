import { useState, useEffect, useRef } from "react";

const ImageCard = (props) => {
    const { description, urls } = props.image;
    const [spans, setSpans] = useState(0);
    const imageRef = useRef();

    //manipulate image size
    useEffect(() => {
        const image = imageRef.current;
        if (image) {
        image.addEventListener('load', setSpan);
        return () => {
            image.removeEventListener('load', setSpan);
        }
         }
    }, [])

    const setSpan = () => {
        const height = imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        setSpans(spans);
    };
    return (
        <div style={{ gridRowEnd: `span ${spans}` }}>
            <img
                ref={imageRef}
                alt={description}
                src={urls.regular}
            />
        </div>
    )
}
export default ImageCard;
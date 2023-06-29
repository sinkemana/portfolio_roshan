import ImageCard from "./ImageCard";
import styled from "styled-components";

const StyleImageList = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: stretch;
gap: 0 10px;
padding: 1rem .5rem 0 .5rem;
background-color: black;

img {
    width: 250px;
    border-radius: 10px;
  }
`;


const ImageList = (props) => {
    if (props.images.length !== 0) {
        const images = props.images.map((image) => {
            return <ImageCard key={image.id} image={image} />
        })
        return (
            <StyleImageList>
                {images}
            </StyleImageList>
            // <div className="image-list">
            // </div>
        )
    }
    else {
        return <div className="ui text">Please make Search</div>
    }


}
export default ImageList;
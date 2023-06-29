import { useState } from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import unsplash from "../../api/unsplash";

const PicMain = () => {
    const [image, setImage] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    const onSearchSubmit = async (searchTerm) => {
        try {
            setLoading(true);
            setError(null);
            const response = await unsplash({
                method: 'get',
                url: '/search/photos',
                params: { query: searchTerm }
            });
            setImage(response.data.results)
            
        } catch (error) {
            setError('Something went wrong')
        } finally {
            setLoading(false)
        }

    }
    return (
        <div className="ui container pic">
            <SearchBar onSubmit={onSearchSubmit} />
            {
                loading ?
                    (
                        <div className="ui segment">
                            <div className="ui active inverted dimmer">
                                <div className="ui text loader">Loading</div>
                            </div>
                        </div>
                    ) : error ?
                        (
                            <div className="ui negative message">{error}</div>

                        ) : (
                            <ImageList images={image}/>
                        )
            }
        </div>
    )
}

export default PicMain;
import React from "react";
import { useFetchGifs } from "../Hooks/useFetchGifs";
// import { getGifs } from "../Helpers/GetGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);
 const {data:images,loading} =  useFetchGifs(category);
 
  // // only render this function one  time,
  // useEffect(() => {
  //   getGifs(category).then(imgs => setImages(imgs));
  // }, [category]);

  

  return (
    <>
    <h3 className="card animate__animated animate__swing">{category}</h3>

    {
      loading && <p className="card animate__animated animate__backInLeft">Loading....</p>
    }
 
      <div className="card-grid">
        <ol>
          {images.map((img) => {
            return <GifGridItem key={img.id} {...img} />;
          })}
        </ol>
      </div>
    </>
  );
};

import React from 'react';
import './ImageList.css'
import ImageCard from './ImageCard'

const ImageList = (props) => {

    const imageList = props.images.map((image) =>{
        return(
            <ImageCard key={image.id}  image={image}/>
        )
    })
    return(
        <div className='image-list'>
            {imageList}
        </div>
    )
}

export default ImageList
import React from 'react';

class ImageCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            spans: 0
        }
        this.imageRef =  React.createRef();
    }
    componentDidMount(){
        console.log(this.imageRef);
        console.log('ref is', this.imageRef.current.clientHeight )
        this.imageRef.current.addEventListener('load', this.setSpan)
    }
    setSpan = () => {
        const height = this.imageRef.current.clientHeight
        const spans = Math.ceil(height / 10)
        this.setState({
            spans: spans
        })
    }
    render(){
        const {alt_description,urls} = this.props.image;
        console.log('spans height', this.state.spans)
        return(
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img 
                ref={this.imageRef}
                src={urls.regular}
                alt={alt_description}
                />
            </div>
        )
    }
}

export default ImageCard
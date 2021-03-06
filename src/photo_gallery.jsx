import React from 'react'
import Gallery from 'react-photo-gallery'

const fakeFetch = url => new Promise(resolve => {
  setTimeout(() => resolve([
    `Image_1.JPG`,
    `Image_2.JPG`,
    `Image_12.JPG`,
    `Image_4.JPG`,
    `Image_13.JPG`,
    `Image_6.JPG`,
    `Image_7.JPG`,
    `Image_17.JPG`,
    `Image_27.JPG`,
    `Image_15.JPG`,
  ]), 2000)
})

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props)
    this.getPhotos()
    this.state = {photos: []}
  }
  async getPhotos() {
    const urls = await fakeFetch(`/photos`);
    const photos = urls.map(url => ({
      src: url,
      width: 250,
      height: 250
    }))
    this.setState({photos})
  }
  onClick = event => {
    
  }
  render() {
    return (
      <Gallery
        photos={this.state.photos}
        onClick={this.onClick}
      />
    )
  }
}

export default PhotoGallery
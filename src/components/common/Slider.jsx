import SimpleImageSlider from 'react-simple-image-slider'

const Slider = ({ slideImages }) => {
  return (
    <SimpleImageSlider
        width={300}
        height={250}
        images={slideImages}
        showBullets={true}
        showNavs={true}
      />
  )
}

export default Slider
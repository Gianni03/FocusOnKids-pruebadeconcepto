const Dot = ({ index, slide, selectNewImg }) => {
  return (
    <>
        <input defaultChecked={slide.defaultChecked ? true : false} type="radio" id={slide.id} name="slides" onClick={() => selectNewImg(index)} />
        <label htmlFor={slide.id} id={`dot-${index}`}></label>
    </>
  )
}

export default Dot
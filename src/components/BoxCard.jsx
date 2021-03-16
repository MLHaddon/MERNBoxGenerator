const Box = ({backgroundColor, width, height, idx, handleDestroyBox}) => {
  return (
  <div>
    <div 
      style={{backgroundColor, width, height}}
      onClick={() => handleDestroyBox(idx)}
    ></div>
  </div>
  )
}
export default Box;
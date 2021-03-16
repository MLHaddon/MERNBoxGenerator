const BoxForm = ({inputs, handleFormSubmit, handleInputChange}) => {
  return (
    <>
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="m-2 d-flex flex-column justify-content-evenly align-items-start">
          <div className="form-group">
            <label htmlFor="color">Color: </label>
            <input 
              type="text" 
              name="color"
              className="form-control"
              onChange={handleInputChange}
              value={inputs.color}
            />
            <span className="text-danger">{inputs.color.length === 0 ? "Must include a color." : ""}</span>
          </div>
          <div className="form-group">
            <label htmlFor="height">Height: </label>
            <input 
              type="number"
              name="height"
              className="form-control"
              onChange={handleInputChange} 
              value={inputs.height}
            />
            <span className="text-danger">{inputs.height === 0 ? "Height must be at least 1 px" : ""}</span>
          </div>
          <div className="form-group">
            <label htmlFor="width">Width: </label>
            <input 
              type="number"
              name="width"
              className="form-control"
              onChange={handleInputChange}
              value={inputs.width} 
            />
            <span className="text-danger">{inputs.height === 0 ? "Height must be at least 1 px" : ""}</span>
          </div>
          <input type="submit" value="Submit" className="btn btn-success"/>
        </div>
      </form>
    </>
  )
}

export default BoxForm;
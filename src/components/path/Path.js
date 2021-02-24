const Path = (props) => {

  return (
      <div className="mx-auto w-90 py-5" >
          <p>{props.normal}<span className="text-light-brown" >{props.highlight}</span></p>
      </div>
  )
}

export default Path;
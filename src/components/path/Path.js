import { Link } from "react-router-dom"
const Path = (props) => {

  return (
      <div className="mx-auto w-90 py-5 d-flex gap-2" >
          <Link to="/">Home</Link> /
          <Link to={`/${props.category}`}> {props.category} </Link>
      </div>
  )
}

export default Path;
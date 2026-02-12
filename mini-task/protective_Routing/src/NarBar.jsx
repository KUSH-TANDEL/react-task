import { NavLink } from "react-router"

const handlelogout = () => {
  localStorage.removeItem("Authtoken");
}

const NarBar = () => {
  return (
<ul className="nav nav-pills m-0 p-0 justify-content-center ">
  <li className="nav-item">
    <NavLink to={'/'} className="nav-link " aria-current="page" href="#">Home</NavLink>
  </li>
  <li className="nav-item">
    <NavLink  to={"/about"} className="nav-link" href="#">About</NavLink>
  </li>
  <li className="">
    <NavLink to={"/login"} className=" nav-link " onClick={handlelogout}>Logout</NavLink>
  </li>
</ul>

  )
}

export default NarBar
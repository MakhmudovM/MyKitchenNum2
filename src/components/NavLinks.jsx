import { Link } from "react-router-dom"
import About from "../pages/About"

const links=[
    {
        Id:1,
        text:"Home",
        link:"/",
    },
    {
        id:2,
        text :"About",
        link:"/About",
    },
    {
        id:3,
        text:"Contact",
        link:"/Contact"
    }
]

function NavLinks() {
  return(
    <>
       {links.map((link)=>{
          return <Link className="px-3 py-2 hover:bg-base-content hover:text-white rounded" key={link.id} to={link.link}>{link.text}</Link>
       })}
   </>
  )  
}

export default NavLinks
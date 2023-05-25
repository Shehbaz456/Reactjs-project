import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NavBar extends Component {

render() {
return (
<div>
<nav className="navbar navbar-expand-lg navbar-dark bg-primary p-3">
<Link className="navbar-brand" to="/"><h3><b>NewsWave</b></h3></Link>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
            <Link className="nav-link" to="/"><b>Home</b></Link>
        </li>
        <li className="nav-item active"><Link className="nav-link" to="/business">Business</Link></li>
        <li className="nav-item active"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
        <li className="nav-item active"><Link className="nav-link" to="/health">Health</Link></li>
        <li className="nav-item active"><Link className="nav-link" to="/science">Science</Link></li>
        <li className="nav-item active"><Link className="nav-link" to="/sports">Sports</Link></li>
        <li className="nav-item active"><Link className="nav-link" to="/technology">Technology</Link></li>
        
    </ul>
    <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search NewsWave" aria-label="Search" />
        <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
    </form>
</div>
</nav>
</div>
)
}
}

export default NavBar

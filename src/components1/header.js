import Footer from "./Footer";

function Header(props) {
    return(
        <>
        <h1>"my name",{props.name}</h1>
        <h2>"my Age",{props.age}</h2>
        <Footer name = {props.name}/>
        </>
    );
}
Header.defaultProps={
    name:"Name",
    age:0
}

export default Header;
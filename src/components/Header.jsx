import headerImage from "../assets/headerImage.png";

export default function Header(){
    return(
        <header className="header">
            <img className="logo" src={headerImage} alt="headerImage" />
            <p className="title">Todo <span>App</span></p>
        </header>
    )
}
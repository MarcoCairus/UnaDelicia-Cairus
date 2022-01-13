import CarWidget from "./CarWidget"
const navBar = () => {
    return (
        
        <nav>
            <h1>Una Delicia</h1>
            <ul>
                <li>
                <a href='/#'>Inicio</a>
                </li>
                <li>
                <a href='/#'>Menu</a>
                </li>
                <li>
                <a href='/#'>Informacion</a>
                </li>
            </ul>
            <a href='/#'>Login</a>
            <CarWidget />
        </nav>
        
        
    )
}

export default navBar

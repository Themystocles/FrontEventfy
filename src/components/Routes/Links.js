import { Link } from "react-router-dom";
function Links() {

    return (
        // Navegação 
        < div >
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Event">Eventos</Link>
                </li>
                <li>
                    <Link to="/Participant">Participantes</Link>
                </li>
            </ul>
        </div >
    )

}
export default Links
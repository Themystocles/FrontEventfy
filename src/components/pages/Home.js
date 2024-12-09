import './Home.css'
import { Link } from 'react-router-dom';


function Home() {

    return (
        <section className="home-section">
            <h1>Bem vindo ao <span>Eventfy</span></h1>
            <Link to="FormEvent/">Criar um evento</Link>
        </section>

    )

}
export default Home
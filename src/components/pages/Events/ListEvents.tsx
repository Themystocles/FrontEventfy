import GetList from '../../Services/GetList'; // Importação do serviço
import { EventModel } from '../../Models/EventModel'; // Importando o modelo renomeado
import { Link } from 'react-router-dom';

const ListEvents = () => {
    return (
        <div className="Lista-section">
            <br />
            <br />
            <h1>Lista de <span>Eventos</span></h1>
            <br />
            <Link to='/FormEvent'>Cadastrar Evento</Link>
            <br />
            <br />
            <GetList<EventModel>
                url={"https://localhost:7159/api/Event/Event"}
                renderItem={(event) => (
                    <li key={event.id}>
                        <h3>{event.name}</h3>
                        <p>{event.description}</p>
                    </li>
                )}

            />
        </div>
    );
};

export default ListEvents;

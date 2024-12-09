import { ParticipantModel } from '../../Models/ParticipantModel.js';
import GetList from '../../Services/GetList';
import { Link } from 'react-router-dom';

const ListParticipant = () => {
    return (
        <div className="Lista-section">
            <br />
            <br />
            <h1>Lista de <span>Participantes</span></h1>
            <br />
            <Link to='/FormParticipant'>Cadastrar Participante</Link>
            <br />
            <br />
            <GetList<ParticipantModel>
                url="https://localhost:7159/api/Participant"
                renderItem={(participant) => (
                    <li key={participant.id}>
                        <h3>{participant.name}</h3>
                        <p>{participant.email}</p>
                    </li>
                )} />



        </div>

    )
}
export default ListParticipant;


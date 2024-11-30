import './Event.css';

function Event() {
    return (
        <section className="event-section">
            <h1>Criar <span>Evento</span></h1>
            <p>Crie seu Evento aqui</p>

            <form>
                <input type="text" placeholder='Insira o nome do envento'></input>
                <input type="text" placeholder='Insira uma descrição para o  envento'></input>
                <select name="local_id" className='event-select'><option>Selecione um local</option></select>

            </form>

        </section>
    );
}

export default Event;

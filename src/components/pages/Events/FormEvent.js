import '../Formulario.css'

function FormEvent() {
    return (
        <section className="Formulario-section">
            <h1>Criar <span>Evento</span></h1>
            <p>Cadastro de Evento</p>

            <form>
                <input type="text" placeholder='Insira o nome do Evento'></input>
                <input type="text" placeholder='Insira a descrição para o Evento'></input>
                <select className="Formulario-select">
                    <option value="" disabled>
                        Escolha um local
                    </option>
                </select>





            </form>

        </section >
    );
}

export default FormEvent;

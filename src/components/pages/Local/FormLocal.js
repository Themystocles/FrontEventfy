import '../Formulario.css'

function Local() {
    return (
        <section className="Formulario-section">
            <h1>Criar <span>Local</span></h1>
            <p>Crie seu Local aqui</p>

            <form>
                <input type="text" placeholder='Insira o nome do Local'></input>
                <input type="text" placeholder='Insira uma descrição para o  Local'></input>

            </form>

        </section>
    );
}

export default Local;
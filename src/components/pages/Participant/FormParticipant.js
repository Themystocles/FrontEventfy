import '../Formulario.css';


function Participant() {

    return (
        <section className="Formulario-section">
            <h1>Criar <span>Participant</span></h1>
            <p>Cadastro de Participant</p>

            <form>
                <input type="text" placeholder='Insira o nome do Participant'></input>
                <input type="text" placeholder='Insira um Email para o Participant'></input>


            </form>

        </section>
    )

}
export default Participant
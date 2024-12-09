import GetList from "../../Services/GetList.tsx";
import '../Formulario.css';

const ListLocal = () => {
    return (
        <div className="Lista-section">
            <br />
            <br />
            <h1>Lista de <span>Locais</span></h1>
            <br />
            <GetList
                url={"https://localhost:7159/api/Local"}
                renderItem={(Locals) =>
                (<li key={Locals.id}>
                    <h2>{Locals.endereco}</h2>
                    <p>{Locals.capacidade}</p>
                </li>
                )
                } />



        </div>
    )

}
export default ListLocal;
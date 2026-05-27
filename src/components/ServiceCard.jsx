import { useNavigate } from "react-router-dom"

function ServiceCard({ titulo, descripcion, imagen }) {
    const navigate = useNavigate();

    const handleContacto = () => {
        // Guarda el servicio seleccionado y navega al formulario
        navigate('/contacto', { state: { servicio: titulo } })
    }

    return (
        <div className="card shadow h-100">
            <img src={imagen} className="card-img-top" alt={titulo} width={"100px"} height={"200px"} />

            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{titulo}</h5>

                <p className="card-text">{descripcion}</p>

                <button
                    className="btn btn-primary mt-auto"
                    onClick={handleContacto}
                    aria-label={`Contactar por el servicio ${titulo}`}
                >
                    Contáctanos
                </button>
            </div>
        </div>
    )
}

export default ServiceCard

function Hero() {
    return (

    <section className="bg-light py-5">

        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <h1 className="display-4 fw-bold">
                        ProviEmplea
                    </h1>

                    <p className="lead mt-3">
                        Plataforma digital para conectar talentos con empresas,
                        impulsando oportunidades laborales de manera inclusiva.
                    </p>

                    <button className="btn btn-primary btn-lg mt-3">
                        Ver Servicios
                    </button>

                </div>

                <div className="col-md-6 text-center">
                <img
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                    alt="Equipo trabajando"
                    className="img-fluid rounded shadow"
                    width={"100%"}
                    height={"400px"}
                />

                </div>

            </div>

        </div>

    </section>
    )
}

export default Hero

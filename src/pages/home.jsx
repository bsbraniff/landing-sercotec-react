import React from "react"
import Hero from "../components/Hero"
import Services from "../components/Service"
import Nosotros from "../components/Nosotros"
import FAQ from '../components/FAQ'
import Testimonios from "../components/Testimonios"
import { Layout } from "../components/Layout"

const Home = () => {

  //const { clientes, loading, error, success } = useClientes();
  return (
    <>
      <Layout footer={true} navbar>
        <Hero />
        <Nosotros />
        <Services />
        <Testimonios />
        <FAQ />
      

      { /*
          clientes.map((cliente) => {
            return <div>
              <div> nombre : {cliente.name}</div>
              <div> email : {cliente.correo}</div>
            </div>
          })
            */
      }


    </Layout >
    </>
  );
};
export default Home;

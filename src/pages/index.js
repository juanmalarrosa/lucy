import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Index = ({ data, location }) => {

  return (

    <Layout location={location} title={'h'}>
      <Seo title="Lucy" />


      {/* HERO */}
      <section className="c-hero">
        <div className="o-wrapper c-hero__wrapper">
          <h2 className="c-hero-title">
            Tomá mejores decisiones‏‏‎ ‎‏‏‎<br/>
          <span className="c-hero-title__mark">y generá más‎‎‎‎‎‎‎‎‎‎‎‎ rentabilidad</span>
          </h2>
          <p className="c-hero__text">
            Lucy es la plataforma que te permite recibir recomendaciones de inversión <strong>precisas</strong> y en el <strong>momento justo</strong>.
          </p>

          <div className="c-cta">
            <p className="c-cta__title">Registrate para el pre-lanzamiento y <strong>obtené 6 meses de recomendaciones gratis</strong></p>
            <form className="c-cta__form">
              <input className="c-cta__input" placeholder="Ingresa tu email..." />
              <button type="submit" className="c-cta__btn"></button>
            </form>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="c-benefits o-section">
        <div className="o-wrapper">
          <h2 className="c-title">Por qué usar Lucy?</h2>
          <ul className="c-benefits-list">

            <li className="c-benefits-item">
              <div className="c-benefits-item__holder">
                <span className="c-benefits-item__icon"></span>
                <h3 className="c-benefits-item__title">Es más preciso</h3>
                <p className="c-benefits-item__text">Comprar y vender acciones
es fácil, lo difícil es saber
cuándo. Lucy te ayuda a
generar rentabilidad con
pasos firmes y seguros.</p>
              </div>
            </li>
            <li className="c-benefits-item">
              <div className="c-benefits-item__holder">
                <span className="c-benefits-item__icon"></span>
                <h3 className="c-benefits-item__title">Es más preciso</h3>
                <p className="c-benefits-item__text">Comprar y vender acciones
es fácil, lo difícil es saber
cuándo. Lucy te ayuda a
generar rentabilidad con
pasos firmes y seguros.</p>
              </div>
            </li>
            <li className="c-benefits-item">
              <div className="c-benefits-item__holder">
                <span className="c-benefits-item__icon"></span>
                <h3 className="c-benefits-item__title">Es más preciso</h3>
                <p className="c-benefits-item__text">Comprar y vender acciones
es fácil, lo difícil es saber
cuándo. Lucy te ayuda a
generar rentabilidad con
pasos firmes y seguros.</p>
              </div>
            </li>

          </ul>
        </div>

      </section>



      {/* HOW IT WORKS */}
      <section className="c-works o-section">
        <div className="o-wrapper">
          <h2 className="c-title">Cómo funciona?</h2>

        </div>
      </section>


      {/* CTA */}
      <div className="c-cta">
        <p className="c-cta__title">Registrate para el pre-lanzamiento y obtené 6 meses de recomendaciones gratis</p>
        <form className="c-cta__form">
          <input className="c-cta__input" />
          <button type="submit" className="c-cta__btn"></button>
        </form>
      </div>


    </Layout>
  )

}

export default Index
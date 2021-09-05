import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {
  Formik,
  Form,
  Field,
  ErrorMessage
} from 'formik'


const Index = ({ data, location }) => {

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const [message, setMessage] = React.useState(false)

  return (

    <Layout location={location}>
      <Seo title="Lucy | Generá mas rentabilidad" />


      {/* HERO */}
      <section className="c-hero">
        <div className="o-wrapper c-hero__wrapper">
          <h2 className="c-hero-title">
            Tomá mejores decisiones‏‏‎ ‎‏‏‎y <br />
            <span className="c-hero-title__mark"> generá más‎‎‎‎‎‎‎‎‎‎‎‎ rentabilidad</span>
          </h2>
          <p className="c-hero__text">
            Lucy es la plataforma que te permite recibir recomendaciones de inversión <strong>precisas</strong> y en el <strong>momento justo</strong>.
          </p>

          <div className="c-cta">
            <p className="c-cta__title">Registrate para el pre-lanzamiento y <strong>obtené 6 meses de recomendaciones gratis</strong></p>



            <Formik
              initialValues={{
                email: ''
              }}
              onSubmit={
                (values, actions) => {

                  fetch("/", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: encode({ "form-name": "cta", ...values })
                  })
                    .then(() => {

                      setMessage(true)
                      actions.resetForm()


                    })
                    .catch(() => {

                    })
                    .finally(() => {

                      actions.setSubmitting(false)

                    })
                }
              }
              validate={values => {
                const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                const errors = {};

                if (!values.email || !emailRegex.test(values.email)) {
                  errors.email = "El email debe ser válido"
                }

                return errors;
              }}
            >
              {() => (
                <Form key="cta" name="cta" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="c-cta__form">

                  {!message &&
                    <>
                      <p className="u-hidden-for-seo">
                        <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
                      </p>

                      <input type="hidden" name="form-name" value="newsletter" />

                      <Field name="email" type="email" className="c-cta__input" placeholder="Ingresá tu email..." />

                      <label for="email" className="c-cta__error"><ErrorMessage name="email" /></label>

                      <div data-netlify-recaptcha="true"></div>

                      <button type="submit" className="c-cta__btn">Enviar</button>
                    </>
                  }

                  {message && <p className="c-cta__message"><strong>Gracias por registrarte!</strong> <br /> Nos comunicaremos a la brevedad.</p>}

                </Form>
              )}

            </Formik>


          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="c-benefits o-section">
        <div className="o-wrapper">
          <h2 className="c-title">¿Por qué usar Lucy?</h2>
          <ul className="c-benefits-list">

            <li className="c-benefits-item">
              <div className="c-benefits-item__holder">
                <div className="c-benefits-item__aligner">
                  <span className="c-benefits-item__icon"></span>
                  <h3 className="c-benefits-item__title">Es más preciso</h3>
                  <p className="c-benefits-item__text">Comprar y vender acciones
  es fácil, lo difícil es saber
  cuándo. Lucy te ayuda a
  generar rentabilidad con
pasos firmes y seguros.</p>
                </div>
              </div>
            </li>
            <li className="c-benefits-item">
              <div className="c-benefits-item__holder">
                <div className="c-benefits-item__aligner">

                  <span className="c-benefits-item__icon"></span>
                  <h3 className="c-benefits-item__title">Es más simple</h3>
                  <p className="c-benefits-item__text">No necesitás pasarte leyendo
  o saber de análisis, mucho
  menos cómo hacer un robot.
  Lucy se encarga de encontrar
las oportunidades por vos.</p>
                </div>
              </div>
            </li>
            <li className="c-benefits-item">
              <div className="c-benefits-item__holder">
                <div className="c-benefits-item__aligner">
                  <span className="c-benefits-item__icon"></span>
                  <h3 className="c-benefits-item__title">Lo hacés vos</h3>
                  <p className="c-benefits-item__text">Usa la plataforma que
  prefieras y mantené las
  decisiones sobre tu dinero,
  Lucy te aconseja en el camino
para hacerlo crecer.</p>
                </div>
              </div>
            </li>

          </ul>
        </div>

      </section>



      {/* HOW IT WORKS */}
      <section id="works" className="c-works o-section">
        <div className="o-wrapper">
          <h2 className="c-title">¿Cómo funciona?</h2>

          <ul className="c-works-list">

            <li className="c-works-item">

              <div className="c-works-item__img"></div>

              <div className="c-works-item__aligner">
                <h3 className="c-works-item__title">1. Elegí las acciones que más te gusten</h3>
                <p className="c-works-item__text">Seleccioná las acciones que quieras seguir, pueden ser de tu lista personal, las más populares entre los demás usuarios o las de mayor potencial según Lucy.</p>
              </div>

            </li>
            <li className="c-works-item c-works-item--right">

              <div className="c-works-item__img"></div>

              <div className="c-works-item__aligner">
                <h3 className="c-works-item__title">2. Lucy te avisa cuándo comprarlas</h3>
                <p className="c-works-item__text">Lucy analiza tu selección para identificar la mejor oportunidad de compra, buscando que ésta sea alcanzable y segura. Una vez que la encuentra, te avisa el momento óptimo para ejecutarla.</p>
              </div>


            </li>
            <li className="c-works-item">

              <div className="c-works-item__img"></div>

              <div className="c-works-item__aligner">
                <h3 className="c-works-item__title">3. También te avisa cuándo venderlas</h3>
                <p className="c-works-item__text">Lucy permanece atenta a tu oportunidad, monitoreando el movimiento del activo. Al cumplirse su predicción, vuelve a enviarte una notificación indicando que es tiempo de vender.</p>
              </div>

            </li>

          </ul>


        </div>
      </section>


      {/* CTA */}
      <div id="cta" className="c-cta c-cta--footer">
        <div className="o-wrapper">
          <p className="c-cta__title">Registrate para el pre-lanzamiento y <strong>obtené 6 meses de recomendaciones gratis</strong></p>


          <Formik
            initialValues={{
              email: ''
            }}
            onSubmit={
              (values, actions) => {

                fetch("/", {
                  method: "POST",
                  headers: { "Content-Type": "application/x-www-form-urlencoded" },
                  body: encode({ "form-name": "cta", ...values })
                })
                  .then(() => {

                    setMessage(true)
                    actions.resetForm()


                  })
                  .catch(() => {

                  })
                  .finally(() => {

                    actions.setSubmitting(false)

                  })
              }
            }
            validate={values => {
              const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
              const errors = {};

              if (!values.email || !emailRegex.test(values.email)) {
                errors.email = "El email debe ser válido"
              }

              return errors;
            }}
          >
            {() => (
              <Form key="cta" name="cta" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="c-cta__form">

                {!message &&
                  <>
                    <p className="u-hidden-for-seo">
                      <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
                    </p>

                    <input type="hidden" name="form-name" value="newsletter" />

                    <Field name="email" type="email" className="c-cta__input" placeholder="Ingresá tu email..." />

                    <label htmlFor="email" className="c-cta__error"><ErrorMessage name="email" /></label>

                    <div data-netlify-recaptcha="true"></div>

                    <button type="submit" className="c-cta__btn">Enviar</button>
                  </>
                }

                {message && <p className="c-cta__message"><strong>Gracias por registrarte!</strong> <br /> Nos comunicaremos a la brevedad.</p>}

              </Form>
            )}

          </Formik>


        </div>
      </div>


    </Layout>
  )

}

export default Index

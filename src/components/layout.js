import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
 
  return (
    <>
      {/* HEADER */}
       <header className="c-header " id="c-header">
        <div className="c-header__holder">
          <div className="c-header__wrapper o-wrapper o-align-middle">{/*
                    */}<div className="o-align-middle__aligner">
              <button type="button" className="c-header__nav-btn js-show-nav" title="Ver/ocultar menú"><span className="c-header__hamburger" /></button>
              <h1 className="c-header__h1">
                <a href="/" className="c-header__logo" tabIndex={-1}>
                  <span className="u-hidden-for-seo">Lucy</span>
                </a>
              </h1>
              <div className="c-header__hidden">
                <div className="c-header__viewport js-nav" style={{display: 'none'}}>
                  <div className="c-header__nav o-scrollable">{/*
                                    */}<nav className="c-nav">
                      <h2 className="u-hidden-for-seo">Navegación</h2>
                      <ul className="c-nav__items">
                        <li className="c-nav__item">
                          <a className="c-nav__link js-nav__anchor" href="#benefits">¿Por qué usar Lucy?</a>
                        </li>
                        <li className="c-nav__item">
                          <a className="c-nav__link js-nav__anchor" href="#software">¿Cómo funciona?</a>
                        </li>
                      </ul>
                      <ul className="c-nav__buttons">
                        <li className="c-nav__item-btn">
                          <button className="c-nav__btn c-nav__btn--admin c-admin-btn-desktop js-show-admin c-btn" type="button">
                            Quiero registrarme!
                          </button>
                        </li>
                      </ul>
                    </nav>{/* .c-nav */}
                  </div>{/* .c-header__nav */}
                </div>
              </div>
              <div className="c-viewport__overlay" style={{display: 'none'}} />
            </div>{/* .o-align-middle__aligner */}
          </div>{/* .c-header__wrapper */}
        </div>{/* .c-header__holder */}
      </header>


      <main>{children}</main>


      {/* FOOTER 
      <footer className="c-footer">
        <div className="o-wrapper">
          Lucy
        </div>
      </footer>
      */}


    </>
  )
}

export default Layout

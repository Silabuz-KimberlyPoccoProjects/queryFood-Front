import {Link} from 'react-router-dom';
export default function Heading() {
    return (
        <header>
            <article className="call-to-action">
                <section className="hero-text">
                    <h1>QueryFood</h1>
                    <h2>Lima-Perú</h2>
                    <p className="subsection">"Comida a tiempo real, con QueryFood."</p>
                    <br></br>
                    {/* <Link className="action-button" to="/reservations">Consultar reserva </Link> */}
                </section>

                <section className="hero-image">
                    <img src={require('../../../assets/food/food1.png')} alt="Little Lemon restaurant cuisine"></img>
                </section>
            </article>
      </header>
    );
}
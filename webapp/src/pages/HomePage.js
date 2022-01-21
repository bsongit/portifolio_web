import {Component} from 'react';
import Navbar from '../components/Navbar';
import PlaceholderImage  from '../assets/images/placeholder.jpg';

class HomePage extends Component{
    render(){
        return (
        <div className='container-fluid no-pm'>
            <Navbar></Navbar>
            <nav className="nav overflow-y-scroll">
            <section className='bg-dark text-white row'>
                <div className='col d-flex flex-column text-center justify-content-center align-items-center'>
                    <div>Olá, eu sou</div>
                    <div>Iuri Silva.</div>
                    <div>Front-end developer e UI Designer.</div>
                    <br/>
                    <div><button className='btn btn-primary'>Conheça meus projetos</button></div>
                </div>
                <div className='col d-flex flex-column text-center justify-content-center align-items-center'>
                    <img className='showcase-image' src={PlaceholderImage} alt="placeholder"></img>
                </div>
            </section>
            <section className='bg-secondary text-white row'>
                <div className='col d-flex flex-column text-center justify-content-center align-items-center'>
                    <img className='showcase-image' src={PlaceholderImage} alt="placeholder"></img>
                </div>
                <div className='col d-flex flex-column justify-content-center'>
                    <h3>Quem sou eu?</h3>
                    <div>Meu nome é Iuri Silva, ou “iuricode” (é como me chamam agora). Sou freelancer como Front-end developer e UI Designer. Desenvolvo interfaces modernas e de alta qualidade, concentrado em performance, animações, responsividade e SEO.</div>
                </div>
            </section>
            <section className='bg-dark text-white d-flex flex-column' style={{justifyContent: 'space-evenly'}}>
                <div className='row text-center'><h2>Projetos</h2></div>
                <div className='row'>
                <div className='col d-flex flex-column text-center justify-content-center align-items-center'>
                    <div>Olá, eu sou</div>
                    <div>Iuri Silva.</div>
                    <div>Front-end developer e UI Designer.</div>
                </div>
                <div className='col d-flex flex-column text-center justify-content-center align-items-center'>
                    <div>Projetos</div>
                    <div>Iuri Silva.</div>
                    <div>Front-end developer e UI Designer.</div>
                </div>
                <div className='col d-flex flex-column text-center justify-content-center align-items-center'>
                    <div>Olá, eu sou</div>
                    <div>Iuri Silva.</div>
                    <div>Front-end developer e UI Designer.</div>
                </div>

                </div>
                <div className='row text-center'><h2>GITHUB</h2></div>
            </section>
            <section className='bg-secondary text-white d-flex flex-column' style={{justifyContent: 'space-evenly'}}>
            <div className='row text-center'><h2>Serviços</h2></div>
            <div className='row'>
            <div className='col d-flex flex-column text-center justify-content-center align-items-center'>
                    <div>Olá, eu sou</div>
                    <div>Iuri Silva.</div>
                    <div>Front-end developer e UI Designer.</div>
                </div>
                <div className='col d-flex flex-column text-center justify-content-center align-items-center'>
                    <div>Olá, eu sou</div>
                    <div>Iuri Silva.</div>
                    <div>Front-end developer e UI Designer.</div>
                </div>
                <div className='col d-flex flex-column text-center justify-content-center align-items-center'>
                    <div>Olá, eu sou</div>
                    <div>Iuri Silva.</div>
                    <div>Front-end developer e UI Designer.</div>
                </div>
                <div className='col d-flex flex-column text-center justify-content-center align-items-center'>
                    <div>Olá, eu sou</div>
                    <div>Iuri Silva.</div>
                    <div>Front-end developer e UI Designer.</div>
                </div>
            </div>

            </section>
            <section className='bg-dark text-white d-flex flex-column' style={{justifyContent: 'space-evenly'}}>
                <div className='row'>
                <div className='col d-flex flex-column text-center justify-content-center align-items-center'>
                    <div>Olá, eu sou</div>
                    <div>Iuri Silva.</div>
                    <div>Front-end developer e UI Designer.</div>
                </div>
                <div className='col d-flex flex-column text-center justify-content-center align-items-center'>
                    <div>Projetos</div>
                    <div>Iuri Silva.</div>
                    <div>Front-end developer e UI Designer.</div>
                </div>
                </div>
                <div className='row text-center'><h2>© 2022 iuricode.com</h2></div>
            </section>
</nav>


        </div>
        );
    }
}

export default HomePage;
import {Component} from 'react';
import Navbar from '../components/Navbar';

class ArticlesPage extends Component{
    render(){
        return (
        <div className='container-fluid'>
            <Navbar></Navbar>
            <div className='row'>
                <div className='col'>
                    <div className='row'>
                        <div className='col-6 col-sm-3'></div>
                        <div className='col'>
                            <h1>React v17.0 Candidato à lançamento: Sem novas funcionalidades</h1>
                            <span className='fst-italic'>August 10, 2020 por Dan Abramov and Rachel Nabors</span>
                            <br/>
                            <br/>
                            <br/>
                            <p>Hoje, estamos publicando o primeiro candidato à lançamento do React 17. Já se passaram dois anos e meio desde o principal lançamento anterior do React, que é muito tempo, mesmo para os nossos padrões! Nesta postagem do blog, descreveremos a função desta versão principal, quais mudanças você pode esperar dela e como você pode experimentar esta versão.</p>
                        </div>
                    </div>

                </div>
                <div className='col-6 col-sm-3 bg-dark text-white p-5' style={{height: '100vh'}}>
                        <h3>Teste de sumario</h3>
                        <p>Ola mundo</p>
                        <p>Ola mundo</p>
                        <p>Ola mundo</p>
                        <p>Ola mundo</p>
                        <p>Ola mundo</p>
                </div>
            </div>
        </div>
        );
    }
}

export default ArticlesPage;
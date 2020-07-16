import React from 'react';
import Header from './components/Header';
import Home from './routes/Home';
import About from './routes/About';
import Detail from './components/Detail';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

const App = () => {
    return (
        <div>
            <Router>
                <Header />
                <main>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/movie/:id' component={Detail} />
                </main>
            </Router>
        </div>
    );
};

export default App;

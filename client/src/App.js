import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Launches from './components/Launches';
import './App.css';
import logo from './img/06e498aa672e2293fb6bf509c54aba37.jpg';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='container'>
        <img
          src={logo}
          alt='space'
          style={{
            width: 300,
            display: 'block',
            margin: 'auto',
            borderRadius: '100px',
            marginTop: '80px',
          }}
        />
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;

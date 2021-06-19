import React, { Component } from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import BrandList from './Components/BrandList';

// Pass your GraphQL endpoint to uri
const client = new ApolloClient({
	uri: 'https://lively-darkness.eu-central-1.aws.cloud.dgraph.io/graphql',
});
class App extends Component {
	render() {
		return (
			<div className='App'>
				<div className='container'>
					<ApolloProvider client={client}>
						<div className='grid-2'>
							<BrandList />
						</div>
					</ApolloProvider>
				</div>
			</div>
		);
	}
}

export default App;

import React, { Component } from 'react';
import '../App.css';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_BRANDS = gql`
	query {
		queryBrand {
			id
			name
			website_url
		}
	}
`;

class BrandList extends Component {
	render() {
		return (
			<Query query={GET_BRANDS}>
				{({ loading, error, data }) => {
					if (loading) return <div>Loading...</div>;
					if (error) return <div>Error :(</div>;

					console.log(data);
					return (
						<ul>
							{data.queryBrand.map((b) => {
								return (
									<div className='grid-2' key={b.id}>
										<div className='card p-2'>
											{/* <p className='text-primary'>{b.id}</p> */}
											<p className='text-primary lead'>{b.name}</p>
											<p className='text-primary'>{b.website_url}</p>
											<div>
												<button className='btn btn-block btn-primary badge'>
													Edit
												</button>
												<button className='btn btn-block btn-danger badge'>
													Delete
												</button>
											</div>
										</div>
									</div>
								);
							})}
						</ul>
					);
				}}
			</Query>
		);
	}
}

export default BrandList;

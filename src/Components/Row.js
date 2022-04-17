import React, { useState, useEffect } from "react";
import axios from "../axios";

import styled from "styled-components";
const base_url = "https://image.tmdb.org/t/p/w342";
function Row({ title, fetchUrl }) {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		}
		fetchData();
	}, [fetchUrl]);
	console.log(movies);
	return (
		<div className="row">
			<h2>{title}</h2>
			<RowPosters>
				{movies.map((movie) => (
					<img
						key={movie.id}
						src={`${base_url}${movie.poster_path}`}
						alt={movie.title}
					/>
				))}
			</RowPosters>
		</div>
	);
}

const RowPosters = styled.div`
	padding: 1rem;
	display: flex;
	overflow-y: hidden;
	overflow-x: scroll;
	::-webkit-scrollbar {
		display: none;
	}
	img {
		object-fit: contain;
		width: 100%;
		max-height: 150px;
		margin-right: 10px;
		transition: opacity 300ms, transform 450ms;

		&:hover {
			transform: scale(1.1);
			opacity: 0.8;
		}
	}
`;
export default Row;

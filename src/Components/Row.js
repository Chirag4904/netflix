import React, { useState, useEffect } from "react";
import axios from "../axios";

import styled from "styled-components";
const base_url = "https://image.tmdb.org/t/p/w342";
const Row = ({ title, fetchUrl, isLarge }) => {
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
		<StyledRow>
			<h2>{title}</h2>
			<RowPosters>
				{movies.map((movie) => (
					<img
						className={`${isLarge && "large_img"}`}
						key={movie.id}
						src={`${base_url}${
							isLarge ? movie.poster_path : movie.backdrop_path
						}`}
						alt={movie.title}
					/>
				))}
			</RowPosters>
		</StyledRow>
	);
};

const StyledRow = styled.div`
	padding: 0.5rem 0;
	h2 {
		padding: 0.5rem 20px;
		font-weight: bold;
	}
`;

const RowPosters = styled.div`
	padding: 20px;
	display: flex;
	overflow-y: hidden;
	overflow-x: scroll;
	::-webkit-scrollbar {
		display: none;
	}
	img {
		object-fit: contain;
		width: 100%;
		max-height: 100px;
		margin-right: 10px;
		transition: opacity 300ms, transform 450ms;

		&:hover {
			transform: scale(1.08);
			opacity: 0.8;
		}
	}

	img.large_img {
		max-height: 250px;
		&:hover {
			transform: scale(1.1);
		}
	}
`;
export default Row;

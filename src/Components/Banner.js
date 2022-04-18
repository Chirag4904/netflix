import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../requests";
import styled from "styled-components";
function truncateString(str, num) {
	return str?.length > num ? str.slice(0, num) + "..." : str;
}
function Banner() {
	const [movie, setMovie] = useState([]);
	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchNetflixOriginals);
			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length - 1)
				]
			);
		}
		fetchData();
	}, []);

	// console.log(movie);
	return (
		<BannerHeader
			style={{
				backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
			}}
		>
			<BannerContent className="banner">
				<h1 className="title">
					{movie?.title || movie?.orignial_title || movie?.name}
				</h1>
				<BannerButtons>
					<BannerButton>Play</BannerButton>
					<BannerButton>My List</BannerButton>
				</BannerButtons>
				<Description>{truncateString(movie?.overview, 150)}</Description>
			</BannerContent>
			<HiddenBottom className="hellooo"></HiddenBottom>
		</BannerHeader>
	);
}

const BannerHeader = styled.header`
	position: relative;
	color: white;
	object-fit: contain;
	height: 448px;
	background-size: cover;
	background-position: center center;
`;

const BannerContent = styled.div`
	margin-left: 30px;
	padding-top: 140px;
	/* height: 190px; */
	.title {
		font-size: 3rem;
		padding-bottom: 0.3rem;
		font-weight: 800;
	}
`;
const BannerButtons = styled.div``;
const BannerButton = styled.button`
	margin-top: 0.5vw;
	margin-right: 1rem;
	cursor: pointer;
	padding: 0.5rem 2rem;
	border-radius: 0.2vw;
	background-color: rgba(51, 51, 51, 0.5);
	color: white;
	border: none;
	outline: none;
	font-weight: 700;
	transition: all 0.2s;
	&:hover {
		background-color: white;
		color: rgba(51, 51, 51, 0.9);
	}
`;

const Description = styled.h1`
	margin: 1vw 0 0 0;
	color: #fff;
	font-weight: 400;
	line-height: 1.3rem;
	width: 45rem;
	font-size: 1.4vw;
	text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
	max-width: 500px;
`;

const HiddenBottom = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 7.4rem;
	background-image: linear-gradient(
		180deg,
		transparent,
		rgba(37, 37, 37, 0.61),
		#111
	);
`;
export default Banner;

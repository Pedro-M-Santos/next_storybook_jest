import { Header } from "@components/Header/Header";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "src/styles/Home.module.css";

const Home: NextPage = () => {
	return (
		<div className="bg-blue-300">
			<Header />
		</div>
	);
};

export default Home;

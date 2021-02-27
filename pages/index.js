import Head from "next/head";
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";

import Page from '../components/page';

const useStyles = makeStyles({
	description: {
		margin: "auto",
		marginTop: "-16px",
		marginBottom: "24px",
		maxWidth: "48rem"
	}
});

export default function Index() {
	const classes = useStyles();
	return (
		<Page>
			<Head>
				<title>Pamphlet</title>
			</Head>
			<div className="container">
				<img className="product-icon" src="/images/products/pamphlet.png" />
				<h2>Archived Project</h2>
				<p className={classes.description}>Thanks for using Pamphlet, but I don't have enough time to maintain this buggy app. I removed it from the Apple App Store due to it being so unstable. However, I have released its source code under the GNU General Public License v3.0. If you are interested in developing it, you can get its source code on GitHub.</p>
				<Button variant="outlined" color="primary" href="https://github.com/cuso4-5h2o/pamphlet">View code</Button>
			</div>
		</Page>
	)
}

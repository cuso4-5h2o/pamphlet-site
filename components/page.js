import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

function Page({ children }) {
    return (
        <Typography component={"span"}>
            <main>
                <div>{children}</div>
            </main>
            <footer>
                <div>
                    <Link href="https://www.cuso4.me" color="textSecondary">
                        cuso4-5h2o
                    </Link>
                </div>
            </footer>
        </Typography>
    )
}

export default Page;

import $ from "./HomePage.module.scss";

const HomePage: React.FunctionComponent = () => {
    document.title = "Home";

    return (
        <>
            <div className={$.hello}>helloworld</div>
        </>
    );
};

export default HomePage;
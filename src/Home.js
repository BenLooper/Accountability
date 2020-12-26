import history from './history'

const Home = () => {
    return(
        <h1 onClick={() => history.push('/Ben')}>Ben</h1>
    )    
}
export default Home;
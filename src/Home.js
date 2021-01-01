import {useHistory} from 'react-router-dom'

const Home = () => {
    let history = useHistory();
    
    return(
        <h1 onClick={() => history.push('/Ben')}>Ben</h1>
    )    
}
export default Home;
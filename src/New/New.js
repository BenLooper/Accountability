import log from './log'

const New = () => {

    return (
        <>
            {log.map(scrum => 
                <>
                    <h3>{scrum.date}</h3>
                    <label>TASKS</label>
                    <ul>
                        {scrum.tasks.map(task => 
                        <li>
                            {task}
                        </li>
                        )}
                    </ul>
                    <br></br>
                </>
            )}
        </>
    )
}
export default New
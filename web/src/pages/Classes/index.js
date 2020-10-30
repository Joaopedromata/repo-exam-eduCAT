import React, { useEffect, useState } from 'react'
import illustration from '../../assets/illustration.svg'
import { useHistory } from 'react-router-dom'
import api from '../../services/api'
import {
    Container,
    LeftSide,
    Title,
    ListSubject,
    Subjects,
    RightSide,
    WelcomeImage,

} from './styles'

const Classes = () => {

    const history = useHistory()

    const [ subjects, setSubjects ] = useState([])

    useEffect(() => {
        api.get('/subjects').then(res => setSubjects(res.data))
    }, [])

    return (
        <Container>
            <LeftSide>
                <Title><h3>Escolha sua próxima aula.</h3></Title>
                <ListSubject>
                    {subjects.map(data => (
                         <Subjects key={data.id} onClick={() => history.push('/sala-de-aula', { id: data.id, count: data.students.length})}>
                            <div className="sidebar"/>
                            <div className="wrapper">
                                <h3>{data.name}</h3>
                                <span>{data.students.length} alunos matriculados</span>
                            </div>
                        </Subjects>
                    ))}
                </ListSubject>
            </LeftSide>
            <RightSide>
                <WelcomeImage src={illustration} alt="Professor" />
            </RightSide>
        </Container>
    )
}

export default Classes
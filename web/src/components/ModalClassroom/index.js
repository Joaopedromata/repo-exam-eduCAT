import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import { useHistory } from 'react-router-dom'
import {
    Container,
    Wrapper,
    Header,
    YesOrNo,
    ButtonYes,
    ButtonNo,
    ListGroup,
    Title,
    ListStudent,
    Card
} from './styles'

const ModalClassroom = ({ onClose = () => {}, subjectId, count }) => {
    
    const history = useHistory()

    const [ countStudents, setCountStudents ] = useState()
    const [ students, setStudents ] = useState([])

    const [ cleanList, setCleanList ] = useState([])

    useEffect(() => {
        api.get(`/students/subject/${subjectId}/count`).then(res => setCountStudents(res.data.students[0].count)).catch(() => null)
    
        api.get(`/students/subject/${subjectId}`).then(res => { 
            setStudents(res.data.students) 
            setCleanList(res.data.students) 
        }).catch(() => null)

    }, [subjectId])

    const handleOutsideClick = e => {
        if(e.target.id === 'modal') onClose()
    }

    const handleReset = () => {
        return cleanList.map(data => {
            return  api.put(`/students/${data.id}/reset`).then(() => history.push('/'))
        })
    }
    
    return (
        <Container id="modal" onClick={handleOutsideClick}>
            <Wrapper>
                <Header>
                    <p>{countStudents ? count - countStudents : count} de {count} alunos presentes.</p>
                    <p>Você confirma que os alunos abaixo estão ausentes hoje?</p>
                    <YesOrNo>
                        <ButtonYes onClick={() => handleReset()}>Sim</ButtonYes>
                        <ButtonNo onClick={() => onClose()} data-testid="wrapper-button">Não</ButtonNo>
                    </YesOrNo>
                </Header>
                <ListGroup>
                    <Title>Alunos</Title>
                    <ListStudent>
                        {students.map(data => (
                            <>
                                {!data.isBusy && (
                                    <Card>
                                        <h2>{data.name}</h2>
                                    </Card>
                                )}
                            </>
                        ))}
                    </ListStudent>
                </ListGroup>
            </Wrapper>
        </Container>
    )
}

export default ModalClassroom
import React, { useState, useEffect } from 'react'
import ModalClassroom from '../../components/ModalClassroom'
import api from '../../services/api'

import {
    Container,
    Header,
    InputGroup,
    SearchGroup,
    IconSearch,
    ConfirmButton,
    IconRight,
    ListGroup,
    Title,
    ListStudent,
    Card
} from './styles'

const Classroom = ({ location }) => {

    const subjectId = location.state.id
    const countStudents = location.state.count

    const [ isModalVisible, setIsModalVisible ] = useState(false)
    const [ students, setStudents ] = useState([])
    const [ search, setSearch ] = useState('')

    const completeList = () => {
         return api.get(`/students/subject/${subjectId}`).then(res => setStudents(res.data.students)).catch(() => null)
    }

    useEffect(() => {
        completeList()
    }, [subjectId])

    const searchInput = value => {
        
        if(value === ''){
            completeList()
        }

        setSearch(value)
        api.get(`/students/${value}/subject/${subjectId}`).then(res => setStudents(res.data.students)).catch(() => null)
    }

    const isNotAbsent = async (id) => {
        await api.put(`students/${id}`)
    }

    return (
        <Container>
            <Header>
                <InputGroup>
                    <label htmlFor="search">Buscar</label>
                    <input 
                        type="text"
                        name="search"
                        onChange={e => searchInput(e.target.value)}
                        value={search}
                        placeholder="Pesquise um aluno aqui..."
                        autoComplete="off"
                    />
                    <SearchGroup><IconSearch /></SearchGroup>
                </InputGroup>
                <ConfirmButton onClick={() => setIsModalVisible(true)}>
                    <h5>Confirmar</h5>
                    <IconRight />
                </ConfirmButton>
            </Header>
            <ListGroup>
                <Title>Alunos</Title>
                <ListStudent>
                    {students.map(data => (
                        <Card key={data.id}>
                            <h2>{data.name}</h2>
                            <input 
                                name="absent" 
                                type="checkbox" 
                                onClick={() => isNotAbsent(data.id)} 
                            />
                        </Card>
                    ))}
                </ListStudent>
            </ListGroup>
            {isModalVisible && <ModalClassroom 
                                    subjectId={subjectId}
                                    count={countStudents}
                                    onClose={() => setIsModalVisible(false)}
                                />
            }
        </Container>
    )
}

export default Classroom
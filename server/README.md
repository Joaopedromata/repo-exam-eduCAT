# Instalação

- ### **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado no computador
  - É **necessário** possuir o **[Git](https://git-scm.com/)** instalado e configurado no computador
  - Também, é **preciso** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.

### Para inserir as dependencias rode o próximo comando no diretório do servidor:

        npm install

### Para rodar os testes da aplicação tode:

        npm teste

### Para rodar a aplicação:

        npm start


### A API não possui autenticação

<hr>

#  Rotas



## POST

<hr>
Método POST: Inserção de dados na aplicação

- ### Inserir um professor:


            url:  /professors
    - Body

            {  
              "name": "Albert Einstein"   
            }

    - Response

            {
                "id": 1,
                "name": "Albert Einstein",
                "updatedAt": "2020-10-28T13:57:00.857Z",
                "createdAt": "2020-10-28T13:57:00.857Z"
            }

- ### Inserir um aluno:

            url:  /students
    - Body

            {  
              "name": "Steve Jobs"   
            }

    - Response

            {
                "id": 1,
                "name": "Steve Jobs",
                "isBusy: false,
                "updatedAt": "2020-10-28T13:57:00.857Z",
                "createdAt": "2020-10-28T13:57:00.857Z"
            }

- ### Inserir uma matéria:

            url:  /subjects
    - Body

            {  
              "name": "Matemática"   
            }

    - Response

            {
                "id": 1,
                "name": "Matemática",
                "updatedAt": "2020-10-28T13:57:00.857Z",
                "createdAt": "2020-10-28T13:57:00.857Z"
            }


Associar Tabelas

- ### Associar um professor com matéria:

            url:  /associate/professor/:professorId/subject/:subjectId
    - Body

            No body

    - Response

            {
                "professorId": 1,
                "subjectId": "1",
                "createdAt": "2020-10-28T15:54:22.209Z",
                "updatedAt": "2020-10-28T15:54:22.209Z"
            }

- ### Associar um aluno com matéria:

            url:  /associate/student/:studentId/subject/:subjectId
    - Body

            No body

    - Response

            {
                "studentId": 1,
                "subjectId": "1",
                "createdAt": "2020-10-28T15:54:22.209Z",
                "updatedAt": "2020-10-28T15:54:22.209Z"
            }
<hr>

## PUT

<hr>
Método PUT: Alteração de dados na aplicação

- ### Rota para alterar o estado de um aluno (Caso ele esteja presente, fica ausente e o contrário também):


            url:  /students/:studentId
    - Body

            No body

    - Response

            {
                "success": "Now is false"
            }

            or

            {
                "success": "Now is true"
            }

- ### Rota para resetar o estado de um aluno:


            url:  /students/:studentId/reset
    - Body

            No body

    - Response

            {
                "success": "Now is false"
            }
<hr>

## GET

<hr>
Método GET: Retorna os dados da aplicação

- ### Retorna todas as matérias incluindo os alunos pertencentes:


            url:  /subjects
   
    - Response

                {
                    "id": 2,
                    "name": "Cálculo II",
                    "createdAt": "2020-10-29T12:24:20.830Z",
                    "updatedAt": "2020-10-29T12:24:20.830Z",
                    "students": [
                        {
                            "id": 1,
                            "name": "Camila Perez Sanchez",
                            "isBusy": false,
                            "createdAt": "2020-10-29T12:24:20.768Z",
                            "updatedAt": "2020-10-29T13:36:01.842Z"
                        },
                        {
                            "id": 2,
                            "name": "Juan Ignacio Gonza",
                            "isBusy": true,
                            "createdAt": "2020-10-29T12:24:20.768Z",
                            "updatedAt": "2020-10-29T13:36:08.902Z"
                        },
                        {
                            "id": 3,
                            "name": "Luciana Franco Hostera",
                            "isBusy": true,
                            "createdAt": "2020-10-29T12:24:20.768Z",
                            "updatedAt": "2020-10-29T13:36:09.980Z"
                        }
                    ]
                },
                {
                    "id": 4,
                    "name": "Estatística",
                    "createdAt": "2020-10-29T12:24:20.830Z",
                    "updatedAt": "2020-10-29T12:24:20.830Z",
                    "students": [
                        {
                            "id": 4,
                            "name": "Natalia Rios Faustino",
                            "isBusy": false,
                            "createdAt": "2020-10-29T12:24:20.768Z",
                            "updatedAt": "2020-10-29T13:36:02.006Z"
                        },
                        {
                            "id": 5,
                            "name": "Samara Rios Faustino",
                            "isBusy": false,
                            "createdAt": "2020-10-29T12:24:20.768Z",
                            "updatedAt": "2020-10-29T13:36:02.008Z"
                        }
                    ]
                },


- ### Rota para trazer os alunos de uma determinada matéria:


            url: /students/subject/:subjectId

    - Response

            {
                "id": 1,
                "name": "Cálculo I",
                "createdAt": "2020-10-29T12:24:20.830Z",
                "updatedAt": "2020-10-29T12:24:20.830Z",
                "students": [
                    {
                    "id": 1,
                    "name": "Camila Perez Sanchez",
                    "isBusy": false,
                    "createdAt": "2020-10-29T12:24:20.768Z",
                    "updatedAt": "2020-10-30T03:06:13.905Z"
                    },
                    {
                    "id": 2,
                    "name": "Juan Ignacio Gonza",
                    "isBusy": false,
                    "createdAt": "2020-10-29T12:24:20.768Z",
                    "updatedAt": "2020-10-30T03:06:14.671Z"
                    },
                ]
            }

- ### Rota para contar os alunos ausentes de uma determinada matéria:


            url: /students/subject/:subjectId/count

    - Response

            {
                "id": 1,
                "name": "Cálculo I",
                "createdAt": "2020-10-29T12:24:20.830Z",
                "updatedAt": "2020-10-29T12:24:20.830Z",
                "students": [
                    {
                    "count": 4
                    }
                ]
            }

- ### Rota para contar o total de alunos de uma determinada matéria:


            url: /students/subject/:subjectId/total

    - Response

            {
                "id": 1,
                "name": "Cálculo I",
                "createdAt": "2020-10-29T12:24:20.830Z",
                "updatedAt": "2020-10-29T12:24:20.830Z",
                "students": [
                    {
                    "count": 6
                    }
                ]
            }




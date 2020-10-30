import styled from 'styled-components'
import { FiSearch, FiArrowRight } from 'react-icons/fi'

export const Container = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Header = styled.header`
    width: 80%;

    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    @media (min-width: 1080px) {
      width: 70%;
    }
`

export const InputGroup = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    position: relative;

    > label {
        font-size: 15px;
        font-weight: 600;
        color: var(--white);
        margin-bottom: 10px;
    }

    > input {
        padding: 0 50px 0 20px;
        height: 40px;
        border-radius: 8px;
        width: 100%;
    }
`

export const SearchGroup = styled.div`
    height: 40px;
    width: 40px;
    font-size: 15px;
    position: absolute;
    bottom: 0;
    right:0;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const IconSearch = styled(FiSearch)`
    color: var(--secondary);
    height: 20px;
    width: 20px;
`

export const ConfirmButton = styled.button`
    background: var(--secondary);
    height: 40px;
    width: 40px;
    border-radius: 8px;
    margin-left: 10px;
    flex-shrink: 0;
    cursor: pointer;
    
    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter 300ms;

    > h5 {
        color: var(--white);
        font-weight: 600;
        font-size: 13px;
        display: none;
    }

    &:hover {
        filter:brightness(90%);
    }

    @media (min-width: 1080px) {
        width: 95px;
        margin-left: 20px;

        > h5 {
            display: unset;
        }
    }
`

export const IconRight = styled(FiArrowRight)`
    height: 24px;
    width: 24px;
    display: unset;
    color: var(--white);

    @media (min-width: 1080px) {
      display: none;
    }
`


export const ListGroup = styled.section`
    height: 65%;
    width: 80%;
    margin-top: 40px;

    @media (min-width: 1080px) {
      width: 70%;
    }
`

export const Title = styled.h4`
    font-size: 15px;
    font-weight: 600;
    color: var(--white);
    margin-bottom: 10px;
`

export const ListStudent = styled.ul`
    height: calc(100% - 25px);
    width: 100%;
    border-radius: 8px;
    background: var(--dark-gray);

    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none;
    } 

    @media (min-width: 1080px) {
        ::-webkit-scrollbar {
            display: unset;
            width: 8px;
        }

        ::-webkit-scrollbar-thumb {
            background-color: var(--dark-gray);
            border-radius: 4px;
        }

        ::-webkit-scrollbar-track {
            background-color: var(--light-gray);
        }
    }
`

export const Card = styled.li`
    width: 100%;
    height: 80px;
    background: var(--white);
    padding-right: 20px; 
    border-radius: 8px 8px 0 0;
    margin-bottom: 1px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    > h2 {
        font-size: 15px;
        padding-left: 20px; 
        color: var(--secondary);

        @media (min-width: 1080px) {
            padding-left: 40px;
        }
    }

    

    > input {
        
        -webkit-appearance: none;
        height: 20px;
        width: 20px;

        border-radius: 4px;
        border: 1px solid var(--dark-gray);
        background: var(--white);
        position: relative;

        &:checked {
            background: var(--dark-gray);
            
            display: flex;
            align-items: flex-start;
            justify-content: center;
        
            &:after {
                content: '';
                width: 5px;
                height: 10px;
                border: solid white;
                border-width: 0 3px 3px 0;
                -webkit-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                transform: rotate(45deg);
            }
        } 

    }

    &:nth-child(n+2){
        border-radius: 0;
    }

    @media (min-width: 1080px) {
        padding-right: 40px;
    }

`
import styled from 'styled-components';

const Cards = styled.div`
    width: 500px;
    height: 500px;
    margin: 1rem auto;

    display: flex;
    flex-flow: column wrap;
    justify-content: center;

    & > div {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
    }
`;

export default {
    Cards
}
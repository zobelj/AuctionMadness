import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 360px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    border: medium solid;
    border-color: #005eb8;
    border-radius: 4px;

    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    margin-top: 100px;
    padding: 24px;
`;
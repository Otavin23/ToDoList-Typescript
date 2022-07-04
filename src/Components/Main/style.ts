import styled from "styled-components";


export const BackgroundM = styled.main`
    width: 30rem;
    height: 80vh;
    display: flex;
    justify-content: center;
`
export const MContainer = styled.div`
    width: 90%;
    height: 100%;
`

export const InputAdd = styled.div`
    width: 100%;
    height: 3.5rem;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 10px rgba(213, 213, 213, 0.25);

    display: flex;
    align-items: center;
    justify-content: space-between;
    input{
        margin-left: 1.5rem;
        border: none;
        height: 50%;
        outline: none;
        font-size: 1rem;
        &::placeholder{
            font-size: 0.9rem;

        }
    }
    button{
        margin-right: 1.5rem;
        border: none;
        width: 20%;
        height: 65%;
        background: rgba(39, 94, 234, 0.71);
        border-radius: 6px;
        color: white;
        font-family: 'Inter';
        font-size: 0.9rem;
        text-align: center;
        cursor: pointer;
    }
`

export const blockAdd = styled.div`
    width: 100%;
    margin-top: 2.5rem;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 10px rgba(213, 213, 213, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .blockAddContainer{
        width: 90%;
        height: 85%;
    }
    .BackgroundBlockAdd{
        background: white;
        margin-top: 1rem;
        margin-bottom: 0.2rem;
        width: 100%;
        height: 3.5rem;
        box-shadow: 0px 0px 10px 5px rgba(168, 168, 168, 0.2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 6px;
        p{
            margin-left: 1.5rem;
        }
        button{
            border: none;
            background: transparent;
            cursor: pointer;
            margin-right: 1.5rem;
            img{
                max-width: 20px;
                max-height: 20px;
            }
        }
    }
`
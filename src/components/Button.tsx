import styled from "styled-components"

const StyledButton = styled.button`
    background-color: inherit;
    color: white;
    padding: 7px 20px;
    border: none;
    transition: all 0.1s ease-in;
    box-shadow: 0 0 1px 1px #669;
    &:hover {
        background-color: #669;
        cursor: pointer;
    }
`

interface Props {
    onClick: () => void;
    text: string;
}

export const Button = ({onClick, text}: Props) => {
    return <StyledButton onClick={onClick}>
        {text}
    </StyledButton>
}
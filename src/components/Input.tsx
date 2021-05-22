import React from "react"
import styled from "styled-components"

const Root = styled.div`
    display: flex;
    flex-direction: column;
`

const StyledInput = styled.input`
    padding: 8px;
    background-color: inherit;
    color: inherit;
    border: none;
    border-bottom: 2px solid #669;
    transition: all 0.1s ease-in;
    &:hover {
        border-bottom-color: white;
    }

    &:focus {
        outline: none;
        background: #445;
    }
`

const ErrorMessage = styled.div`
    color: red;
    font-size: 0.7em;
`

interface Props {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    text: string;
    hint?: string;
    error?: string;
}

export const Input = ({ text, onChange, hint, error }: Props) => {
    return (
        <Root>
            <StyledInput
                value={text}
                onChange={onChange}
                placeholder={hint}
                style={error ? {
                    borderBottomColor: "red"
                } : {}} />
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </Root>
    )
}
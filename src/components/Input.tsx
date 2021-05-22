import React from "react"
import styled from "styled-components"

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

interface Props {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    text: string;
    hint?: string;
    error?: boolean;
}

export const Input = ({text, onChange, hint, error}: Props) => {
    return <StyledInput 
        value={text} 
        onChange={onChange} 
        placeholder={hint} 
        style={error ? {
            borderBottomColor: "red"
        }: {}}/>
}
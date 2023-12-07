import { createGlobalStyle } from "styled-components";

const breakpoints = {
    sm: "480px",
    md: "768px",
    lg: "1024px",
    xl: "1200px",
    xxl: "1400px",
};

export const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
        background-color: ${props => props.theme['black-900']};
        color: ${props => props.theme['main-color']};
    }

    a {
    text-decoration: none;
    color: inherit;
    }

    .container {
        display: flex;
    }

    @media screen and(max-width:${breakpoints.lg}) {
        width: max-content;
    }
`;
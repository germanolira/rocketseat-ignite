import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --red: #E52E4D;
        --blue: #5429CC;
        --blue-light: #6933FF;
        --text-title: #363F5F;
        --text-body: #969CB3;
        --shape: #FFFFFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // Font-size: 16px (Desktop) -> vem por padrão
    // Use REM como padrão do projeto, principalmente para responsividade
    // Principalmente para acessibilidade, caso o usuario use por padrão
    // Do celular, uma fonte maior ou menor do que o padrão, usando a tag
    // REM, ela vai se adaptar para o padrão do celular do usuario, e não
    // Utilizar um tamanho de fonte fixo, que é no caso o que acontece
    // Com a tag px no css

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disable] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`
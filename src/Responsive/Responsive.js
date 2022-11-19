/*STYLED-COMPONENTS*/
import { css } from 'styled-components'

export const Mobile = (props) => {
    return css`
        @media only screen and (max-width: 380px) {
            ${props}
        }

        ,
        @media only screen and (max-width: 600px) {
            ${props}
        }

        ,
        @media only screen and (max-width: 900px) {
            ${props}
        }

        ,
        @media only screen and (max-width: 1200px) {
            ${props}
        }

        ,
        @media only screen and (max-width: 1500px) {
            ${props}
        }

        ,
        @media only screen and (max-width: 1800px) {
            ${props}
        }
    `
}

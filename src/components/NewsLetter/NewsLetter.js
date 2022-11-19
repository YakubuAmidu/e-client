/*MATERIAL-ICONS*/
import Send from '@mui/icons-material/Send'

/*STYLED-COMPONENTS*/
import styled from 'styled-components'
import { Mobile } from '../../Responsive/Responsive'

const Container = styled.div`
    height: 60vh;
    background-color: var(--color-light-pink);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;

    ${Mobile({
        fontSize: '50px',
    })}
`

const Desc = styled.div`
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: 300;

    ${Mobile({
        textAlign: 'center',
    })}
`

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: var(--color-white);
    display: flex;
    justify-content: space-between;
    border: 1px solid var(--color-light-gray-1);

    ${Mobile({
        width: '80%',
    })}
`

const Input = styled.input`
    border: none;
    flex: 8;
    padding: 20px;
    font-size: 20px;

    &:focus {
        outline: none;
    }
`

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: var(--color-white);
    cursor: pointer;
`

const NewsLetter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Get timely updates from your favorite products.</Desc>
            <InputContainer>
                <Input placeholder="Your email..." />
                <Button>
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default NewsLetter

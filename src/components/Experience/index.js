import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 80px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 80px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const index = () => {
    return (
        <Container id='experience'>
            <Wrapper>
                <Title>Experience</Title>
                <Desc>
                    I am a self-taught web developer who began my journey in
                    December 2023 with Programming Hero's Complete Web
                    Development Course. I have developed proficiency in HTML,
                    CSS, and JavaScript, and am currently focusing on advancing
                    my skills in React and Next.js. With a solid foundation in
                    the MERN stack, I am dedicated to specializing as a MERN
                    Developer, with a goal of building scalable,
                    high-performance full-stack web applications.
                </Desc>
            </Wrapper>
        </Container>
    );
};

export default index;

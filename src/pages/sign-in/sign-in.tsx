import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { ComponentContext } from "../../context/componentContext";
import GoogleIcon from '../../assets/icon-google.png';
import ExclamationIcon from '../../assets/icon-exclamation.png';

import {

    MainContainer,
    LoginContainer,
    GoogleIconContainer,
    LoginSpanContainer,
    LoginSpan,
    SecondLoginSpan,
    EmailInfoContainer,
    EmailContainer,
    EmailInput,
    EmailLabel,
    ExclamationIconContainer,
    PasswordInfoContainer,
    PasswordContainer,
    PasswordInput,
    PasswordLabel,
    InvalidPasswordMessage,
    ShowPasswordContainer,
    CheckboxContainer,
    StyledCheckbox,
    ShowPasswordSpanContainer,
    ShowPasswordSpan,
    ButtonsContainer,
    SignUpContainer,
    ButtonsContainerSpans,
    NextButtonContainer,
    EmptyContainer,
    EmptyMessage

} from "./sign-in-styles";


export default function SignIn() {

    const { handleLogin, email, setEmail, password, setPassword, showPassword, setShowPassword } = useContext(UserContext);
    const { isFocused, setIsFocused } = useContext(ComponentContext);

    const [validEmail, setValidEmail] = useState(true);
    const [formatEmailValid, setFormatEmailValid] = useState(true);

    const [validPassword, setValidPassword] = useState(true);
    const [passwordFocused, setPasswordFocused] = useState(false);

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    useEffect(() => {
        if (emailRef.current !== null) {
            emailRef.current.focus()
        }
    }, [])

    const userLogin = () => {
        if (email.trim() !== '') {
            setValidEmail(true)
        }
        if (password.trim() !== '') {
            setValidPassword(true)
        }
        if (email.trim() === '' && password.trim() === '') {
            setValidEmail(false)
            setValidPassword(false)
            if (emailRef.current) {
                emailRef.current.focus()
            }
        }
        else if (email.trim() === '') {
            setValidEmail(false)
            if (emailRef.current) {
                emailRef.current.focus()
            }
        }
        else if (!/\S+@\S+\.\S+/.test(email)) {
            setFormatEmailValid(false)
            setValidEmail(false)
            if (emailRef.current) {
                emailRef.current.focus()
            }
        }
        else if (password.trim() === '' || password.length < 8) {
            setValidPassword(false)
            if (passwordRef.current) {
                passwordRef.current.focus()
            }
        }
        else {
            handleLogin(email, password)
        }
    }


    return (
        <MainContainer>

            <LoginContainer>
                <GoogleIconContainer alt="" src={GoogleIcon} />

                <LoginSpanContainer>
                    <LoginSpan>Fazer login</LoginSpan>
                    <SecondLoginSpan >Prosseguir no YouTube</SecondLoginSpan>
                </LoginSpanContainer>

                <EmailInfoContainer>

                    <EmailContainer isFocused={isFocused} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}>

                        <EmailInput
                            valid={validEmail}
                            value={email}
                            ref={emailRef}
                            placeholder=" "
                            type='email'
                            onChange={(e) => setEmail(e.target.value)}

                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    userLogin()
                                }
                            }}
                        />

                        <EmailLabel valid={validEmail}>E-mail ou telefone</EmailLabel>

                    </EmailContainer>

                    <EmptyContainer style={{ margin: '180px 0 0 -91%' }} valid={validEmail}>
                        <ExclamationIconContainer alt="" src={ExclamationIcon} />
                        <EmptyMessage>Não foi possível encontrar sua Conta do Google.</EmptyMessage>
                    </EmptyContainer>

                </EmailInfoContainer>


                <PasswordInfoContainer>

                    <PasswordContainer passwordFocused={passwordFocused} onFocus={() => setPasswordFocused(true)} onBlur={() => setPasswordFocused(false)}>
                        <PasswordInput
                            valid={validPassword}
                            value={password}
                            ref={passwordRef}
                            maxLength={16}
                            placeholder=" "
                            type={showPassword ? 'text' : 'password'}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    userLogin()
                                }
                                if (e.key === " ") {
                                    e.preventDefault();
                                }
                            }}
                        />
                        <PasswordLabel valid={validPassword}>Digite sua senha</PasswordLabel>
                    </PasswordContainer>

                    <EmptyContainer style={{ margin: '74px 0 0 -91%' }} valid={validPassword}>
                        <ExclamationIconContainer alt="" src={ExclamationIcon} />
                        <EmptyMessage>Senha incorreta. Tente novamente.</EmptyMessage>
                    </EmptyContainer>

                </PasswordInfoContainer>

                <ShowPasswordContainer>
                    <StyledCheckbox onClick={() => setShowPassword(!showPassword)} />
                    <ShowPasswordSpanContainer>
                        <ShowPasswordSpan>Mostrar senha</ShowPasswordSpan>
                    </ShowPasswordSpanContainer>
                </ShowPasswordContainer>

                <ButtonsContainer>

                    <SignUpContainer onClick={() => navigate('/sign-up')}>
                        <ButtonsContainerSpans style={{ color: "#4169E1" }}>Criar conta</ButtonsContainerSpans>
                    </SignUpContainer>

                    <NextButtonContainer>
                        <ButtonsContainerSpans style={{ paddingLeft: "25px", color: "#fff" }} onClick={userLogin} >Próxima</ButtonsContainerSpans>
                    </NextButtonContainer>

                </ButtonsContainer>

            </LoginContainer>

        </MainContainer>

    )
}
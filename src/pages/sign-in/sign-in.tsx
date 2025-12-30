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
    StyledCheckbox,
    ButtonsContainer,
    SignUpContainer,
    ButtonsContainerSpans,
    NextButtonContainer,
    EmailEmptyContainer,
    PasswordEmptyContainer

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
                    <span>Fazer login</span>
                    <span >Prosseguir no YouTube</span>
                </LoginSpanContainer>

                <EmailInfoContainer valid={validEmail}>

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

                    <EmailEmptyContainer valid={validEmail}>
                        <ExclamationIconContainer alt="" src={ExclamationIcon} />
                        <span>Não foi possível encontrar sua Conta do Google.</span>
                    </EmailEmptyContainer>

                </EmailInfoContainer>

                <PasswordInfoContainer valid={validPassword}>

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

                    <PasswordEmptyContainer valid={validPassword}>
                        <ExclamationIconContainer alt="" src={ExclamationIcon} />
                        <span>Senha incorreta. Tente novamente.</span>
                    </PasswordEmptyContainer>

                </PasswordInfoContainer>

                <ShowPasswordContainer>

                    <StyledCheckbox
                        checked={showPassword}
                        onChange={() => setShowPassword(!showPassword)}
                    />

                    <span onClick={() => setShowPassword(!showPassword)}>Mostrar senha</span>
                </ShowPasswordContainer>

                <ButtonsContainer>

                    <SignUpContainer onClick={() => navigate('/sign-up')}>
                        <span>Criar conta</span>
                    </SignUpContainer>

                    <NextButtonContainer>
                        <span onClick={userLogin} >Próxima</span>
                    </NextButtonContainer>

                </ButtonsContainer>


            </LoginContainer>
        </MainContainer>

    )
}

/*  <LoginContainer>
                <GoogleIconContainer alt="" src={GoogleIcon} />

                <LoginSpanContainer>
                    <span>Fazer login</span>
                    <span >Prosseguir no YouTube</span>
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

                    <StyledCheckbox
                        checked={showPassword}
                        onChange={() => setShowPassword(!showPassword)}
                    />

                    <span onClick={() => setShowPassword(!showPassword)}>Mostrar senha</span>
                </ShowPasswordContainer>

                <ButtonsContainer>

                    <SignUpContainer onClick={() => navigate('/sign-up')}>
                        <span>Criar conta</span>
                    </SignUpContainer>

                    <NextButtonContainer>
                        <span onClick={userLogin} >Próxima</span>
                    </NextButtonContainer>

                </ButtonsContainer>

            </LoginContainer>*/
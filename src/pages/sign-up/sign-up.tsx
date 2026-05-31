import { useState, useContext, useRef, useEffect } from 'react';
import { UserContext } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';

import GoogleIcon from '../../assets/icon-google.png';
import ExclamationIcon from '../../assets/icon-exclamation.png';

import {
    MainContainer,
    SignUpContainer,
    GoogleIconContainer,
    Title,
    FirstNameContainer,
    FirstNameUserContainer,
    FirstNameUserInput,
    FirstNameLabel,
    SurnameContainer,
    SurnameUserContainer,
    SurnameUserInput,
    SurnameLabel,
    EmailContainer,
    EmailUserContainer,
    EmailUserInput,
    EmailUserLabel,
    PasswordContainer,
    PasswordUserContainer,
    PasswordUserInput,
    PasswordUserLabel,
    ComparePasswordContainer,
    ComparePasswordUserContainer,
    ComparePasswordUserInput,
    ComparePasswordUserLabel,
    NicknameContainer,
    NicknameUserContainer,
    NicknameUserInput,
    NicknameUserLabel,
    PasswordMessageContainer,
    ShowPasswordContainer,
    StyledCheckbox,
    LoginPageContainer,
    LoginPage,
    NextButtonContainer,
    NextButton,
    EmptyContainer,
    EmptyMessage,
    ExclamationIconContainer,

} from './sign-up-styles';

const NAME_FORMAT_REGEX = /^[a-zA-ZÀ-ÿ]{3,}$/;

const isNameFormatValid = (name: string) => NAME_FORMAT_REGEX.test(name.trim());

export default function SignUp() {

    const navigate = useNavigate();

    const { showPassword, setShowPassword } = useContext(UserContext);

    const [firstNameFocus, setFirstNameFocus] = useState(false);
    const [surnameFocus, setSurnameFocus] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);
    const [comparePasswordFocus, setComparePasswordFocus] = useState(false);
    const [nicknameFocus, setNicknameFocus] = useState(false);

    const handleShowPassword = () => { setShowPassword(!setShowPassword) }

    const [userName, setUserName] = useState('');
    const [userSurname, setUserSurname] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [comparePassword, setComparePassword] = useState('');
    const [userNickname, setUserNickname] = useState('');

    const [userNameValid, setUserNameValid] = useState(true);
    const [userSurnameValid, setUserSurnameValid] = useState(true);
    const [userEmailValid, setUserEmailValid] = useState(true);
    const [userPasswordValid, setUserPasswordValid] = useState(true);
    const [comparePasswordValid, setComparePasswordValid] = useState(true);
    const [userNicknameValid, setUserNicknameValid] = useState(true);

    const [formatNameValid, setFormatNameValid] = useState(true);
    const [formatEmailValid, setFormatEmailValid] = useState(true);
    const [formatPasswordValid, setFormatPasswordValid] = useState(true);
    const [formatNicknameValid, setFormatNicknameValid] = useState(true);
    const [samePassword, setSamePassword] = useState(true);


    const nameRef = useRef<HTMLInputElement>(null);
    const surnameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const comparePasswordRef = useRef<HTMLInputElement>(null);
    const nicknameRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (nameRef.current !== null) { nameRef.current.focus() }
    }, [])

    const { handleCreateUser } = useContext(UserContext);

    const createUser = () => {
        if (userName.trim() !== '') { setUserNameValid(true) }

        if (isNameFormatValid(userName)) { setFormatNameValid(true) }

        if (userSurname.trim() !== '') { setUserSurnameValid(true) }

        if (userEmail.trim() !== '') { setFormatEmailValid(true) }

        if (userPassword.trim() !== '') { setUserPasswordValid(true) }

        if (userPassword.length >= 8) { setFormatPasswordValid(true) }

        if (comparePassword.trim() !== '') { setComparePasswordValid(true) }

        if (userPassword === comparePassword && userPassword !== '') { setSamePassword(true) }

        if (userNickname.trim() !== '') { setFormatNicknameValid(true) }

        if (userName.trim() === '' && userEmail.trim() === '' && userPassword.trim() === '') {
            setUserNameValid(false);
            setUserSurnameValid(false);
            setUserEmailValid(false);
            setUserPasswordValid(false);
            setComparePasswordValid(false);

            if (nameRef.current) { nameRef.current.focus() }
        }
        else if (userName.trim() === '') {
            setUserNameValid(false);
            setFormatNameValid(true);
            if (nameRef.current) { nameRef.current.focus() }
        }

        else if (!isNameFormatValid(userName)) {
            setFormatNameValid(false);
            setUserNameValid(true);
            if (nameRef.current) { nameRef.current.focus() }
        }

        else if (userSurname.trim() === '') {
            setUserSurnameValid(false);
            if (surnameRef.current) { surnameRef.current.focus() }
        }

        else if (!isNameFormatValid(userSurname)) {
            setFormatNameValid(false);
            setUserSurnameValid(true);
            if (surnameRef.current) { surnameRef.current.focus() }
        }

        else if (userEmail.trim() === '') {
            setUserEmailValid(false);
            setFormatEmailValid(true);
            if (emailRef.current) { emailRef.current.focus() }
        }

        else if (!/\S+@\S+\.\S+/.test(userEmail)) {
            setFormatEmailValid(false);
            setUserEmailValid(true);
            if (emailRef.current) { emailRef.current.focus() }
        }

        else if (userPassword.trim() === '') {
            setUserPasswordValid(false);
            setFormatPasswordValid(true);
            if (passwordRef.current) { passwordRef.current.focus() }
        }

        else if (userPassword.length < 8) {
            setFormatPasswordValid(false);
            setUserPasswordValid(true);
            if (passwordRef.current) { passwordRef.current.focus() }
        }

        else if (comparePassword.trim() === '') {
            setComparePasswordValid(false)
            if (comparePasswordRef.current) { comparePasswordRef.current.focus() }
        }

        else if (userPassword !== comparePassword) {
            setSamePassword(false)
            if (comparePasswordRef.current) { comparePasswordRef.current.focus() }
        }

        else if (userNickname.trim() === '') {
            setUserNicknameValid(false);
            setFormatNicknameValid(true);
            if (nicknameRef.current) { nicknameRef.current.focus() }
        }

        else if (!/\S+@\S+\.\S+/.test(userNickname)) {
            setFormatNicknameValid(false);
            setUserNicknameValid(true);
            if (nicknameRef.current) { nicknameRef.current.focus() }
        }

        else { handleCreateUser(userName, userSurname, userEmail, userPassword, userNickname) }
    }

    return (
        <MainContainer>

            <SignUpContainer>

                <GoogleIconContainer alt="ícone do Google" src={GoogleIcon} />
                <Title>Criar uma conta no YouTube</Title>

                <FirstNameContainer>
                    <FirstNameUserContainer firstNameFocus={firstNameFocus} onFocus={() => setFirstNameFocus(true)} onBlur={() => setFirstNameFocus(false)}>

                        <FirstNameUserInput
                            valid={userNameValid && formatNameValid}
                            placeholder=' '
                            type='text'
                            value={userName}
                            ref={nameRef}
                            onChange={(e) => {
                                setUserName(e.target.value)
                            }}
                        />
                        <FirstNameLabel valid={userNameValid && formatNameValid}>Nome</FirstNameLabel>

                    </FirstNameUserContainer>


                    <EmptyContainer valid={userNameValid && formatNameValid}>
                        <ExclamationIconContainer alt="" src={ExclamationIcon} />
                        <EmptyMessage>
                            {!formatNameValid
                                ? 'Digite um nome válido.'
                                : 'Digite seu nome.'}
                        </EmptyMessage>
                    </EmptyContainer>

                </FirstNameContainer>

                <SurnameContainer>
                    <SurnameUserContainer surnameFocus={surnameFocus} onFocus={() => setSurnameFocus(true)} onBlur={() => setSurnameFocus(false)}>

                        <SurnameUserInput
                            valid={userSurnameValid && formatNameValid}
                            value={userSurname}
                            ref={surnameRef}
                            placeholder=' '
                            type='text'
                            onChange={(e) => {
                                setUserSurname(e.target.value)
                            }}
                        />

                        <SurnameLabel valid={userSurnameValid && formatNameValid}>Sobrenome</SurnameLabel>

                    </SurnameUserContainer>

                    <EmptyContainer valid={userSurnameValid && formatNameValid}>
                        <ExclamationIconContainer alt="" src={ExclamationIcon} />
                        <EmptyMessage>
                            {!formatNameValid
                                ? 'Digite um sobrenome válido.'
                                : 'Digite seu sobrenome.'}
                        </EmptyMessage>
                    </EmptyContainer>

                </SurnameContainer>

                <EmailContainer>
                    <EmailUserContainer emailFocus={emailFocus} onFocus={() => setEmailFocus(true)} onBlur={() => setEmailFocus(false)}>

                        <EmailUserInput
                            valid={userEmailValid && formatEmailValid}
                            value={userEmail}
                            ref={emailRef}
                            placeholder=' '
                            type='email'
                            onChange={(e) => { setUserEmail(e.target.value) }}
                        />

                        <EmailUserLabel valid={userEmailValid && formatEmailValid}>E-mail</EmailUserLabel>

                    </EmailUserContainer>

                    <EmptyContainer valid={userEmailValid && formatEmailValid}>
                        <ExclamationIconContainer alt="" src={ExclamationIcon} />
                        <EmptyMessage>
                            {!formatEmailValid
                                ? 'O formato desse e-mail é inválido. Digite um e-mail válido!'
                                : 'Digite seu e-mail.'}
                        </EmptyMessage>
                    </EmptyContainer>


                </EmailContainer>

                <PasswordContainer>
                    <PasswordUserContainer passwordFocus={passwordFocus} onFocus={() => setPasswordFocus(true)} onBlur={() => setPasswordFocus(false)}>

                        <PasswordUserInput
                            valid={userPasswordValid && formatPasswordValid}
                            value={userPassword}
                            ref={passwordRef}
                            placeholder=' '
                            type={showPassword ? 'text' : 'password'}
                            onChange={(e) => { setUserPassword(e.target.value) }} />

                        <PasswordUserLabel valid={userPasswordValid && formatPasswordValid}>Senha</PasswordUserLabel>

                    </PasswordUserContainer>

                    <EmptyContainer valid={userPasswordValid && formatPasswordValid}>
                        <ExclamationIconContainer alt="" src={ExclamationIcon} />
                        <EmptyMessage>
                            {!formatPasswordValid
                                ? 'Digite uma senha válida!'
                                : 'Digite sua senha.'}
                        </EmptyMessage>
                    </EmptyContainer>
                </PasswordContainer>

                <ComparePasswordContainer>
                    <ComparePasswordUserContainer comparePasswordFocus={comparePasswordFocus} onFocus={() => setComparePasswordFocus(true)} onBlur={() => setComparePasswordFocus(false)}>

                        <ComparePasswordUserInput
                            valid={comparePasswordValid && samePassword}
                            value={comparePassword}
                            ref={comparePasswordRef}
                            placeholder=' '
                            type={showPassword ? 'text' : 'password'}
                            onChange={(e) => { setComparePassword(e.target.value) }} />

                        <ComparePasswordUserLabel valid={comparePasswordValid && samePassword}>Confirmar Senha</ComparePasswordUserLabel>

                    </ComparePasswordUserContainer>

                    <EmptyContainer valid={comparePasswordValid && samePassword}>
                        <ExclamationIconContainer alt="" src={ExclamationIcon} />
                        <EmptyMessage>
                            {!samePassword
                                ? 'As senhas não coincidem.'
                                : 'Confirme sua senha.'}
                        </EmptyMessage>
                    </EmptyContainer>
                </ComparePasswordContainer>

                <NicknameContainer>
                    <NicknameUserContainer nicknameFocus={nicknameFocus} onFocus={() => setNicknameFocus(true)} onBlur={() => setNicknameFocus(false)}>

                        <NicknameUserInput
                            valid={userNicknameValid && formatNicknameValid}
                            value={userNickname}
                            ref={nicknameRef}
                            placeholder=' '
                            type='text'
                            onChange={(e) => { setUserNickname(e.target.value) }} />

                        <NicknameUserLabel valid={userNicknameValid && formatNicknameValid}>Nome de usuário</NicknameUserLabel>

                    </NicknameUserContainer>

                    <EmptyContainer valid={userNicknameValid && formatNicknameValid}>
                        <ExclamationIconContainer alt="" src={ExclamationIcon} />
                        <EmptyMessage>
                            {!formatNicknameValid
                                ? 'Digite um nome de usuário válido!'
                                : 'Digite seu nome de usuário.'}
                        </EmptyMessage>
                    </EmptyContainer>
                </NicknameContainer>

                <PasswordMessageContainer><span>Use 8 caracteres com uma combinação de letras, números e símbolos.</span></PasswordMessageContainer>

                <ShowPasswordContainer>

                    <StyledCheckbox
                        checked={showPassword}
                        onChange={() => setShowPassword(!showPassword)} />

                    <span onClick={() => setShowPassword(!showPassword)}>Mostrar senha</span>
                </ShowPasswordContainer>

                <LoginPageContainer>
                    <LoginPage>
                        <span onClick={() => navigate('/sign-in')}>Faça login em vez disso</span>
                    </LoginPage>
                </LoginPageContainer>

                <NextButtonContainer>
                    <NextButton>
                        <span onClick={createUser}>Próxima</span>
                    </NextButton>
                </NextButtonContainer>


            </SignUpContainer>

        </MainContainer>
    )
}
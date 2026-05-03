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


export default function SignUp() {

    const navigate = useNavigate();

    const { showPassword, setShowPassword } = useContext(UserContext);

    const [firstNameFocus, setFirstNameFocus] = useState(false);
    const [surnameFocus, setSurnameFocus] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);
    const [comparePasswordFocus, setComparePasswordFocus] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!setShowPassword);
    }

    const [userName, setUserName] = useState('');
    const [userSurname, setUserSurname] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [comparePassword, setComparePassword] = useState('');

    const [userNameValid, setUserNameValid] = useState(true);
    const [userSurnameValid, setUserSurnameValid] = useState(true);
    const [userEmailValid, setUserEmailValid] = useState(true);
    const [userPasswordValid, setUserPasswordValid] = useState(true);

    const [formatEmailValid, setFormatEmailValid] = useState(true);
    const [samePassword, setSamePassword] = useState(true);

    const nameRef = useRef<HTMLInputElement>(null);
    const surnameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const comparePasswordRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (nameRef.current !== null) {
            nameRef.current.focus();
        }
    }, [])

    const { handleCreateUser } = useContext(UserContext);

    const createUser = () => {
        if (userName.trim() !== '') {
            setUserNameValid(true)
        }
        if (userSurname.trim() !== '') {
            setUserSurnameValid(true)
        }
        if (userEmail.trim() !== '') {
            setFormatEmailValid(true)
        }
        if (userPassword.trim() !== '' && comparePassword.trim()! == '') {
            setUserPasswordValid(true)
        }
        if (userName.trim() === '' && userEmail.trim() === '' && userPassword.trim() === '') {
            setUserNameValid(false);
            setUserSurnameValid(false);
            setUserEmailValid(false);
            setUserPasswordValid(false);
            if (nameRef.current) {
                nameRef.current.focus();
            }
        }
        else if (userName.trim() === '') {
            setUserNameValid(false);
            if (nameRef.current) {
                nameRef.current.focus();
            }
        }
        else if (userSurname.trim() === '') {
            setUserSurnameValid(false);
            if (surnameRef.current) {
                surnameRef.current.focus();
            }
        }
        else if (userEmail.trim() === '') {
            setUserEmailValid(false);
            setFormatEmailValid(true);
            if (emailRef.current) {
                emailRef.current.focus();
            }
        }
        else if (!/\S+@\S+\.\S+/.test(userEmail)) {
            setFormatEmailValid(false);
            setUserEmailValid(false);
            if (emailRef.current) {
                emailRef.current.focus();
            }
        }
        else if (userPassword.trim() === '' || userPassword.length < 8) {
            setUserPasswordValid(false);
            if (passwordRef.current) {
                passwordRef.current.focus();
            }
        }
        else if (comparePassword.trim() === '') {
            setUserPasswordValid(false)
            if (comparePasswordRef.current) {
                comparePasswordRef.current.focus();
            }
        }
        else if (userPassword !== comparePassword) {
            setUserPasswordValid(false)
            setSamePassword(false)
            if (comparePasswordRef.current) {
                comparePasswordRef.current.focus();
            }
        }
        else {
            handleCreateUser(userName, userSurname, userEmail, userPassword)
        }
    }

    return (
        <MainContainer>

            <SignUpContainer>

                <GoogleIconContainer alt="ícone do Google" src={GoogleIcon} />
                <Title>Criar uma conta no YouTube</Title>

                <FirstNameContainer>
                    <FirstNameUserContainer firstNameFocus={firstNameFocus} onFocus={() => setFirstNameFocus(true)} onBlur={() => setFirstNameFocus(false)}>

                        <FirstNameUserInput
                            valid={userNameValid}
                            placeholder=' '
                            type='text'
                            value={userName}
                            ref={nameRef}
                            onChange={(e) => {
                                setUserName(e.target.value)
                            }}
                        />
                        <FirstNameLabel valid={userNameValid}>Nome</FirstNameLabel>

                    </FirstNameUserContainer>


                    <EmptyContainer valid={userNameValid}>
                        <ExclamationIconContainer alt="" src={ExclamationIcon} />
                        <EmptyMessage>Digite um nome</EmptyMessage>
                    </EmptyContainer>

                </FirstNameContainer>

                <SurnameContainer>
                    <SurnameUserContainer surnameFocus={surnameFocus} onFocus={() => setSurnameFocus(true)} onBlur={() => setSurnameFocus(false)}>

                        <SurnameUserInput
                            valid={userSurnameValid}
                            value={userSurname}
                            ref={surnameRef}
                            placeholder=' '
                            type='text'
                            onChange={(e) => {
                                setUserSurname(e.target.value)
                            }}
                        />

                        <SurnameLabel valid={userSurnameValid}>Sobrenome</SurnameLabel>

                    </SurnameUserContainer>

                    <EmptyContainer valid={userSurnameValid}>
                        <ExclamationIconContainer alt="" src={ExclamationIcon} />
                        <EmptyMessage>Digite um Sobrenome</EmptyMessage>
                    </EmptyContainer>

                </SurnameContainer>

                <EmailContainer>
                    <EmailUserContainer emailFocus={emailFocus} onFocus={() => setEmailFocus(true)} onBlur={() => setEmailFocus(false)}>

                        <EmailUserInput
                            valid={userEmailValid}
                            value={userEmail}
                            ref={emailRef}
                            placeholder=' '
                            type='email'
                            onChange={(e) => {
                                setUserEmail(e.target.value)
                            }
                            }
                        />

                        <EmailUserLabel valid={userEmailValid}>E-mail</EmailUserLabel>

                    </EmailUserContainer>

                    <EmptyContainer valid={userEmailValid}>
                        <ExclamationIconContainer alt="" src={ExclamationIcon} />
                        <EmptyMessage>Digite um E-mail</EmptyMessage>
                    </EmptyContainer>
                </EmailContainer>

                <PasswordContainer>
                    <PasswordUserContainer passwordFocus={passwordFocus} onFocus={() => setPasswordFocus(true)} onBlur={() => setPasswordFocus(false)}>

                        <PasswordUserInput
                            valid={userPasswordValid}
                            value={userPassword}
                            ref={passwordRef}
                            placeholder=' '
                            type={showPassword ? 'email' : 'password'}
                            onChange={(e) => {
                                setUserPassword(e.target.value)
                            }
                            }
                        />

                        <PasswordUserLabel valid={userPasswordValid}>Senha</PasswordUserLabel>

                    </PasswordUserContainer>

                    <EmptyContainer valid={userPasswordValid}>
                        <ExclamationIconContainer alt="" src={ExclamationIcon} />
                        <EmptyMessage>Digite uma senha</EmptyMessage>
                    </EmptyContainer>
                </PasswordContainer>

                <ComparePasswordContainer >
                    <ComparePasswordUserContainer comparePasswordFocus={comparePasswordFocus} onFocus={() => setComparePasswordFocus(true)} onBlur={() => setComparePasswordFocus(false)}>

                        <ComparePasswordUserInput
                            valid={userPasswordValid}
                            value={comparePassword}
                            ref={comparePasswordRef}
                            placeholder=' '
                            type={showPassword ? 'email' : 'password'}
                            onChange={(e) => {
                                setComparePassword(e.target.value)
                            }
                            }
                        />

                        <ComparePasswordUserLabel valid={userPasswordValid}>Confirmar Senha</ComparePasswordUserLabel>

                    </ComparePasswordUserContainer>

                    <EmptyContainer valid={userPasswordValid}>
                        <ExclamationIconContainer alt="" src={ExclamationIcon} />
                        <EmptyMessage>Confirme sua senha</EmptyMessage>
                    </EmptyContainer>
                </ComparePasswordContainer>

                <PasswordMessageContainer>
                    <span>Use 8 caracteres com uma combinação de letras, números e símbolos.</span>
                </PasswordMessageContainer>

                <ShowPasswordContainer>

                    <StyledCheckbox
                        checked={showPassword}
                        onChange={() => setShowPassword(!showPassword)}
                    />

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

/* import { useState, useContext, useRef, useEffect } from 'react';
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

export default function SignUp() {
    const navigate = useNavigate();

    const { showPassword, setShowPassword, handleCreateUser } =
        useContext(UserContext);

    // 🔹 Estado centralizado
    const [form, setForm] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({
        name: false,
        surname: false,
        email: false,
        password: false,
        confirmPassword: false,
        emailFormat: false,
        passwordMatch: false,
    });

    // 🔹 Refs
    const nameRef = useRef<HTMLInputElement>(null);
    const surnameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        nameRef.current?.focus();
    }, []);

    // 🔹 Atualizador genérico
    const updateField = (field: string, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    // 🔹 Validação limpa
    const validate = () => {
        const newErrors = {
            name: form.name.trim() === '',
            surname: form.surname.trim() === '',
            email: form.email.trim() === '',
            password: form.password.length < 8,
            confirmPassword: form.confirmPassword === '',
            emailFormat: !/\S+@\S+\.\S+/.test(form.email),
            passwordMatch: form.password !== form.confirmPassword,
        };

        setErrors(newErrors);

        // foco inteligente
        if (newErrors.name) return nameRef.current?.focus();
        if (newErrors.surname) return surnameRef.current?.focus();
        if (newErrors.email || newErrors.emailFormat)
            return emailRef.current?.focus();
        if (newErrors.password) return passwordRef.current?.focus();
        if (newErrors.confirmPassword || newErrors.passwordMatch)
            return confirmPasswordRef.current?.focus();

        return !Object.values(newErrors).includes(true);
    };

    const createUser = () => {
        if (!validate()) return;

        handleCreateUser(
            form.name,
            form.surname,
            form.email,
            form.password
        );
    };

    return (
        <MainContainer>
            <SignUpContainer>
                <GoogleIconContainer src={GoogleIcon} />
                <Title>Criar uma conta no YouTube</Title>

                <FirstNameContainer>
                    <FirstNameUserContainer>
                        <FirstNameUserInput
                            value={form.name}
                            ref={nameRef}
                            placeholder=" "
                            onChange={(e) => updateField('name', e.target.value)}
                        />
                        <FirstNameLabel>Nome</FirstNameLabel>
                    </FirstNameUserContainer>

                    {errors.name && (
                        <EmptyContainer>
                            <ExclamationIconContainer src={ExclamationIcon} />
                            <EmptyMessage>Digite um nome</EmptyMessage>
                        </EmptyContainer>
                    )}
                </FirstNameContainer>

                <SurnameContainer>
                    <SurnameUserContainer>
                        <SurnameUserInput
                            value={form.surname}
                            ref={surnameRef}
                            placeholder=" "
                            onChange={(e) => updateField('surname', e.target.value)}
                        />
                        <SurnameLabel>Sobrenome</SurnameLabel>
                    </SurnameUserContainer>

                    {errors.surname && (
                        <EmptyContainer>
                            <ExclamationIconContainer src={ExclamationIcon} />
                            <EmptyMessage>Digite um sobrenome</EmptyMessage>
                        </EmptyContainer>
                    )}
                </SurnameContainer>

                <EmailContainer>
                    <EmailUserContainer>
                        <EmailUserInput
                            value={form.email}
                            ref={emailRef}
                            placeholder=" "
                            onChange={(e) => updateField('email', e.target.value)}
                        />
                        <EmailUserLabel>E-mail</EmailUserLabel>
                    </EmailUserContainer>

                    {(errors.email || errors.emailFormat) && (
                        <EmptyContainer>
                            <ExclamationIconContainer src={ExclamationIcon} />
                            <EmptyMessage>E-mail inválido</EmptyMessage>
                        </EmptyContainer>
                    )}
                </EmailContainer>

                <PasswordContainer>
                    <PasswordUserContainer>
                        <PasswordUserInput
                            value={form.password}
                            ref={passwordRef}
                            placeholder=" "
                            type={showPassword ? 'text' : 'password'}
                            onChange={(e) => updateField('password', e.target.value)}
                        />
                        <PasswordUserLabel>Senha</PasswordUserLabel>
                    </PasswordUserContainer>

                    {errors.password && (
                        <EmptyContainer>
                            <ExclamationIconContainer src={ExclamationIcon} />
                            <EmptyMessage>Senha inválida</EmptyMessage>
                        </EmptyContainer>
                    )}
                </PasswordContainer>

                <ComparePasswordContainer>
                    <ComparePasswordUserContainer>
                        <ComparePasswordUserInput
                            value={form.confirmPassword}
                            ref={confirmPasswordRef}
                            placeholder=" "
                            type={showPassword ? 'text' : 'password'}
                            onChange={(e) =>
                                updateField('confirmPassword', e.target.value)
                            }
                        />
                        <ComparePasswordUserLabel>
                            Confirmar senha
                        </ComparePasswordUserLabel>
                    </ComparePasswordUserContainer>

                    {(errors.confirmPassword || errors.passwordMatch) && (
                        <EmptyContainer>
                            <ExclamationIconContainer src={ExclamationIcon} />
                            <EmptyMessage>Senhas não coincidem</EmptyMessage>
                        </EmptyContainer>
                    )}
                </ComparePasswordContainer>

                <PasswordMessageContainer>
                    <span>
                        Use 8 caracteres com uma combinação de letras,
                        números e símbolos.
                    </span>
                </PasswordMessageContainer>

                <ShowPasswordContainer>
                    <StyledCheckbox
                        checked={showPassword}
                        onChange={() => setShowPassword((prev) => !prev)}
                    />
                    <span onClick={() => setShowPassword((prev) => !prev)}>
                        Mostrar senha
                    </span>
                </ShowPasswordContainer>

                <LoginPageContainer>
                    <LoginPage>
                        <span onClick={() => navigate('/sign-in')}>
                            Faça login em vez disso
                        </span>
                    </LoginPage>
                </LoginPageContainer>

                <NextButtonContainer>
                    <NextButton onClick={createUser}>
                        Próxima
                    </NextButton>
                </NextButtonContainer>
            </SignUpContainer>
        </MainContainer>
    );
} */
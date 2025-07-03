import {
    Container,
    LogoContainer,
    ButtonContainer,
    ButtonIcon,
    SearchIconContainer,
    SearchContainer,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    HeaderButton,
    YoutubeIcon,
    YoutubeLogoContainer,
    OptionsContainer,
    LoginContainer,
    SpanButton,
    LoginButtonIcon,
    MicButton,
    BurguerIcon,
    HiddenIcon,
    KeyboardContainer,
    ClearButton,
    CloseImg
 
 } from "./header-style";
 
 import HamburguerIcon from '../../assets/hamburguer.png';
 import CloseIcon from '../../assets/Close.png'
 import Logo from '../../assets/Youtube-Logo.png';
 import SearchIcon from '../../assets/lupa.png';
 import MicIcon from '../../assets/microfone.png';
 import VideoIcon from '../../assets/video.png';
 import NotificationIcon from '../../assets/sino.png';
 import LoginIcon from '../../assets/LoginIcon.png';
 import KeyboardIcon from '../../assets/teclado.png';
 import OptionsIcon from '../../assets/options.png';
 import { useNavigate } from "react-router-dom";
 import { useContext, useState, useRef } from "react";
 import { UserContext } from "../../context/userContext";
 import { ComponentContext } from "../../context/componentContext";
 import { useSearchContext } from "../../context/searchContext";
 
 export default function Header() {
 
    const { login, logOut } = useContext(UserContext);
    const { openMenu, setOpenMenu, openBar, setOpenBar } = useContext(ComponentContext);
    const { setSearch } = useSearchContext();
 
    const [clearButton, setClearButton] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
 
    const navigate = useNavigate();
    
 
    const inputRef = useRef<HTMLInputElement>(null);
 
    const search = () => {
       setOpenSearch(true);
       if (inputRef.current) {
          inputRef.current.focus()
       }
    };
 
    const [inputValue, setInputValue] = useState('');
 
    function handleInput(inputValue: string) {
       setInputValue(inputValue)
       if (inputValue === '') {
          setClearButton(false);
       } else (
          setClearButton(true)
       )
    }
 
    const clearInput = () => {
       setInputValue('')
       setClearButton(false)
       if (inputRef.current) {
          inputRef.current.focus();
       }
    }
 
    return (
       <>
 
          <Container>
             <LogoContainer>
                <ButtonContainer onClick={() => setOpenMenu(!openMenu)} margin='0 15px 0 20px'>
                   <BurguerIcon alt="" src={HamburguerIcon} />
                </ButtonContainer>
                <YoutubeLogoContainer onClick={() => navigate('/')}>
                   <YoutubeIcon alt="" title="Página inicial do YouTube" src={Logo} />
                </YoutubeLogoContainer>
             </LogoContainer>
 
 
             <SearchContainer openSearch={openSearch}>
                <SearchInputContainer openBar={openBar} onFocus={() => setOpenBar(true)} onBlur={() => setOpenBar(false)}>
 
                   <HiddenIcon openBar={openBar} alt="" src={SearchIcon} />
                   <SearchInput openBar={openBar}
                      placeholder="Pesquisar"
                      ref={inputRef}
                      value={inputValue}
                      onChange={(e) => {
                         handleInput(e.target.value)
                      }}
                      onKeyDown={(e) => {
                         if (e.key === "Enter") {
                            setSearch(inputValue)
                            navigate('/search')
                            setOpenSearch(false)
                         }
                      }}
                   />
                   <KeyboardContainer alt="" src={KeyboardIcon} />
                   <ClearButton
                      clearButton={clearButton}
                      onClick={clearInput}
                   >
 
                      <CloseImg src={CloseIcon} />
 
                   </ClearButton>
 
                </SearchInputContainer>
                <SearchButton onClick={() => {
                   if (inputValue.trim() === '') {
                      alert('Digite algo antes de tentar pesquisar')
                      return;
                   }
                   setSearch(inputValue)
                   navigate('/search')
                }}>
                   <SearchIconContainer onClick={search} style={{ position: 'fixed' }} alt="" title="Pesquisar" src={SearchIcon} />
                </SearchButton>
             </SearchContainer>
 
             <MicButton>
                <ButtonIcon alt="" title="Pesquisar com sua voz" src={MicIcon} />
             </MicButton>
 
             <HeaderButton>
 
                {login ?
                   <>
                      <ButtonContainer style={{ borderRadius: '50%', width: '80px' }} margin="0 10px 0 0">
                         <ButtonIcon alt="" title="Criar" src={VideoIcon} />
                      </ButtonContainer>
 
                      <ButtonContainer style={{ borderRadius: '50%', width: '85px' }} margin="0 10px 0 0">
                         <ButtonIcon alt="" title="Notificações" src={NotificationIcon} />
                      </ButtonContainer>
                   </>
                   :
                   <OptionsContainer>
                      <ButtonIcon style={{ width: '23px', marginLeft: '5px' }} alt="" title="Configurações" src={OptionsIcon} />
                   </OptionsContainer>
                }
 
 
                {login ?
                   <>
                      <ButtonContainer margin-left='10px'>
                         L
                      </ButtonContainer>
                      <span onClick={() => logOut()}>Sair</span>
                   </>
                   :
                   <LoginContainer>
 
                      <SpanButton onClick={() => navigate('/login')} >
                         <LoginButtonIcon alt="" src={LoginIcon} />
                         Fazer login
                      </SpanButton>
 
                   </LoginContainer>
                }
 
             </HeaderButton>
 
          </Container>
       </>
    )
 }import {
    Container,
    LogoContainer,
    ButtonContainer,
    ButtonIcon,
    SearchIconContainer,
    SearchContainer,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    HeaderButton,
    YoutubeIcon,
    YoutubeLogoContainer,
    OptionsContainer,
    LoginContainer,
    SpanButton,
    LoginButtonIcon,
    MicButton,
    BurguerIcon,
    HiddenIcon,
    KeyboardContainer,
    ClearButton,
    CloseImg
 
 } from "./header-style";
 
 import HamburguerIcon from '../../assets/hamburguer.png';
 import CloseIcon from '../../assets/Close.png'
 import Logo from '../../assets/Youtube-Logo.png';
 import SearchIcon from '../../assets/lupa.png';
 import MicIcon from '../../assets/microfone.png';
 import VideoIcon from '../../assets/video.png';
 import NotificationIcon from '../../assets/sino.png';
 import LoginIcon from '../../assets/LoginIcon.png';
 import KeyboardIcon from '../../assets/teclado.png';
 import OptionsIcon from '../../assets/options.png';
 import { useNavigate } from "react-router-dom";
 import { useContext, useState, useRef } from "react";
 import { UserContext } from "../../context/userContext";
 import { ComponentContext } from "../../context/componentContext";
 import { useSearchContext } from "../../context/searchContext";
 
 export default function Header() {
 
    const { login, logOut } = useContext(UserContext);
    const { openMenu, setOpenMenu, openBar, setOpenBar } = useContext(ComponentContext);
    const { setSearch } = useSearchContext();
 
    const [clearButton, setClearButton] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
 
    const navigate = useNavigate();
    
 
    const inputRef = useRef<HTMLInputElement>(null);
 
    const search = () => {
       setOpenSearch(true);
       if (inputRef.current) {
          inputRef.current.focus()
       }
    };
 
    const [inputValue, setInputValue] = useState('');
 
    function handleInput(inputValue: string) {
       setInputValue(inputValue)
       if (inputValue === '') {
          setClearButton(false);
       } else (
          setClearButton(true)
       )
    }
 
    const clearInput = () => {
       setInputValue('')
       setClearButton(false)
       if (inputRef.current) {
          inputRef.current.focus();
       }
    }
 
    return (
       <>
 
          <Container>
             <LogoContainer>
                <ButtonContainer onClick={() => setOpenMenu(!openMenu)} margin='0 15px 0 20px'>
                   <BurguerIcon alt="" src={HamburguerIcon} />
                </ButtonContainer>
                <YoutubeLogoContainer onClick={() => navigate('/')}>
                   <YoutubeIcon alt="" title="Página inicial do YouTube" src={Logo} />
                </YoutubeLogoContainer>
             </LogoContainer>
 
 
             <SearchContainer openSearch={openSearch}>
                <SearchInputContainer openBar={openBar} onFocus={() => setOpenBar(true)} onBlur={() => setOpenBar(false)}>
 
                   <HiddenIcon openBar={openBar} alt="" src={SearchIcon} />
                   <SearchInput openBar={openBar}
                      placeholder="Pesquisar"
                      ref={inputRef}
                      value={inputValue}
                      onChange={(e) => {
                         handleInput(e.target.value)
                      }}
                      onKeyDown={(e) => {
                         if (e.key === "Enter") {
                            setSearch(inputValue)
                            navigate('/search')
                            setOpenSearch(false)
                         }
                      }}
                   />
                   <KeyboardContainer alt="" src={KeyboardIcon} />
                   <ClearButton
                      clearButton={clearButton}
                      onClick={clearInput}
                   >
 
                      <CloseImg src={CloseIcon} />
 
                   </ClearButton>
 
                </SearchInputContainer>
                <SearchButton onClick={() => {
                   if (inputValue.trim() === '') {
                      alert('Digite algo antes de tentar pesquisar')
                      return;
                   }
                   setSearch(inputValue)
                   navigate('/search')
                }}>
                   <SearchIconContainer onClick={search} style={{ position: 'fixed' }} alt="" title="Pesquisar" src={SearchIcon} />
                </SearchButton>
             </SearchContainer>
 
             <MicButton>
                <ButtonIcon alt="" title="Pesquisar com sua voz" src={MicIcon} />
             </MicButton>
 
             <HeaderButton>
 
                {login ?
                   <>
                      <ButtonContainer style={{ borderRadius: '50%', width: '80px' }} margin="0 10px 0 0">
                         <ButtonIcon alt="" title="Criar" src={VideoIcon} />
                      </ButtonContainer>
 
                      <ButtonContainer style={{ borderRadius: '50%', width: '85px' }} margin="0 10px 0 0">
                         <ButtonIcon alt="" title="Notificações" src={NotificationIcon} />
                      </ButtonContainer>
                   </>
                   :
                   <OptionsContainer>
                      <ButtonIcon style={{ width: '23px', marginLeft: '5px' }} alt="" title="Configurações" src={OptionsIcon} />
                   </OptionsContainer>
                }
 
 
                {login ?
                   <>
                      <ButtonContainer margin-left='10px'>
                         L
                      </ButtonContainer>
                      <span onClick={() => logOut()}>Sair</span>
                   </>
                   :
                   <LoginContainer>
 
                      <SpanButton onClick={() => navigate('/login')} >
                         <LoginButtonIcon alt="" src={LoginIcon} />
                         Fazer login
                      </SpanButton>
 
                   </LoginContainer>
                }
 
             </HeaderButton>
 
          </Container>
       </>
    )
 }
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { Link as AnimScrollTo } from 'react-scroll';
import Hambuger from './Hambuger';
import ChannelService from './ChannelIO/ChannelService';
import styled from 'styled-components';
import AltridLogo from '../images/AltridLogo';
import Button from '../AltridUI/Button/Button';

// const LanguageSelect = React.memo(function LanguageSelect() {
//     const [lang, setLang] = React.useState('');
//     const changeLang = e => {
//         setLang(e.target.value);
//         window.lang = e.target.value;
//         localStorage.setItem('lang', e.target.value);
//         document.location.reload();
//     };

//     useEffect(() => {
//         setLang(window.lang);
//     }, []);

//     const MdInputBase = withStyles(theme => ({
//         root: {
//             color: 'inherit',
//             '& .MuiSvgIcon-root': {
//                 color: 'inherit',
//             },
//         },
//     }))(InputBase);

//     const SimpleSelect = withStyles(theme => ({
//         root: {
//             padding: 0,
//             color: 'inherit',
//             fontFamily: "'Montserrat', 'Noto Sans KR'",
//         },
//     }))(Select);

//     return (
//         <SimpleSelect value={lang} onChange={changeLang} input={<MdInputBase />} displayEmpty>
//             <MenuItem value={'ko'}>한국어</MenuItem>
//             <MenuItem value={'en'}>English</MenuItem>
//         </SimpleSelect>
//     );
// });

const NavRoot = styled.header`
    background-color: rgb(255, 255, 255);
    box-shadow: ${({ scroll }) => (scroll ? '0 0.2rem 0.25rem rgba(0, 0, 0, 0.15)' : null)};
    display: flex;
    justify-content: center;
    padding: 20px 32px;
    width: calc(100% - 64px);
    /* height: 80px; */
    top: 0;
    position: fixed;
    z-index: 1000;
    @media (max-width: 600px) {
        padding: 20px 16px;
        width: calc(100% - 32px);
    }
`;
const NavWrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    max-width: 1024px;
    width: 100%;
`;
const LeftItems = styled.div``;
const LogoContainer = styled.div`
    & a {
        display: block;
        margin-bottom: -4px;
        & svg.altrid-logo {
            height: 40px;
        }
    }
    @media (max-width: 600px) {
        & a {
            & svg.altrid-logo {
                height: 24px;
            }
        }
    }
`;
const RightItems = styled.div`
    display: flex;
    @media (max-width: 600px) {
        display: none;
    }
`;
const RightHamburgerContainer = styled.div`
    display: none;
    @media (max-width: 600px) {
        display: block;
    }
`;
const ItemButton = styled.div`
    & + & {
        margin-left: 16px;
    }
`;

// const NavMenuItem = React.memo(function NavMenuItem({ linkTo, children }) {
//     return (
//         <NavLink
//             to={linkTo}
//             activeStyle={{
//                 borderBottom: '4px solid #00e099',
//                 display: 'flex',
//                 alignItems: 'center',
//                 height: '100%',
//                 boxSizing: 'border-box',
//                 paddingTop: '3px',
//             }}
//         >
//             <div className="item">{children}</div>
//         </NavLink>
//     );
// });

function Nav({ optStatic, history }) {
    const useScroll = () => {
        const [scroll, setScroll] = useState(optStatic ? 'scrolled' : '');
        const onScroll = () => {
            if (window.location.pathname === '/') window.mainScroll = window.scrollY;
            if (window.scrollY > 3 && !scroll) {
                setScroll('scrolled');
            } else if (window.scrollY <= 3 && scroll) {
                if (window.location.pathname === '/') setScroll('');
                else setScroll('scrolled');
            }
        };
        useEffect(() => {
            window.addEventListener('scroll', onScroll);
            return () => {
                window.removeEventListener('scroll', onScroll);
            };
        }, [scroll]);

        useEffect(() => {
            setScroll('');
        }, [window.location.pathname]);
        return scroll;
    };

    const scroll = useScroll();

    return (
        <NavRoot scroll={scroll}>
            <NavWrapper>
                <LeftItems>
                    <LogoContainer>
                        <Link
                            to="/"
                            onClick={() => {
                                document.getElementsByClassName('scroll-to-top')[0].click();
                            }}
                        >
                            <AltridLogo />
                        </Link>
                        <AnimScrollTo className="scroll-to-top" to="main_top_start" spy={true} smooth={true} duration={700}></AnimScrollTo>
                    </LogoContainer>
                </LeftItems>
                <RightItems>
                    <ItemButton>
                        <NavLink to="/pricing">
                            <Button variant="light" colors="purple" sizes="medium">
                                가격정책
                            </Button>
                        </NavLink>
                    </ItemButton>
                    <ItemButton>
                        <NavLink to={{ pathname: 'https://lms.altridedge.com' }} target="_blank">
                            <Button variant="filled" colors="purple" sizes="medium">
                                무료체험하기
                            </Button>
                        </NavLink>
                    </ItemButton>
                </RightItems>
                <RightHamburgerContainer>
                    <Hambuger />
                </RightHamburgerContainer>
            </NavWrapper>
        </NavRoot>
    );

    // return (
    //     <NavRoot scroll={scroll}>
    //         <div className="nav-wrapper">
    //             <Link
    //                 to="/"
    //                 onClick={() => {
    //                     document.getElementsByClassName('scroll-to-top')[0].click();
    //                 }}
    //             >
    //                 <div className="nav-logo">{/* <img className="color" src={AltridLogoHorizon} alt="Go to home..." /> */}</div>
    //             </Link>
    //             <AnimScrollTo to="/" className="scroll-to-top" to="main_top_start" spy={true} smooth={true} duration={700}></AnimScrollTo>
    //             <div className="nav-menus">
    //                 <NavMenuItem linkTo="/service">이용방법</NavMenuItem>
    //                 <NavMenuItem linkTo="/pricing">가격정책</NavMenuItem>
    //                 {/* <NavMenuItem linkTo="/customer-service/faq">고객센터</NavMenuItem> */}
    //             </div>

    //             <div className="nav-right">
    //                 <button
    //                     type="button"
    //                     className="normal login"
    //                     onClick={() => {
    //                         // history.push('/pricing');
    //                         // ChannelService.openChat(undefined, '서비스를 도입하고 싶습니다.');
    //                         ChannelService.showMessenger();
    //                     }}
    //                 >
    //                     무료체험하기
    //                 </button>
    //                 <div className="nav-hambuger">
    //                     <Hambuger></Hambuger>
    //                 </div>
    //             </div>
    //         </div>
    //     </NavRoot>
    // );
}
export default React.memo(withRouter(Nav));

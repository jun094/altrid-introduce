import React, { useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './pages/Main';
import Error from './pages/Error';
import Service from './pages/Service';
import { Switch, Route } from 'react-router-dom';
import Price from './pages/Price';
import Payment from './pages/Payment';
import ScrollTop from './components/ScrollTop';
import { Element } from 'react-scroll';
import './styles/common.scss';
import CustomerServices from './pages/CustomerServices';
import channelIOAccessKey from './components/ChannelIO/accessKeys';
import ChannelService from './components/ChannelIO/ChannelService';
import generateHash from './components/ChannelIO/generateHash';
import PriceDetails from './components/Price/PriceDetails';
import styled from 'styled-components';

if (!localStorage.getItem('lang')) {
    localStorage.setItem('lang', 'ko');
    window.lang = 'ko';
}
window.lang = localStorage.getItem('lang');

// window.analytics = firebase.analytics();
// window.analytics.logEvent('사용자가 접속함');

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
        'Segoe UI Emoji', 'Segoe UI Symbol';
    letter-spacing: -0.02em;
    word-break: keep-all;
    height: 100%;
`;
const MainContainer = styled.main`
    padding-top: 80px;
    flex: 1;
`;

function App() {
    // const onUnload = () => {
    //     window.analytics.logEvent('접속 종료함');
    // };

    useEffect(() => {
        // window.addEventListener('unload', onUnload);
        if (channelIOAccessKey.pluginKey) {
            ChannelService.shutdown();
            ChannelService.boot({
                pluginKey: channelIOAccessKey.pluginKey, //please fill with your plugin key
                profile: {
                    name: null,
                    email: null,
                    mobileNumber: null,
                    referrer: window.location.href,
                },
            });
        }
    }, []);

    return (
        <AppContainer>
            <Element name="main_top_start" />
            <Nav optStatic={window.location.pathname === '/' ? false : true} />
            <ScrollTop>
                <MainContainer>
                    <Switch>
                        <Route path="/" component={Main} exact />
                        <Route path="/service" component={Service} exact />
                        <Route path="/pricing" component={Price} exact />
                        <Route path="/pricing/details" component={PriceDetails} exact />
                        <Route path="/payment" component={Payment} exact />
                        <Route path="/customer-service" component={CustomerServices} />
                        <Route>
                            <Error />
                        </Route>
                    </Switch>
                </MainContainer>
            </ScrollTop>
            <Footer optStatic={window.location.pathname === '/' ? false : true} />
        </AppContainer>
    );
}

export default App;

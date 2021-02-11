import React, { useState } from 'react';
import '../styles/hamburger.scss';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { MdMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { strings } from '../datas/strings';
import ChannelService from './ChannelIO/ChannelService';

const { nav_menus } = strings;

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});
const NavMenuItem = React.memo(function NavMenuItem({ linkTo, children }) {
    return (
        <div className="item">
            <Link to={linkTo}>{children}</Link>
        </div>
    );
});

function Hambuger() {
    const classes = useStyles();
    const [state, setState] = useState(false);

    const toggleDrawer = (open) => (event) => {
        console.log(open, typeof open);

        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState(open);
    };
    const sideList = () => (
        <div
            className={classNames(classes.list, window.lang)}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <div className="hambuger-list">
                <List>
                    <NavMenuItem linkTo="/service">
                        <ListItem button>
                            <span className="list-text">{'이용방법'}</span>
                        </ListItem>
                    </NavMenuItem>
                    <NavMenuItem linkTo="/pricing">
                        <ListItem button>
                            <span className="list-text">{'가격정책'}</span>
                        </ListItem>
                    </NavMenuItem>
                    {/* <NavMenuItem linkTo="/customer-service/faq">
                        <ListItem button>
                            <span className="list-text">{'고객센터'}</span>
                        </ListItem>
                    </NavMenuItem> */}

                    <ListItem
                        button
                        onClick={() => {
                            // ChannelService.openChat(undefined, '서비스를 도입하고 싶습니다.');
                            ChannelService.showMessenger();
                        }}
                    >
                        <span className="list-text">{'무료체험 신청'}</span>
                    </ListItem>
                </List>
            </div>
        </div>
    );

    return (
        <>
            <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
                {sideList('right')}
            </Drawer>
            <MdMenu size={30} onClick={toggleDrawer(true)}></MdMenu>
        </>
    );
}

export default React.memo(Hambuger);

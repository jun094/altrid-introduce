import React, { useState } from 'react';
import '../styles/hamburger.scss';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { MdMenu } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { strings } from '../datas/strings';
// import ChannelService from './ChannelIO/ChannelService';

const { nav_menus } = strings;

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});
const NavMenuItem = React.memo(function NavMenuItem({ linkTo, target, children }) {
    return (
        <div className="item">
            <NavLink to={linkTo} target={target}>
                {children}
            </NavLink>
        </div>
    );
});

function Hambuger() {
    const classes = useStyles();
    const [state, setState] = useState(false);

    const toggleDrawer = (open) => (event) => {
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
                    <NavMenuItem linkTo={{ pathname: 'https://lms.altridedge.com' }} target="_blank">
                        <ListItem button>
                            <span className="list-text">{'무료체험하기'}</span>
                        </ListItem>
                    </NavMenuItem>
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

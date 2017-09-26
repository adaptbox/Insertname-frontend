import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Tabs, Tab } from 'material-ui/Tabs';
import { grey600, grey900, lightBlueA400 } from 'material-ui/styles/colors';

const height = '64px';
const styles = {
  nav: {
    backgroundColor: 'white',
  },
  title: {
    color: grey900,
  },
  titleLink: {
    textDecoration: 'none',
  },
  tabItemContainer: {
    backgroundColor: 'white',
  },
  inkBar: {
    background: lightBlueA400,
  },
  homeTab: {
    color: grey600,
    height,
    padding: '0 30px',
    fontWeight: 400,
  },
  tab: {
    color: grey600,
    height,
    padding: '0 30px',
    fontWeight: 400,
  },
  tabButton: {
    height,
  },
  titleIcon: {
    color: lightBlueA400,
  },
  loginButton: {
    height,
  },
};

const Header = () =>
  (
    <AppBar
      title={
        <Link style={styles.titleLink} to="/">
          <i style={styles.titleIcon} className="material-icons">build</i>
        </Link>
      }
      showMenuIconButton={false}
      style={styles.nav}
      titleStyle={styles.title}
      zDepth={0}
    >
      <Tabs
        tabItemContainerStyle={styles.tabItemContainer}
        inkBarStyle={styles.inkBar}
      >
        <Tab
          style={styles.homeTab}
          buttonStyle={styles.tabButton}
          label="Home"
          containerElement={<Link to="/" />}
        />
        <Tab
          style={styles.tab}
          buttonStyle={styles.tabButton}
          label="My Jobs"
          containerElement={<Link to="/jobs" />}
        />
        <Tab
          style={styles.tab}
          buttonStyle={styles.tabButton}
          label="My Quotes"
          containerElement={<Link to="/quotes" />}
        />
      </Tabs>
      <FlatButton style={styles.loginButton} label="Login" />
    </AppBar>
  );

export default Header;

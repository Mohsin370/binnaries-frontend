import React from "react";
import styles from './navbar.module.css';
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <div className="d-flex justify-content-between p-4 pt-5">
        <div type="button" className={[styles.navbar_font, styles.nav_logo_animation, "ml-5 cursor-pointer"].join(' ')} >Binaries</div>
        <div>
          <ul className={[styles.nav_links_animation, "d-flex list-unstyled pr-5 pt-2"].join(' ')}>
            <Link to="/dashboard" className={styles.home_links}>Dashboard</Link>
            <Link to="/signup" className={[styles.home_links, "ml-4"].join(' ')}>Login</Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;

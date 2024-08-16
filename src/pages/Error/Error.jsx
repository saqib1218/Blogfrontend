import React from 'react'
import styles from './Error.module.css'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <div className={styles.errorWrapper}>
        <div className={styles.errorHeader}>
            Error 404 - Page Not Found
        </div>
        <div className={styles.errorBody}>
            Go Back To 
            <Link to='/' className={styles.homeLink}>
             &nbsp;Home
            </Link>
        </div>
    </div>
  )
}

export default Error
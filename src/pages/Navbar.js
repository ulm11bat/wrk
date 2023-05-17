import styles from "../stylesheets/Navbar.module.css"

export const Navbar = () => {
    return(
        <>
        <div className={styles.container}>
            <div className={styles.kimi}> <h1>Kimi no na va</h1></div>
            <div className={styles.intro}>Introduction</div>
            <div className={styles.story}>Story</div>
            <div className={styles.staff}>Staff</div>
            <div>Blu-ray＆DVD</div>
        </div>
        </>
    )
}
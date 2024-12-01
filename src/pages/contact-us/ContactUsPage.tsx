import NavBar from '../../components/NavBar'

import styles from './ContactUsPage.module.css'
import Icon from '../../components/Icon'

const ContactUsPage = () => {
  return (
    <>
      <NavBar />
      <div className={styles.contactUsContainer}>
        <h5 className={styles.title}>Contact Us</h5>
        <p className={styles.subText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et enim lacus. Nullam eu enim blandit,
          malesuada nisi nec, pulvinar ante. Aliquam pulvinar, urna id consectetur mollis, felis eros blandit enim, nec
          hendrerit risus urna at est. Aenean justo eros, hendrerit ac nibh id, fringilla venenatis justo. Suspendisse
          vitae tellus auctor, cursus arcu nec, aliquet nisl. Morbi enim lacus, porttitor a est vitae, lacinia auctor
          magna. Suspendisse tristique et eros et porta. Duis mattis, nisi ut vulputate consectetur, nibh sem suscipit
          augue, vitae efficitur erat sapien vel dui. In luctus porttitor tellus, vitae eleifend diam fermentum in.
          Vestibulum at pellentesque purus. Nam eu neque fermentum, bibendum felis ut, scelerisque enim.
        </p>

        <div className={styles.logoContainer}>
          <div className={styles.logoItem}>
            <Icon kind="map-pin" />
            <a href="/">Address</a>
          </div>
          <div className={styles.logoItem}>
            <Icon kind="phone" />
            <a href="/">Phone</a>
          </div>
          <div className={styles.logoItem}>
            <Icon kind="mail" />
            <a href="/">Email</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUsPage

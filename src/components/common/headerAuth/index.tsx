import { Container, Form, Input } from "reactstrap"
import styles from "./styles.module.scss"
import Link from "next/link"
import Modal from "react-modal"
import { useState } from "react"
import { useRouter } from "next/router"

Modal.setAppElement("#__next")

const HeaderAuth = function (){

  const router = useRouter()
  const [modalOpen, setModalIsOpen] = useState(false)

  const handleOpenModal = () =>{
    setModalIsOpen(true)
  }
  const handleCloseModal = () =>{
    setModalIsOpen(false)
  }
  const handleLogout = () => {
    sessionStorage.clear();
    router.push("/")
  }

  return (
    <>
    <Container className={styles.nav}>
      <Link href="/home">
        <img src="/logoOnebitflix.svg" alt="logoOne" className={styles.imgLogoNav} />
      </Link>
      <div className="d-flex aling-items-center">
        <Form>
          <Input name="search" type="search" placeholder="Pesquisar" className={styles.input}/>
        </Form>
        <img src="/homeAuth/iconSearch.svg" alt="lupaHeader" className={styles.searchImg} />
      <p className={styles.userProfile} onClick={handleOpenModal}>AB</p>
      </div>
      <Modal 
      isOpen={modalOpen} 
      onRequestClose={handleCloseModal} 
      shouldCloseOnEsc={true}
      className={styles.modal}
      overlayClassName={styles.overlayModal}
      >
        <Link href="/profile" className={styles.link}>
        <p className={styles.modalLink}>Meus dados</p>
        </Link>
        <p className={styles.modalLink} onClick={handleLogout}>Sair</p>
      </Modal>
    </Container>
    </>
  )
}
export default HeaderAuth
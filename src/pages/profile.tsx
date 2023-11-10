import Head from "next/head";
import styles from "../styles/profile.module.scss";
import UserForm from "@/components/profile/user";
import HeaderAuth from "@/components/common/headerAuth";
import { Button, Col, Container, Row } from "reactstrap";
import Footer from "@/components/common/footer";

const userInfo = function () {
  return (
    <>
      <Head>
        <title>Onebitflix - Meus Dados</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <div className={styles.style}>
        <HeaderAuth/>
        </div>
        <Container className="py-5">
          <p className={styles.title}>Minha conta</p>
          <Row className="pt-3 pb-5">
            <Col md={4} className={styles.btnColumn}>
            <Button outline className={styles.renderFormBtn}>
              DADOS PESSOAIS
            </Button>
            <Button outline className={styles.renderFormBtn}>
              SENHA
            </Button>
            </Col>
            <Col md>
            <UserForm/>
            </Col>
          </Row>
        </Container>
        <div className={styles.style}>
        <Footer/>
        </div>
      </main>
    </>
  );
};

export default userInfo;
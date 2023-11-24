import Head from "next/head";
import styles from "../styles/profile.module.scss";
import UserForm from "@/components/profile/user";
import HeaderAuth from "@/components/common/headerAuth";
import { Button, Col, Container, Row } from "reactstrap";
import Footer from "@/components/common/footer";
import { useEffect, useState } from "react";
import PasswordForm from "@/components/profile/password";
import PageSpinner from "@/components/common/spinner";
import { useRouter } from "next/router";

const userInfo = function () {

  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    if(!sessionStorage.getItem('onebitflix-token')){
      router.push("/login")
    } else {
      setLoading(false)
    }
  }, [])

  if(loading){ 
    return <PageSpinner/>
  }

  const [form, setForm] = useState("userForm")

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
            <Button 
            outline 
            className={styles.renderFormBtn} 
            style={{color: form === "userForm" ? "#dd0044" : "white"}}
            onClick={() =>{setForm("userForm")}}>
              DADOS PESSOAIS
            </Button>
            <Button 
             className={styles.renderFormBtn} 
             style={{color: form === "passwordForm" ? "#dd0044" : "white"}} 
             onClick={() =>{setForm("passwordForm")}}>
              SENHA
            </Button>
            </Col>
            <Col md>
            {form === "userForm" ? <UserForm/> : <PasswordForm/>}
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
import styles from "../styles/registerLogin.module.scss"
import Head from "next/head"
import HeaderGeneric from "@/components/common/headerGeneric"
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap"
import Footer from "@/components/common/footer"
import { useEffect,useState, FormEvent } from "react"
import { useRouter } from "next/router"
import ToastComponent from "@/components/common/toast"
import authService from "@/services/authService"


const Login = function(){
  const router = useRouter()
  const [toastColor, setToastColor] = useState("")
  const [toastIsOpen, setToastIsOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState("")

  useEffect(()=>{
    if(sessionStorage.getItem("onebitflix-token")){
      router.push("/home");
    }
  }, [])

  const registerSuccess = router.query.registred;

  useEffect(() =>{
    if(registerSuccess === "true"){
      setToastColor("bg-success")
      setToastIsOpen(true);
        setTimeout(() => {
          setToastIsOpen(false)
        }, 1000 * 3);
        setToastMessage("Cadastro concluído com sucesso!")
    }
  }, [router.query])

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email")!.toString()
    const password = formData.get("password")!.toString()
    const params = {email, password}

    const {status} = await authService.login(params)

    if(status === 200){
      router.push("/home")
    } else {
      setToastColor("bg-danger")
      setToastIsOpen(true);
        setTimeout(() => {
          setToastIsOpen(false)
        }, 1000 * 3);
        setToastMessage("E-mail ou senha incorretos!")
    }
  }

  return(
    <>
    <Head>
      <title>Onebitflix - Login</title>
      <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
    </Head>
    <main className={styles.main}>
      <HeaderGeneric logoUrl="/" btnUrl="/register" btnContent="Quero fazer parte"/>
      <Container className="py-5">
        <p className={styles.formTitle}>Bem vindo(a) de volta!</p>
        <Form onSubmit={handleLogin} className={styles.form}>
            <p className="text-center"><strong>Bem-vindo(a) ao Onebitflix!</strong></p>
            <FormGroup>
              <Label for="email" className={styles.label}>E-MAIL</Label>
              <Input 
              id="email" 
              name="email" 
              type="email" 
              placeholder="Qual o seu email?"
              required
              className={styles.input}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password" className={styles.label}>SENHA</Label>
              <Input 
              id="password" 
              name="password" 
              type="password" 
              placeholder="Qual a sua senha?"
              required
              className={styles.input}
              />
            </FormGroup>
            <Button outline type="submit" className={styles.formBtn}>ENTRAR</Button>
        </Form>
        <ToastComponent color={toastColor} isOpen={toastIsOpen} message={toastMessage}/>
      </Container>
      <Footer/>
    </main>
    </>
  )
}

export default Login
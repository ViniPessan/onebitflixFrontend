import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import styles from "../../../styles/profile.module.scss";

const PasswordForm = function() {
  return (
    <>
    <Form className={styles.form}>
      <div className={styles.inputNormalDiv}>
        <FormGroup>
          <Label className={styles.label} for="currentPassword">SENHA ATUAL</Label>
          <Input
          name="currentPassword"
          type="password"
          id="currentPassword"
          placeholder="**********"
          required
          minLength={6}
          maxLength={20}
          className={styles.input}
          />
        </FormGroup>
      </div>
      <div className={styles.inputFlexDiv}>
      <FormGroup>
          <Label className={styles.label} for="newPassword">NOVA SENHA</Label>
          <Input
          name="newPassword"
          type="password"
          id="newPassword"
          placeholder="**********"
          required
          minLength={6}
          maxLength={20}
          className={styles.inputFlex}
          />
        </FormGroup>
        <FormGroup>
          <Label className={styles.label} for="confirmNewPassword">CONFIRME NOVA SENHA</Label>
          <Input
          name="confirmNewPassword"
          type="password"
          id="confirmNewPassword"
          placeholder="**********"
          required
          minLength={6}
          maxLength={20}
          className={styles.inputFlex}
          />
        </FormGroup>
        <Button
        outline
        className={styles.btn}>
          Salvar alterações
        </Button>
      </div>
    </Form>
    </>
  )
}

export default PasswordForm
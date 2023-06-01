import { observer } from 'mobx-react-lite'
import classes from './Login.module.scss'
import { useState } from 'react'
import { auth } from '@entities/authorization'

interface ILogin {
  setShowProfile: (arg0: boolean) => void
}

const Login = observer(({ setShowProfile }: ILogin) => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const submit = async (e: FormSubmit) => {
    e.preventDefault()
    const result = await auth.fetchToken({ login, password, rememberMe })
    if (result) {
      setShowProfile(true)
    }
  }

  const loginHandler = ({ target }: InputChange) => {
    setLogin(target.value)
  }

  const passwordHandler = ({ target }: InputChange) => {
    setPassword(target.value)
  }

  const rememberMeHandle = ({ target }: InputChange) => {
    setRememberMe(target.checked)
  }

  return (
    <div className={classes.Login}>
      <form>
        <div className={classes.authorization_field}>
          <label htmlFor="name">Логин</label>
          <input type="text" id="name" value={login} onChange={loginHandler} />
        </div>
        <div className={classes.authorization_field}>
          <label htmlFor="email">Пароль</label>
          <input
            type="password"
            id="email"
            value={password}
            onChange={passwordHandler}
          />
        </div>
        <div className={classes.authorization_field}>
          <label>Запомнить</label>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={rememberMeHandle}
          />
        </div>
        <button className={classes.submit_button} onClick={submit}>
          Войти
        </button>
      </form>
    </div>
  )
})

export default Login
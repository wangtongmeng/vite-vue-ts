import { LoginParams } from "@/typings/auth"
import { getCurrentUser, login } from "@/api/auth"

const loginParams: LoginParams = { username: "lisi", password: "123456" }
login(loginParams).then((result) => {
  const token = result.data
  window.sessionStorage.setItem("token", token)
  getCurrentUser().then((result) => {
    console.log(result.data)
  })
})

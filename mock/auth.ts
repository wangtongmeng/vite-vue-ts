import { MockMethod } from "vite-plugin-mock"

export default [
  {
    url: "/api/currentUser",
    method: "get",
    response: ({ query }) => {
      return {
        code: 0,
        data: "lisi"
      }
    }
  }
] as MockMethod[]

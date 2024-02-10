import { NextResponse } from "next/server"

const { cookies } = require("next/headers")

 const middleware = async(req) => {
    const cookieStore = cookies()
    const username = cookieStore.has("username")
    const password = cookieStore.has("password")
    const uid = cookieStore.has("uid")
    const uidvalue = cookieStore.get("uid")
    console.log(cookieStore.get("lang").value)
    console.log(uidvalue)
        console.log({username, password, uid})
    if(!username && !password & !uid){
        return NextResponse.redirect(`${process.env.URL}/login`)
    }
//    else if(req.url.pathname.startsWith("/login")){
//         if(username && password){
//             return NextResponse.redirect(`${process.env.URL}/`)

//         }
//     }
}
export const config = {
    matcher: ['/', "/voice-input", "/add-product-page"],
  }

  export default middleware
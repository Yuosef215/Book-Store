import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState, type PropsWithChildren } from  "react";

export let Authcontext = createContext(null);

export default function AuthcontextProvider(props:PropsWithChildren) {
const [login, setLogin] = useState(null);
  const Savelogin = (data:any)=> {
    const encodedTokn = localStorage.getItem("token");
    const decodedTokn = jwtDecode(encodedTokn);
    setLogin(decodedTokn);
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      Savelogin();
    }
  }, [])
  


    return <Authcontext.Provider value={{login , Savelogin}} >
        {props.children}
    </Authcontext.Provider>
}

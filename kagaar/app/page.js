import Image from "next/image";
import Signup from "./signup/page"
import SingIn from "./signin/page"
import Forgotpassword from "./forgotpassword/page"
import Checkmail from "./checkmail/page"
import Dashboard from "./dashboard/page"
export default function Home() {
  return (
    <>
    {/* <Signup/> */}
    <SingIn/>
    {/* <Forgotpassword/> */}
    {/* <Checkmail/> */}
    {/* <Dashboard/> */}
    </>
  );
}
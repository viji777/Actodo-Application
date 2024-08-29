import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Login(props) {
    const navigate = useNavigate()
    const users = props.users
    const [eusername, setEusername] = useState("")
    const [epassword, setEpassword] = useState("")

    const [ruser, setRuser] = useState(true)


    function handleUinput(evt) {
        setEusername(evt.target.value)
    }
    function handlePinput(evt) {
        setEpassword(evt.target.value)
    }
    function checkusers() {
        var userfound = false
        console.log(users)
        users.forEach(function (item) {
            if (item.username === eusername && item.password === epassword) {

                console.log("pass")
                
                userfound = true
                navigate("/landing",{state:{user:eusername}})
            }
        })
        if (userfound === false) {

            console.log("fail")
            setRuser(false)
        }



    }
    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                {ruser ? (<p>I help you manage your activities after you login:)</p>) :( <p className="text-red-600">Please signup before you login</p>)}

                <div className="flex flex-col gap-2 my-2">
                    <input type="text"
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="Username"
                        value={eusername}
                        onChange={handleUinput}></input>
                    <input type="text"
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="Password"
                        value={epassword}
                        onChange={handlePinput}></input>

                    <button onClick={checkusers} className="bg-[#8272DA] w-24 p-1 rounded-md">Login</button>
                    <p>Don't have an account?<Link className="underline" to={"/signup"}>Signup</Link></p>
                </div>
            </div>
        </div>
    )
}
export default Login
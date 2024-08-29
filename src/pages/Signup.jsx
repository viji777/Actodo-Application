import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup(props) {
    const navigate = useNavigate()
    const users = props.users
    const setusers = props.setusers
    const [eusername, setEusername] = useState("")
    const [epassword, setEpassword] = useState("")
    function handleUinput(evt)
{
 setEusername(evt.target.value)
}
function handlePinput(evt)
{
setEpassword(evt.target.value)
}
function addUser()
{
    setusers([...users,{username:eusername,password:epassword}])
    navigate("/")

}
    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                <p>Signup Here:)</p>
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

                    <input type="text"
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="Confirm Password"></input>

<button onClick={addUser} className="bg-orange-500 w-24 p-1 rounded-md">Signup</button>
<p>Already have an account?<Link className="underline" to={"/"}>Login</Link></p>
                </div>
            </div>
        </div>)
}
export default Signup
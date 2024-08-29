function Header(props)
{
    return(
        <div>
<h1 className="text-3xl font-medium">Hello {props.name}!</h1>
<h1>I help you manage your activities:)</h1>
        </div>
    )
}
export default Header
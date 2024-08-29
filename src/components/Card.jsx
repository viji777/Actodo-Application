function Card(props)
{
    return(
        <div  style={{backgroundColor:props.bgColor}} className="px-10 py-5 border rounded-md my-5 text-center flex-grow " >
  <h1 className="text-2xl font-medium">{props.title}</h1>
  <p className="text-xl font-semibold">{props.subTitle}</p>
</div>
    )
}
export default Card
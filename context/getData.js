import { useContext } from "react"
import { APIContext } from "./MyContext"



export default function getData() {
    const { data } = useContext(APIContext);
    // console.log(data)
    // const { params } = this.props.router.query
    // const post = data.find((post) => post.slug === params.id)
    // this.setState({ post })
  
  return data
}

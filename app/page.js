import Hero from "@/Compnents/HeroSection/Hero";
import Categories from "@/Compnents/Catogories/Categories";
import Postscatalogue from "@/Compnents/PostsCatalogue/page";
import { useParams } from "next/navigation";
export default function Home() {


  // useEffect(() => {
  //   const fetchPost =  async () =>{
  //     const response = await axios.get("https://658db9147c48dce94739a6eb.mockapi.io/blog");
  //     setPosts(response.data);
  //   }
  //   fetchPost();
  // }, []);

  return (
    <>
      <Hero />
      <Categories />
      < Postscatalogue/>
    </>
  );
}
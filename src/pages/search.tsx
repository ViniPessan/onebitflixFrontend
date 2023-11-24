import HeaderAuth from "@/components/common/headerAuth"
import CourseService, { CourseType } from "@/services/courseService"
import Head from "next/head"
import { useRouter } from "next/router"
import { useState,useEffect } from "react"
import styles from "../styles/search.module.scss"
import { Container } from "reactstrap"
import SearchCard from "@/components/searchCard"
import Footer from "@/components/common/footer"
import PageSpinner from "@/components/common/spinner"

const Search = function(){
  
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [searchResult, setSearchResult] = useState<CourseType[]>([]);

  useEffect(()=>{
    if(!sessionStorage.getItem('onebitflix-token')){
      router.push("/login")
    } else {
      setLoading(false)
    }
  }, [])

  if(loading){ 
    return <PageSpinner/>
  }

  
  const searchName: any = router.query.name;

  const searchCourses = async function () {
      const res = await CourseService.getSearch(searchName)
      setSearchResult(res.data.courses)
    
  }
  
  useEffect(()=>{
    searchCourses()
  }, [searchName])

  return (
    <>
    <Head>
      <title>Onebitflix - {searchName}</title>
      <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
    </Head>
    <main className={styles.main}>
      <div className={styles.headFootBg}>
      <HeaderAuth/>
      </div>
      {searchResult.length >=1 ? (
      <div className={styles.searchResult}>
        <Container className="d-flex flex-wrap justify-content-center gap-5 py-4">
        {searchResult?.map((course)=>(
        <SearchCard key={course.id} course={course}/>
        ))}
      </Container>
      </div>
      ): 
      <p className={styles.noSearchResult}>Nenhum resultado encontrado</p>
      }
      <div className={styles.headFootBg}>
      <Footer/>
      </div>
    </main>
    </>
  )
}

export default Search
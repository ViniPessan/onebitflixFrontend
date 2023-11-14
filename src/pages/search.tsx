import HeaderAuth from "@/components/common/headerAuth"
import CourseService, { CourseType } from "@/services/courseService"
import Head from "next/head"
import { useRouter } from "next/router"
import { useState,useEffect } from "react"

const Search = function(){
  const router = useRouter()
  const searchName: any = router.query.name;
  const [searchResult, setSearchResult] = useState<CourseType[]>([]);

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
    <main>
      <HeaderAuth/>
      {searchResult?.map((course)=>(
        <div key={course.id}>
          <p>{course.name}</p>
        </div>
      ))}
    </main>
    </>
  )
}

export default Search
import SlideComponent from "@/components/common/slideComponent";
import CourseService from "@/services/courseService";
import useSWR from "swr";
import styles from "../../../styles/styleCategory.module.scss"

  const NewestCategory = function (){
    const {data, error} = useSWR("/newest", CourseService.getNewsCourses)

  if(error) return error
  if(!data) return (
  <>
  <p>Loading...</p>
  </>
  )
    return(
      <>
      <p className={styles.titleCategory}>LANÇAMENTOS</p>
      <SlideComponent course={data.data} />
      </>
    )
  };

  export default NewestCategory
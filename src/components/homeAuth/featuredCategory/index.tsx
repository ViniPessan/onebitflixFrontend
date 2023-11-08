import CourseService from "@/services/courseService";
import styles from "../../../styles/styleCategory.module.scss"
import useSWR from "swr";
import SlideComponent from "@/components/common/slideComponent";

const FeaturedCategory = function (){
  const {data, error} = useSWR("/featured", CourseService.getFeaturedCourses)

  if(error) return error
  if(!data) return (
  <>
  <p>Loading...</p>
  </>
  )

  return(
    <>
    <p className={styles.titleCategory}>EM DESTAQUE</p>
    <SlideComponent course={data.data}/>
    </>
  )
};

export default FeaturedCategory
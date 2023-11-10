import CourseService from "@/services/courseService";
import styles from "../../../styles/styleCategory.module.scss"
import useSWR from "swr";
import SlideComponent from "@/components/common/slideComponent";
import PageSpinner from "@/components/common/spinner";

const FeaturedCategory = function (){
  const {data, error} = useSWR("/featured", CourseService.getFeaturedCourses)

  if(error) return error
  if(!data){ 
    return <PageSpinner/>}

  return(
    <>
    <p className={styles.titleCategory}>EM DESTAQUE</p>
    <SlideComponent course={data.data}/>
    </>
  )
};

export default FeaturedCategory
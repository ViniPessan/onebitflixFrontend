import CourseService from "@/services/courseService";
import styles from "./../../../styles/styleCategory.module.scss"
import useSWR from "swr";
import SlideComponent from "@/components/common/slideComponent";


const FavorityCategory = function(){
  const {data, error} = useSWR("/favorites", CourseService.getFavCourse)

  if(error) return error
  if(!data) return (
  <>
  <p>Loading...</p>
  </>
  )

  return(
    <>
    <p className={styles.titleCategory}>MINHA LISTA</p>
    {data.data.courses.lenght >= 1 ? (
      <SlideComponent course={data.data.courses}/>
    ): (
      <p className="text-center pt-3 h5">
        <strong>Você não tem nenhum curso na lista de favoritos</strong>
      </p>
    )}
    </>
  )
};

export default FavorityCategory
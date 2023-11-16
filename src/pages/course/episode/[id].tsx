import { useRouter } from "next/router";
import styles from "../../../styles/episode.module.scss";
import Head from "next/head";
import HeaderGeneric from "@/components/common/headerGeneric";
import  { useState, useEffect } from "react"
import CourseService, { CourseType } from "@/services/courseService";
import PageSpinner from "@/components/common/spinner";
import { Button, Container } from "reactstrap";
import ReactPlayer from "react-player";
import Footer from "@/components/common/footer";

const EpisodePlayer = function () {
  const router = useRouter()
  const [course, setCourse] = useState<CourseType>()
  const episodeOrder = parseFloat(router.query.id?.toString() || "")
  const courseId = router.query.courseid?.toString() || ""

  const getCourse = async function () {
    if(typeof courseId !== "string") return

    const res = await CourseService.getEpisodes(courseId)

    if(res.status === 200){
      setCourse(res.data)
    }
  };

  const handleLastEpisode = ()=>{
    router.push(`/course/episode/${episodeOrder - 1}?courseid=${course?.id}`)
  }

  const handleNextEpisode = ()=>{
    router.push(`/course/episode/${episodeOrder + 1}?courseid=${course?.id}`)
  }

  useEffect(() =>{
    getCourse()
  }, [courseId])

  if(course?.episodes === undefined) return <PageSpinner/>



  return (
    <>
      <Head>
        <title>Onebitflix - {course.episodes[episodeOrder].name}</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <HeaderGeneric logoUrl="/home" btnContent={'Voltar para o curso'} btnUrl={`/course/${courseId}`}/>
        <Container className="d-flex flex-column align-items-center gap-3 pt-5">
            <p className={styles.episodeTitle}>
              {course.episodes[episodeOrder].name}
            </p>
            {typeof window === "undefined"? null: (
              <ReactPlayer 
              className={styles.player} 
              url={`${process.env.NEXT_PUBLIC_BASEURL}/episodes/stream?videoUrl=${
                course.episodes[episodeOrder].videoUrl}&token=${sessionStorage.getItem("onebitflix-token")}`} 
              controls
              />
            )}
            <div className={styles.episodeButtonDiv}>
            <Button className={styles.episodeButton} 
            disabled={episodeOrder === 0 ? true : false}
            onClick={handleLastEpisode}
            >
              <img src="/episode/iconArrowLeft.svg" alt="setaEsquerda" className={styles.arrowImg}/>
            </Button>
            <Button 
            className={styles.episodeButton} 
            disabled={episodeOrder + 1 === course.episodes.length ? true : false}
            onClick={handleNextEpisode}
            >
            <img src="/episode/iconArrowRight.svg" alt="setaDireita" className={styles.arrowImg}/>
            </Button>
            </div>
            <p className="text-center py-4">
              {course.episodes[episodeOrder].synopsis}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, 
              inventore consequatur labore minima totam cupiditate ab tempora. Atque, 
              recusandae, distinctio voluptas itaque fugit impedit aperiam iusto earum temporibus 
              veniam, excepturi veritatis neque. Porro odio nemo, molestiae quis nesciunt velit sint iusto unde 
              eos voluptatibus, quo tempora expedita atque, architecto alias!
            </p>
        </Container>
        <div className={styles.footer}>
        <Footer/>
        </div>
      </main>
    </>
  );
};

export default EpisodePlayer;
import { CourseType, EpisodeType } from "@/services/courseService"
import styles from "./style.module.scss"
import { useRouter } from "next/router"

interface props {
  episode: EpisodeType
  course: CourseType
}

const EpisodeList = function ({episode, course}: props){
  const router = useRouter()

  const handleSecondsToMin = (totalSeconds: number)=>{
    const minutes = Math.floor(totalSeconds/60);

    const seconds = totalSeconds % 60;

    function toString(num: number){
      return num.toString().padStart(2, "0")
    }

    const result = `${toString(minutes)}:${toString(seconds)}`
    return result
  }
  console.log("episode.order", episode.order);
  console.log("episode.id", episode.id);

  
  const handleEpisodePlayer = ()=>{
    router.push(`/course/episode/${episode.order - 1}?courseid=${course.id}&episodeid=${episode.id}`)
  }

  return (
    <>
    <div className={styles.episodeCard} onClick={handleEpisodePlayer}>
      <div className={styles.episodeOrderTime}>
        <p className={styles.episodeOrder}>Episódio Nº {episode.order}</p>
        <p className={styles.episodeTime}>{handleSecondsToMin(episode.secondsLong)}</p>
      </div>
      <div className={styles.episodeTitleDescription}>
        <p className={styles.episodeTitle}>{episode.name}</p>
        <p className={styles.episodeDescription}> {episode.synopsis} Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim 
        facilis atque repudiandae consequuntur labore ea quis libero vero autem eum suscipit iusto modi est, 
        maiores cum neque quidem ex quo laudantium. Hic deleniti velit eos, itaque qui harum corrupti labore 
        vitae veniam cumque officia tempora unde! Temporibus tempore porro esse!
        <br />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, at.
        </p>
      </div>
    </div>
    </>
  )
}

export default EpisodeList
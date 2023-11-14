import { EpisodeType } from "@/services/courseService"
import styles from "./style.module.scss"

interface props {
  episode: EpisodeType
}

const EpisodeList = function ({episode}: props){

  const handleSecondsToMin = (totalSeconds: number)=>{
    const minutes = Math.floor(totalSeconds/60);

    const seconds = totalSeconds % 60;

    function toString(num: number){
      return num.toString().padStart(2, "0")
    }

    const result = `${toString(minutes)}:${toString(seconds)}`
    return result
  }
  
  return (
    <>
    <div className={styles.episodeCard}>
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
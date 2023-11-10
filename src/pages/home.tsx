import Footer from "@/components/common/footer"
import FavorityCategory from "@/components/homeAuth/favorityCategory"
import FeaturedCategory from "@/components/homeAuth/featuredCategory"
import FeaturedSection from "@/components/homeAuth/featuresSection"
import ListCategory from "@/components/homeAuth/listCategory"
import NewestCategory from "@/components/homeAuth/newestCategory"
import Head from "next/head"
import styles from "../styles/profile.module.scss"

const HomeAuth = function(){
  return(
    <>
    <Head>
      <title>Onebitflix - Home</title>
      <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
    </Head>
    <main>
      <FeaturedSection/>
      <NewestCategory/>
      <FavorityCategory/>
      <FeaturedCategory/>
      <ListCategory/>
      <div className={styles.style}>
      <Footer/>
      </div>
    </main>
    </>
  )
}

export default HomeAuth
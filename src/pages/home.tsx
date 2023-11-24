import Footer from "@/components/common/footer"
import FavorityCategory from "@/components/homeAuth/favorityCategory"
import FeaturedCategory from "@/components/homeAuth/featuredCategory"
import FeaturedSection from "@/components/homeAuth/featuresSection"
import ListCategory from "@/components/homeAuth/listCategory"
import NewestCategory from "@/components/homeAuth/newestCategory"
import Head from "next/head"
import styles from "../styles/profile.module.scss"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import PageSpinner from "@/components/common/spinner"

const HomeAuth = function(){
  const router = useRouter();
  const [loading, setLoading] = useState(true);

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
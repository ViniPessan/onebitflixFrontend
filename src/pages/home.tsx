import FavorityCategory from "@/components/homeAuth/favorityCategory"
import FeaturedSection from "@/components/homeAuth/featuresSection"
import NewestCategory from "@/components/homeAuth/newestCategory"
import Head from "next/head"

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
    </main>
    </>
  )
}

export default HomeAuth
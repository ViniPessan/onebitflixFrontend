import Head  from "next/head";
import styles from "../styles/HomeNoAuth.module.scss"
import HeaderNoAuth from "@/components/homeNoAuth/headerNoAuth";
import PresentationSection from "@/components/homeNoAuth/presentationSection";
import CardsSection from "@/components/homeNoAuth/cardsSection";
import SlideSection from "@/components/homeNoAuth/slideSection";
import CourseService, { CourseType } from "@/services/courseService";
import { ReactNode } from "react";
import { GetStaticProps } from "next";

interface IndexPageProps{
  children?: ReactNode;
  course: CourseType[]
}


const HomeNoAuth = ({course}: IndexPageProps) =>{
  return(
  <>
  <Head>
    <title>Onebitflix</title>
    <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
    <meta property="og:title" content="Onebitflix" key="title"/>
    <meta name="description" content="Tenha acesso aos melhores conteúdos de programação de uma forma simples e fácil!"/> 
  </Head>
  <main>
   <div className={styles.sectionBackground}>
    <HeaderNoAuth/>
    <PresentationSection/>
   </div>
   <div>
    <CardsSection/>
    <SlideSection newestCourses={course}/>
   </div>
  </main>
  </>
  )
}

export const getStaticProps: GetStaticProps = async() => {
  const res = await CourseService.getNewsCourses()
  return{
    props: {
      course: res.data
    },
    revalidate: 3600 * 24,
  };
};

export default HomeNoAuth;
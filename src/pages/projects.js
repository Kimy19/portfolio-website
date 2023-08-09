import Layout from '../components/layout';
import Head from 'next/head';
import {TOKEN,DATABASE_ID} from "../config"
import ProjectItem from '@/components/projects/project-item';

export default function Projects({projects}){
    
  console.log(projects)
  return(
        <Layout>
          <div className="flex flex-col items-center justify-center min-h-screen px-6 mb-10">
              <Head>
                  <title>김예찬 웹사이트</title>
                  <meta name="description" content="포트폴리오"/>
                  <link rel="icon" href="/favcon.ico"/>
              </Head>
              <h1 className='text-4xl font-bold sm:text-6xl'>
                총 프로젝트 : 
                <span className='pl-4 text-blue-500'>{projects.results.length}</span>
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 m-6 w-full">
              {projects.results.map((aProject)=>(
                <ProjectItem key={aProject.id} data={aProject}/>
              ))}
              </div>
            </div>
        </Layout>
    );
}


//빌드 타임에 호출
export async function getStaticProps() {

  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      Authorization: `Bearer ${TOKEN}`
    }
  };
  body: JSON.stringify({
    sorts: [
      {
        "property":"프로젝트명",
        "direction":"descending"
      }
    ]
  })
  const res= await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
    
  const projects= await res.json()


  const projectNames= projects.results.map((aProject)=>(
    aProject.properties.프로젝트명.title[0].plain_text
  ))
  

  console.log(`projectNames:${projectNames}`);

  return { props: {projects} }
}


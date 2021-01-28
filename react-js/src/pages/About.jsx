import React from 'react'
import Layout from '../layouts'

export default function About({ children }) {
  return (
    <Layout>
      <div className="col-md-10 offset-md-1">
        <div className="mb-4 text-center">
          <h1 className="cv-title">Krisana Malaseeta</h1>
          <small> <i>Software developer</i> </small>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <i className="mb-3 d-block"
            >Started first programming experience at 6 years old.</i
            >
            <h6>DATE OF BIRTH</h6>
            <p>September 11, 1989</p>
            <h6>ADDRESS</h6>
            <p>189 Sukantharam 29 | Suan Chitlada | Dusit | Bangkok 10300</p>
            <h6>PHONE</h6>
            <p>+66 902761182</p>
            <h6>EMAIL</h6>
            <p>krisana.malaseeta@gmail.com</p>
            <h6>WEBSITE</h6>
            <p>https://krisana.me</p>
            <h6>LANGUAGES</h6>
            <p className="mb-0">Thai: Native</p>
            <p>English: Intermediate</p>
            <h6>HOBBIES</h6>
            <p>Game, Movie, Travel, Photography, Video making, Music</p>
          </div>
          <div className="col-sm-8">
            <p className="text-secondary">
              <i>
                Employment in challenging and rewarding upper-level position in a
                growth-oriented organization, which offers diverse job
                responsibility in programmer and will fully utilize both my
                technical and managerial abilities
          </i>
            </p>
            <div className="my-5">
              <h5>EDUCATION</h5>
              <div className="row">
                <div className="col-sm-2">
                  <p className="text-info">2010-2013</p>
                </div>
                <div className="col-sm-8">
                  Bachelor of Computer Engineering, Rajamangala University of
                  Technology Isan Khonkaen Campus, Khonkaen
            </div>
              </div>
            </div>
            <div className="my-5">
              <h5>EXPERIENCED PROGRAMING LANGUAGE</h5>
              <p><i>PHP, HTML, CSS3, Javascript</i></p>
            </div>
            <div className="my-5">
              <h5>EXPERIENCED STACK & TOOLS</h5>
              <p>
                <i>
                  React.js, Next.js, React Native, Vue.js, Nuxt.js, Bootstrap,
                  HTML5, Jquery, Linux, Git, Laravel 5-7, Composer, Wordpress,
                  OpenCart, npm, Gulp, Jade, Scss, DigitalOcean, AWS, EC2, S3, RDS,
                  Google Cloud, Cloudflare, Docker, Mysql, Nginx, Apache2
            </i>
              </p>
            </div>
            <div className="my-5">
              <h5>WORK EXPERIENCES</h5>
              <div>
                <div className="mb-3">
                  <h5 className="text-primary mb-0">
                    Tencent (Thailand) Company Limited (March 2019- Nov 2019)
              </h5>
                  <small className="text-warning">Full-stack developer</small>
                </div>
                <p className="my-3">
                  Work with Topspace digital agency team in Tencent Thailand.
                  Topspace team create and enhance Pruksa website. Work and enhance
                  Sanook application.
            </p>
                <div>
                  <span className="text-success">Stack & Tools:</span> EE, PHP, HTML5,
              CSS3, Android, Kotlin, JAVA, XML, Gitlab, Jira, Bootstrap
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

import Image from 'next/image'
import andrewGustyProfilePic from '../public/andrew_gusty.jpg'

export default function examplePage() {
    return (
      <div className='container'>
        <title>Andrew Gusty's Personal Page</title>
        <link rel='icon' href='/favicon.ico' />

        <main>
          <div className='underline'>
            <h1 className='title'>Hello, Im Andrew Gusty</h1>
          </div>
          <Image className='pic' src={andrewGustyProfilePic} alt="Picture of Andrew Gusty" />

          <p className='description'>
          I am a student at the University of Colorado Boulder studying Computer Science
          and Applied Mathematics! I have a few years of experience through independant classes,
          projects, high-school and college courses, and the CU Robotics team.
          I am the most proficient in C++, Java, and Python.
          </p>

          <a className='button' href='/'>
            <p> Back to Home Page</p>
          </a>
        </main>

        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 60rem;
            margin: auto;
          }
          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }
          .underline {
            /* border-bottom: solid black; */
            margin-bottom: 1.5rem;
          }
          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }
          .pic {
            height: 450px;
            width: 450px;
          }
          .button {
            /* margin: .5rem; */
            flex-basis: 45%;
            padding: 0.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }
          .button:hover,
          .button:focus,
          .button:active {
            color: #0070f3;
            border-color: #0070f3;
          }
          .button p {
            font-size: 1rem;
            font-weight: 600;
          }
          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }
          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    );
}

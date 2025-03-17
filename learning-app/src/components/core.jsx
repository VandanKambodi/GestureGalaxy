import React from 'react'
import './core.css'
const core = () => {
  return (
    <div className="core-container">
      <div className="core-info">
        <h1>Gujarati</h1>
        <p>
          We are dedicated to making sign language learning easy, accessible, and interactive for the deaf and mute community.
          Our platform provides comprehensive resources, empowering individuals to communicate confidently and fostering an inclusive society where everyone is heard and understood.
        </p>
      </div>

      <div className="tuto-core-num">
        <div className="tuto-core-num-part">
          <div className="tuto-core-num-text">
            <h2>Numbers</h2>
            <p>
              Our mission is to bridge the communication gap for the deaf and mute community by providing a comprehensive, accessible, and interactive platform for learning sign language.
              We strive to empower individuals, families, and educators with high-quality resources that foster inclusion, understanding, and seamless communication.
            </p>
          </div>
          <div className="core-num-image">
          <iframe  className="core-num-im" width="780" height="429" src="https://www.youtube.com/embed/-ls9wyHic7E" title="1 to 10 Number Teach With Sign Language" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>

      <div className="core-alpha">
        <div className="core-alpha-part">
          <div className="core-alpha-image">
            <iframe className='core-num-im' width="853" height="480" src="https://www.youtube.com/embed/aPfofT8EWH0" title="GUJARATI AND HINDI ALPHABETS IN FORM OF SIGN LANGUAGE | BY JAGRUTI JOSHI | SPEECH IN GUJARATI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="core-alpha-text">
            <h2>Alphabets</h2>
            <p>
              We envision a world where sign language is universally recognized, respected, and embraced as an essential form of communication.
              Our goal is to create an inclusive society where the deaf and mute community can express themselves freely, breaking barriers and fostering meaningful connections.
            </p>
          </div>
        </div>
      </div>

      <div className="core-alpha-values">
        <div className="core-alpha-part-2">
          <div className="core-alpha-info-text">
            <h2>Gujarati Letters</h2>
            <p>Gujarati is descended from old Gujarati script which was written in 1100 CE - 1500 CE. Back then, the old Gujarati language was used as a literary language and some scholars even prefer it to be named as old Western Rajasthani script.

Just like in the past, the modern Gujarati also used three genders (masculine, feminine, and neuter), two numbers (singular and plural), and three cases (nominative, oblique, and agentive-locative) for nouns. Gujarati script is similar to Devanagari but without the continuous line at the top of the letters.

At present, Gujarati is the official language of the Indian state of Gujarat, widely spoken in Mumbai and also the most spoken language amongst Indian languages spoken in South Africa.

Gujarati alphabets are broken down into Vowels and Consonant letters. In addition, numerals in Gujarati are also written in Gujarati script.</p>
          </div>
        </div>
      </div>

      <div className="tuto-core-vowels">
        <div className="tuto-core-vowels-part">
          <div className="tuto-core-vowels-text">
            <h2>Gujarati Vowel Letters</h2>
            <p>
            Gujarati vowel, also called Swar (સ્વર), are the basic part of an alphabet in Gujarati language. Vowels are written as separate letters and combined with consonants to determine the final sound.
            Independent Vowels in Gujarati are placed before consonants whereas dependent vowels are placed either after, on top, or below a consonant, giving the writing the appearance of a multi-storied building.
            </p>
          </div>
          <div className="core-vowels-image">
            <img src="./tuto-vowels.png" alt="Gujarati Vowels" className='core-vowels-im'/>
          </div>
        </div>
      </div>

      <div className="tuto-core-Consonant">
        <div className="tuto-core-Consonant-part">
          <div className="tuto-core-Consonant-text">
            <h2>Gujarati Consonant Letters</h2>
            <p>
            Consonant in Gujarati are also called Vyanjan (વ્યંજન). While vowel letters in Gujarati can be pronounced independently by themselves, consonants represent those letters that cannot be pronounced independently and have to be combined with vowels to make a final sound.
There are 34 consonant letters in Gujarati.
            </p>
          </div>
          <div className="core-Consonant-image">
            <img src="./tuto-Consonant.png" alt="Gujarati Consonant" className='core-Consonant-im'/>
          </div>
        </div>
      </div>

      <div className="tuto-foot">
        <p className="tuto-foot-para">Mastering basic sign language opens the door to better communication and inclusivity. By learning essential signs like greetings, numbers, colors, and days of the week, you can engage in meaningful conversations with the deaf and hard-of-hearing community. Consistent practice and clear hand movements will improve your fluency and confidence over time. Sign language is not just about hand gestures—it also involves facial expressions and body language to convey emotions and meaning. Keep practicing, stay patient, and enjoy the journey of learning this beautiful language.</p>
    </div>

    </div>
  )
}

export default core

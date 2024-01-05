import React from 'react';
import main_logo from "./img_src/main_logo.png";
import instagram from "./img_src/instagram.png";
import youtube from "./img_src/youtube.png";
import linkedin from "./img_src/linkedin.png";
import email from "./img_src/email.png";

import styles from './footer.module.css';

const Footer = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['content']}>
        <div className={styles['main-logo']}>
          <a href="https://rasoriitm.vercel.app/" className={styles['link']}>
            <img
              alt="image"
              src={main_logo}
              className={styles['main-logo1']}
            />
          </a>
          <p className={styles['logo-text']}>
            <span>
              Ramanujan Society
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>of Research</span>
          </p>
        </div>
        <div className={styles['about-us']}>
          <span className={styles['about-us1']}>About Us</span>
          <a
            href="https://rasoriitm.vercel.app/aboutus"
            className={styles['about-1']}
          >
            About RaSoR
          </a>
          <a
            href="https://rasoriitm.vercel.app/joinus"
            className={styles['about2']}
          >
            Join Us
          </a>
          <a
            href="https://rasoriitm.vercel.app/teams"
            className={styles['about3']}
          >
            Teams
          </a>
          <a
            href="https://rasoriitm.vercel.app/faq"
            className={styles['about-4']}
          >
            <span>FAQ</span>
            <br></br>
          </a>
        </div>
        <div className={styles['publication-list']}>
          <span className={styles['publication']}>Publications</span>
          <a href="https://rasoriitm.vercel.app/" className={styles['pub-1']}>
            <span>About Publications</span>
            <br></br>
          </a>
          <a href="https://rasoriitm.vercel.app/" className={styles['pub2']}>
            Digital Library
          </a>
          <a href="https://rasoriitm.vercel.app/" className={styles['pub3']}>
            Journals
          </a>
          <a href="https://rasoriitm.vercel.app/" className={styles['pub-4']}>
            <span>Blogs</span>
            <br></br>
          </a>
        </div>
        <div className={styles['research-list']}>
          <span className={styles['reseach']}>Research</span>
          <a href="https://rasoriitm.vercel.app/" className={styles['rsc1']}>
            <span>Current R&amp;D</span>
            <br></br>
          </a>
          <a href="https://rasoriitm.vercel.app/" className={styles['rsc2']}>
            Research Areas
          </a>
          <a href="https://rasoriitm.vercel.app/" className={styles['rsc3']}>
            Innovation
          </a>
          <a href="https://rasoriitm.vercel.app/" className={styles['rsc4']}>
            <span>Collaborations</span>
            <br></br>
          </a>
        </div>
        <div className={styles['important-links']}>
          <span className={styles['important-links1']}>Important Links</span>
          <a
            href="https://rasoriitm.vercel.app/privacypolicy"
            className={styles['impt-links1']}
          >
            <span>Privacy Policy</span>
            <br></br>
          </a>
          <a
            href="https://rasoriitm.vercel.app"
            className={styles['impt-links2']}
          >
            Accessibility
          </a>
          <a
            href="https://rasoriitm.vercel.app/"
            className={styles['impt-links3']}
          >
            Terms of Use
          </a>
          <a
            href="https://rasoriitm.vercel.app/"
            className={styles['impt-links-4']}
          >
            <span>RTI</span>
            <br></br>
          </a>
          <a
            href="https://rasoriitm.vercel.app/"
            className={styles['impt-links-5']}
          >
            Tenders
          </a>
        </div>
        <div className={styles['join-us']}>
          <span className={styles['join-us1']}>Join Us On</span>
          <a
            href="https://rasoriitm.vercel.app/"
            target="_blank"
            rel="noreferrer noopener"
            className={styles['link1']}
          >
            <img
              alt="image"
              src={instagram}
              className={styles['instagram']}
            />
          </a>
          <a
            href="https://rasoriitm.vercel.app/"
            target="_blank"
            rel="noreferrer noopener"
            className={styles['link2']}
          >
            <img alt="image" src={youtube} className={styles['youtube']} />
          </a>
          <a href="https://rasoriitm.vercel.app/" className={styles['link3']}>
            <img alt="image" src={linkedin} className={styles['linkedin']} />
          </a>
          <img
            alt="image"
            src={email}
            className={styles['email']}
          />
          <span className={styles['email1']}>
            research.society@study.iitm.ac.in
          </span>
        </div>
        <div className={styles['lower-tab']}>
          <a
            href="https://rasoriitm.vercel.app/researchsummit"
            target="_blank"
            rel="noreferrer noopener"
            className={styles['h-ome']}
          >
            Home
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </a>
          <a
            href="https://rasoriitm.vercel.app/researchsummit"
            className={styles['contact-us']}
          >
            Contact Us
          </a>
          <a
            href="https://rasoriitm.vercel.app/researchsummit"
            className={styles['site-map']}
          >
            Site Map
          </a>
          <span className={styles['clusters']}>Clusters</span>
        </div>
        <footer className={styles['foot-line']}>
          <span className={styles['update-date']}>
            Last Updated On : Dec 08, 2023
          </span>
          <span className={styles['copyright']}>
            Copyright 2023 | All Rights Reserved
          </span>
          {/* <div className={styles['separator']}></div> */}
        </footer>
      </div>
    </div>
  )
}

export default Footer
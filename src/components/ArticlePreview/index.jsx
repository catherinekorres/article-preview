import React, { useState, useEffect } from 'react';

import './styles.scss';

import articleImg from 'assets/images/drawers.jpg';
import authorPhoto from 'assets/images/avatar-michelle.jpg';
import facebook from 'assets/images/icon-facebook.svg';
import twitter from 'assets/images/icon-twitter.svg';
import pinterest from 'assets/images/icon-pinterest.svg';

function ArticlePreview() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log(open);
  }, [open]);

  return (
    <div className="card">
      <div className="article-img">
        <img src={articleImg} alt="drawers" />
      </div>
      <article>
        <header>
          <h1>
            Shift the overall look and feel by adding these wonderful touches to furniture in your home
          </h1>
        </header>
        <div className="article-content">
          <p>
          Ever been in a room and felt like something was missing? Perhaps
          it felt slightly bare and uninviting. I’ve got some simple tips
          to help you make any room feel complete.
          </p>
        </div>
        <footer>
          <div className="info">
            <div className="author-photo">
              <img src={authorPhoto} width="40" alt="Michelle Appleton" />
            </div>
            <div className="publish-info">
              <author>Michelle Appleton</author>
              <time pubdate datetime="2020-06-28">28 Jun 2020</time>
            </div>
          </div>
          <div className="share">
            <button aria-label="Share" className={open ? 'focused' : ''} onClick={() => setOpen(!open)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill={open ? '#fff' : '#6E8098'} d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/></svg>
            </button>
            <div className={open ? 'tooltip active' : 'tooltip'}>
              <span>Share</span>
              <div className="social">
                <a href="#">
                  <img src={facebook} alt="Facebook" />
                </a>
                <a href="#">
                  <img src={twitter} alt="Twitter" />
                </a>
                <a href="#">
                  <img src={pinterest} alt="Pinterest" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}

export default ArticlePreview;

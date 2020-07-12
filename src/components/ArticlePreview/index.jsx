import React from 'react';

import './styles.scss';

import articleImg from 'assets/images/drawers.jpg';
import authorPhoto from 'assets/images/avatar-michelle.jpg';
import shareIcon from 'assets/images/icon-share.svg';

function ArticlePreview() {
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
          <button>
            <img src={shareIcon} alt="Share icon" />
          </button>
        </footer>
      </article>
    </div>
  );
}

export default ArticlePreview;

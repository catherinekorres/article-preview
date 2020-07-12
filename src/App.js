import React from 'react';

// - components
import ArticlePreview from 'components/ArticlePreview';
import Footer from 'components/Footer';

// - global styles for App
import 'assets/styles/global.scss';

function App() {
  return (
    <>
      <main>
        <ArticlePreview />
      </main>
      <Footer/>
    </>
  );
}

export default App;

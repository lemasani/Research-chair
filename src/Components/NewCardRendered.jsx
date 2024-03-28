import React from 'react';
import NewsCard from './NewsCard';

function NewsCardRendered() {
  const newsData = [
    {
      news: 'News 1',
      date: '2022-01-01',
      place: 'Place 1',
      link: 'https://example.com/news1'
    },
    {
      news: 'News 2',
      date: '2022-02-01',
      place: 'Place 2',
      link: 'https://example.com/news2'
    },
    {
      news: 'News 3',
      date: '2022-03-01',
      place: 'Place 3',
      link: 'https://example.com/news3'
    },
    {
      news: 'News 4',
      date: '2022-04-01',
      link: 'https://example.com/news4'
    }
    
  ];

  return (
    <div className="news-contanier">
      {newsData.map((item, index) => (
        <NewsCard key={index} {...item} />
      ))}
    </div>
  );
}

export default NewsCardRendered;
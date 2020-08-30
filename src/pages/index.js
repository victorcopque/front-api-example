import React from 'react';
import BaseLayout from '../components/Base/BaseLayout';
import Stories from '../components/Stories';
import Feed from '../components/Feed';
import './style.css';

export default function FeedPage() {
  return (
    <BaseLayout>
      <div className="feed-container">
        <div className="feed-main-content">
          <Stories />
          <Feed />
        </div>
        <div className="suggestions-follow">
          {/* Escreva aqui */}
        </div>
      </div>
    </BaseLayout>
  )
}
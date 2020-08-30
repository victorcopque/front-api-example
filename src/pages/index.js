import React from 'react';
import BaseLayout from '../components/Base/BaseLayout';
import Stories from '../components/Stories';
import Feed from '../components/Feed';
import Follow from '../components/Follow';
import './style.css';

export default function FeedPage() {
  return (
    <BaseLayout>
      <div className="feed-container">
        <div className="feed-main-content">
          <Stories />
          <Feed />
        </div>
        <Follow />
      </div>
    </BaseLayout>
  )
}
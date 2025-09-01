import React, { useRef, useEffect, useState } from 'react';
import styles from './RealStories.module.css';

// Assets (सुनिश्चित करें कि पाथ सही है)
import story1 from '../../assets/video/story-1.mp4';
import story2 from '../../assets/video/story-2.mp4';
import story3 from '../../assets/video/story-3.mp4';
import story4 from '../../assets/video/story-4.mp4';
import playIcon from '../../assets/icons/play.png';

const stories = [
  { id: 1, video: story1,  },
  { id: 2, video: story2, },
  { id: 3, video: story3,  },
  { id: 4, video: story4, },
  { id: 5, video: story1, },
  { id: 6, video: story2,  },
  { id: 7, video: story3,  },
  { id: 8, video: story4, },
  { id: 9, video: story1,  },
  { id: 10, video: story2,  },
];

const RealStories = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); // सक्रिय पेजिनेशन डॉट के लिए स्टेट

  // स्क्रीन साइज़ के आधार पर दृश्यमान कार्ड की संख्या को गतिशील रूप से प्राप्त करने के लिए हेल्पर फ़ंक्शन
  const getVisibleCardsCount = () => {
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 992) return 2;
    if (window.innerWidth <= 1200) return 3;
    return 4; // बड़ी स्क्रीन के लिए डिफ़ॉल्ट, इमेज से मेल खाता है
  };

  // पेजिनेशन के लिए कुल पेजेस की गणना करें
  const totalPages = Math.ceil(stories.length / getVisibleCardsCount());

  // स्क्रॉल को हैंडल करें ताकि सक्रिय डॉट अपडेट हो
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const scrollLeft = slider.scrollLeft;
      const firstCard = slider.querySelector(`.${styles.storyCard}`);
      if (!firstCard) return;

      const cardWidth = firstCard.offsetWidth;
      const gap = parseFloat(getComputedStyle(slider).gap || '0px');
      const visibleCards = getVisibleCardsCount();

      // स्क्रॉल स्थिति के आधार पर वर्तमान पेज की गणना करें
      const currentPage = Math.round(scrollLeft / ((cardWidth + gap) * visibleCards));
      setActiveIndex(currentPage);
    };

    slider.addEventListener('scroll', handleScroll);
    // प्रारंभिक सक्रिय डॉट सेट करें
    handleScroll();

    // जब कंपोनेंट अनमाउंट हो तो इवेंट लिसनर हटा दें
    return () => {
      slider.removeEventListener('scroll', handleScroll);
    };
  }, [stories.length]); // कहानियों की संख्या बदलने पर प्रभाव को फिर से चलाएं

  // किसी विशिष्ट पेज पर स्क्रॉल करने का फ़ंक्शन
  const scrollToPage = (pageIndex) => {
    if (!sliderRef.current) return;
    const firstCard = sliderRef.current.querySelector(`.${styles.storyCard}`);
    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth;
    const gap = parseFloat(getComputedStyle(sliderRef.current).gap || '0px');
    const visibleCards = getVisibleCardsCount();

    const scrollAmount = (cardWidth + gap) * visibleCards * pageIndex;
    sliderRef.current.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>Real Stories. Real People.</h2>
        <p>Quality Products for a Quality Life</p>
      </div>
      <div className={styles.sliderWrapper}> {/* स्लाइडर के लिए Wrapper */}
        <div className={styles.slider} ref={sliderRef}>
          {stories.map((story) => (
            <div key={story.id} className={styles.storyCard}>
              <video
                src={story.video}
                className={styles.storyVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-label={`Video of story ${story.id}`}
              />
              {story.title && (
                <div className={styles.videoTitleOverlay}>
                  {story.title}
                </div>
              )}
              <a href="#" className={styles.viewButton} aria-label="View Product Details">
                <img src={playIcon} alt="Play icon" />
                <span>View Product</span>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === activeIndex ? styles.active : ''}`}
            onClick={() => scrollToPage(index)}
            aria-label={`Go to page ${index + 1}`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default RealStories;
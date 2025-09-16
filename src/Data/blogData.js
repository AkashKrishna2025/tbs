// src/data/blogData.js (पूरा कोड)

// अपनी ब्लॉग इमेजेज को यहाँ इम्पोर्ट करें
import blogImg1 from '../assets/images/blog/blog1.png';
import blogImg2 from '../assets/images/blog/blog2.png';
import blogImg3 from '../assets/images/blog/blog3.png';
import blogImg4 from '../assets/images/blog/blog1.png';
import blogImg5 from '../assets/images/blog/blog2.png';
import blogImg6 from '../assets/images/blog/blog3.png';

export const BLOG_POSTS = [
  {
    id: 1,
    title: 'Here Are Some Fun Activities To Keep Your Kids..',
    excerpt: 'Winter can be a tough time for kids. Our little children may feel confined inside due to the gloomy conditions and chilly winds outside. That’s not what we want, right?',
    image: blogImg1,
    category: 'doctors', // 'doctors', 'moms', 'dads'
    readTime: '5 Min Read',
  },
  {
    id: 2,
    title: 'How To Choose The Best Baby Cot?',
    excerpt: 'Words can’t express how much you love your little human being. As a mother, you know your baby has been literally in your belly for nine months long months, and now that they are finally out of the womb...',
    image: blogImg2,
    category: 'moms',
    readTime: '7 Min Read',
  },
  {
    id: 3,
    title: 'A Dad’s Guide to Assembling Furniture',
    excerpt: 'Let\'s be honest, the instruction manual can be intimidating. But with a little patience and the right mindset, you can become the hero of the nursery. Here are some tips from one dad to another.',
    image: blogImg3,
    category: 'dads',
    readTime: '6 Min Read',
  },
  {
    id: 4,
    title: 'Creating a Safe Nursery Environment',
    excerpt: 'As a pediatrician, my first priority is child safety. A beautiful nursery is wonderful, but a safe one is essential. This guide covers the key safety checks every parent should perform.',
    image: blogImg4,
    category: 'doctors',
    readTime: '8 Min Read',
  },
  {
    id: 5,
    title: 'Balancing Work and Motherhood: You Can Do It!',
    excerpt: 'For many moms, returning to work can be an emotional rollercoaster. Here are some tried-and-true strategies for managing your time, your energy, and your heart as a working mom.',
    image: blogImg5,
    category: 'moms',
    readTime: '5 Min Read',
  },
  {
    id: 6,
    title: 'The Art of the Bedtime Story',
    excerpt: 'Reading to your child is one of the most powerful bonding experiences. As a dad, I cherish this time. Let\'s explore how to make story time magical and memorable for both of you.',
    image: blogImg6,
    category: 'dads',
    readTime: '4 Min Read',
  },
];
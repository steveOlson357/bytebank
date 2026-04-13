import myProductsVideo from '../shared/Media/simpleProductsVideo.mp4';
import crawlSpaceVideo from '../shared/Media/crawlSpaceVideo.mp4';
import sidescrollVideo from '../shared/Media/sidescrollVideo.mp4';

// Export an array of project objects. Keep descriptions and tech stacks as strings
// so this file remains plain JS (no JSX). Update these fields as you like.
const projects = [
  {
    id: 'simple-products',
    title: 'Simple Products Website',
    description:
      'A simple PHP website built with database connection and CRUD operations, featuring searchable and dynamic products stored in a connected database. Although the UI is basic, this project demonstrates foundational web development skills including backend integration and data management.',
    videoSrc: myProductsVideo,
    tech: 'PHP, MySQL, HTML, CSS, JavaScript, React, Laravel, Bootstrap',
  },
  {
    id: 'crawl-space',
    title: 'Crawl Space',
    description:
      'Testing out some features and mechanics in my Crawl Space project. Space action-platformer taking inspiration from classics like Kong and Galaga. You can see in this video some of the core gameplay elements including movement, shooting, and enemy interactions. More features and polish to come as development continues!',
    videoSrc: crawlSpaceVideo,
    tech: 'GameMaker, GML, sprites created with GameMaker\'s built-in editor',
  },
  {
    id: 'sidescroll',
    title: 'Sidescroll',
    description:
      'This was the first game I ever made, originally running on Windows 7 in 2014. Imagine the delight when finding it still runs on Windows 11! It is still possible (although extremely challenging) to complete the levels and reach the end. This project holds nostalgic value and showcases my early interest in game development. Although the original bug sprites from this game are lost, they are the inspiration for the crawl space enemies.',
    videoSrc: sidescrollVideo,
    tech: 'GameMaker Studio, GML (I told you it was old!)',
  },
];

export default projects;

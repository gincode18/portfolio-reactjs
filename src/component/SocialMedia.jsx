import React from 'react';
import {  BsInstagram,BsGithub } from 'react-icons/bs';
import {AiFillLinkedin} from 'react-icons/ai'
const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://github.com/gincode18/'><BsGithub /></a>
    </div>
    <div>
     <a href='https://www.linkedin.com/in/vishal-kamboj-5a187a208'> <AiFillLinkedin /></a>
    </div>
    <div>
      <a href='https://www.instagram.com/vishal9252/'><BsInstagram /></a>
    </div>
  </div>
);

export default SocialMedia;

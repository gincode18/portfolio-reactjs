import React from 'react';
import {  BsInstagram,BsGithub } from 'react-icons/bs';
import {AiFillLinkedin} from 'react-icons/ai'
const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsGithub />
    </div>
    <div>
      <AiFillLinkedin />
    </div>
    <div>
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;

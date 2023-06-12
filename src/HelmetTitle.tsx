import React from 'react';
import { Helmet } from 'react-helmet';
import { homeInfo } from './portfolio';

interface HelmetTitleProps {
  title: string;
}

const HelmetTitle: React.FC<HelmetTitleProps> = ({ title }) => {
  
  const name = homeInfo.username;

  return (
    <Helmet>
      <title>{`${name} | ${title}`}</title>
    </Helmet>
  );
};

export default HelmetTitle;
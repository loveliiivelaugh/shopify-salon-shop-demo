import React from "react";
import UsersSection from "./../components/UsersSection";


// data
import { galleryPageData } from '../util/cms';
const data = galleryPageData;

function GalleryPage() {
  return (
    <UsersSection
      bg="white"
      textColor="dark"
      size="md"
      bgImage=""
      bgImageOpacity={1}
      title={data.main.title}
      subtitle={data.main.subtitle}
      items={data.items}
    />
  );
}

export default GalleryPage;

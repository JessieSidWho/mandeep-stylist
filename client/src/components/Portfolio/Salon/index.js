import React, { useState, useCallback } from 'react';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./../../../photos";

function Salon() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className='row justify-content-md-center'>
        <div className=' slide col-md-11 pt-5'>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway className=''>
        {viewerIsOpen ? (
          <Modal className='' onClose={closeLightbox}>
            <Carousel
                className=''
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      </div>
    </div>
  );
}

export default Salon;
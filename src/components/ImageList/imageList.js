import { ImageGalleryItem } from 'components/ImageItem/imageItem';
import css from './imageList.module.css';

export const ImageGalleryList = ({ images }) => {
  return (
    images && (
      <ul id="gallery" className={css.ImageGallery}>
        {images.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            alt={tags}
            smallImage={webformatURL}
            largeImage={largeImageURL}
          />
        ))}
      </ul>
    )
  );
};

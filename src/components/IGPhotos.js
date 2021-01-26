import react from 'react';
import IGPhotoSingle from './IGPhotoSingle';
import Styled from 'styled-components';
import { MdAddAPhoto } from 'react-icons/md';

const PhotoList = Styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .addPhoto {
    position: fixed;
    font-size: 40px;
    top: 12px;
    left: 12px;
  }
`;

const IGPhotos = () => {
  return (
    <PhotoList>
      <IGPhotoSingle />
      <IGPhotoSingle />
      <IGPhotoSingle />
      <IGPhotoSingle />
      <IGPhotoSingle />
      <IGPhotoSingle />
      <IGPhotoSingle />
      <IGPhotoSingle />
      <MdAddAPhoto className="addPhoto" />
    </PhotoList>
  )
}

export default IGPhotos;

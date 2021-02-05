import IGPhotoSingle from './IGPhotoSingle';
import Styled from 'styled-components';
import { MdAddAPhoto } from 'react-icons/md';
import { connect } from 'react-redux';

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

const IGPhotos = (props) => {
  return (
    <PhotoList>
      {
        props.state.map(photo => <IGPhotoSingle photoInfo={photo} key={photo._id} />)
      }
      <MdAddAPhoto className="addPhoto" />
    </PhotoList>
  )
}

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps, null)(IGPhotos);
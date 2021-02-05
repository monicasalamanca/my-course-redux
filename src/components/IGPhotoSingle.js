import Styled from 'styled-components';
import IGSingleComment from './IGSingleComment';
import { deletePhoto } from '../redux';
import { connect } from 'react-redux';
import { FaSkull } from 'react-icons/fa';

const SinglePhotoDiv = Styled.div`
  border: 1px solid black;
  padding: 20px;
  width: 200px;
  margin: 8px;
  flex-grow: 2;
  position: relative;

  .delBtn {
    position: absolute;
    top: 12px;
    right: 12px; 
  }
`;

const CommentsList = Styled.div`
  height: 100px;
  overflow: auto;
`;

const IGPhotoSingle = (props) => {
  return (
    <SinglePhotoDiv>
      <div>
        <img src="http://placehold.it/200x150" alt="" />
        <FaSkull className="delBtn" onClick={() => props.deletePhoto(props.photoInfo._id)} />
      </div>
      <CommentsList>
        {
          props.photoInfo.comments.map(comment => <IGSingleComment comment={comment.comment} photoId={props.photoInfo._id} key={comment.comment.id} />)
        }
      </CommentsList>
    </SinglePhotoDiv>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    deletePhoto: photoid => dispatch(deletePhoto(photoid))
  }
}

export default connect(null, mapDispatchToProps)(IGPhotoSingle);
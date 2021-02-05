import Styled from 'styled-components';
import { connect } from 'react-redux';
import { FaPencilAlt, FaSkull } from 'react-icons/fa';
import { deleteComment } from '../redux';

const Comment = Styled.div`
  display: inline-flex;
  padding: 8px;

  & > div {
    padding-right: 5px;

    p {
      padding: 0;
      margin: 0;
      font-size: 10px;
    }
  }

  .author {
    font-weight: bolder;
  }

  .actionBtns {
    display: flex;
    justify-content: space-between;

    .btn:first-child {
      padding-right: 5px;
    }
  }
`;

const IGSingleComment = (props) => {
  return (
    <Comment>
      <div className="author">
        <p>{props.comment.author}</p>
      </div>
      <div className="comment">
        <p>{props.comment.description}</p>
      </div>
      <div className="actionBtns">
        <FaPencilAlt className="btn" />
        <FaSkull className="btn" onClick={() => props.deleteComment(props.photoId, props.comment.id)} />
      </div>
    </Comment>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    deleteComment: (photoId, commentId) => dispatch(deleteComment(photoId, commentId))
  }
}

export default connect(null, mapDispatchToProps)(IGSingleComment);
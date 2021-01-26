import react from 'react';
import Styled from 'styled-components';
import { FaPencilAlt, FaSkull } from 'react-icons/fa';

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

const IGSingleComment = () => {
  return (
    <Comment>
      <div className="author">
        <p>Author</p>
      </div>
      <div className="comment">
        <p>LOrem Ipsum LOrem Ipsum LOrem Ipsum LOrem Ipsum </p>
      </div>
      <div className="actionBtns">
        <FaPencilAlt className="btn" />
        <FaSkull className="btn" />
      </div>
    </Comment>
  )
}

export default IGSingleComment;
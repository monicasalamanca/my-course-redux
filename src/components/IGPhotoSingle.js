import react from 'react';
import Styled from 'styled-components';
import IGSingleComment from './IGSingleComment';
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

const IGPhotoSingle = () => {
  return (
    <SinglePhotoDiv>
      <div>
        <img src="http://placehold.it/200x150" />
        <FaSkull className="delBtn" />
      </div>
      <CommentsList>
        <IGSingleComment />
        <IGSingleComment />
        <IGSingleComment />
        <IGSingleComment />
        <IGSingleComment />
      </CommentsList>
    </SinglePhotoDiv>
  )
}

export default IGPhotoSingle;
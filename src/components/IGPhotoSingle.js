import react from 'react';
import Styled from 'styled-components';
import IGSingleComment from './IGSingleComment';

const SinglePhotoDiv = Styled.div`
  border: 1px solid black;
  padding: 20px;
  width: 200px;
`;

const CommentsList = Styled.div`
  height: 100px;
  overflow: auto;
`;

const IGPhotoSingle = () => {
  return (
    <SinglePhotoDiv>
      <div>
        <img src="http://placehold.it/150x150" />
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
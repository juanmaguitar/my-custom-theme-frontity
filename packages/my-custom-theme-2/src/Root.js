import React from 'react'
import {connect} from 'frontity'

const Root = ({state}) => {
  return (
    <>
      You are in:
      <pre>{state.router.link}</pre>
    </>
  );
};

export default connect(Root)
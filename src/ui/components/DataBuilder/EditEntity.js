
import React from 'react';
import Main from 'ui/components/Main';
import { Link } from 'react-router-dom';

const EditEntity = ({ match }) => (
  <Main>
    <Link className="pure-menu-heading bold" to="/data-builder">Back</Link>
    <h1>Edit Entity ({ match.params.entityName })</h1>
  </Main>
);

export default EditEntity;

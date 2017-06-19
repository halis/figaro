
import React from 'react';
import Main from 'ui/components/Main';
import { Link } from 'react-router-dom';

const CreateEntity = () => (
  <Main>
    <Link className="pure-menu-heading bold" to="/data-builder">Back</Link>
    <h1>Create Entity</h1>
  </Main>
);

export default CreateEntity;

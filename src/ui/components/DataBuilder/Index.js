
import React from 'react';
import { Link } from 'react-router-dom';
import Main from 'ui/components/Main';
import Page from 'ui/components/Page';
import Table from './Table';

const DataBuilder = () => {
  Page('Data Builder');
  return (
    <Main>
      <h1>Data Builder</h1>
      <Link
        className="pure-button pure-button-primary pure-button-active"
        to="/create-entity"
      >Create Entity</Link>
      <Table />
    </Main>
  );
};
export default DataBuilder;

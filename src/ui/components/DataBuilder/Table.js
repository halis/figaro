
import React from 'react';
import { Link } from 'react-router-dom';

const Row = (object, index) => (
  <tr key={`row-${index}`} className={`${index % 2 === 1 ? 'pure-table-odd' : ''}`}>
    <td className="highlight">
      <b><code>{object.name}</code></b>
    </td>
    <td className="highlight">
      <b><code>{object.columns.length}</code></b>
    </td>
    <td className="highlight">
      <b><code>{object.rows.length}</code></b>
    </td>
    <td className="highlight">
      <b><code>{object.links.length}</code></b>
    </td>
    <td className="highlight">
      <Link
        className="pure-link"
        to="/edit-entity"
      >Edit</Link>
    </td>
  </tr>
);

const Table = () => {
  const rows = [
    { name: 'User', columns: [], rows: [], links: [] },
    { name: 'Crop', columns: [], rows: [], links: [] },
    { name: 'Region', columns: [], rows: [], links: [] },
  ];
  return (
    <div className="">
      <h3>Entities</h3>
      <table id="data-builder-table" className="pure-table pure-table-bordered mq-table" style={{ marginTop: '20px' }}>
        <thead>
          <tr>
            <th className="highlight">Name</th>
            <th className="highlight">Columns</th>
            <th className="highlight">Rows</th>
            <th className="highlight">Links</th>
            <th className="highlight" />
          </tr>
        </thead>
        <tbody>
          {rows.map(Row)}
        </tbody>
      </table>
      <dl style={{ marginTop: '40px' }}>
        <dt>Entities</dt>
        <dd>
          Entities allow you to store the data for your application.
          (<code>Example: Employee, Inventory</code>)
        </dd>
        <dt>Columns</dt>
        <dd>
          Columns are the pieces of data associated with an entity.
          (<code>Example: First Name for Employee</code>)
        </dd>
        <dt>Rows</dt>
        <dd>
          Rows are the stored instances of an entity.
          (<code>Example: John is a row in Employee</code>)
        </dd>
        <dt>Links</dt>
        <dd>
          Links tie one entity to another entity.
          (<code>Example: Link Employee to Manager</code>)
        </dd>
      </dl>
    </div>
  );
};

export default Table;

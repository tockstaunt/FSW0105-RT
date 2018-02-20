import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    React.createElement('table', null,
    React.createElement('tr', null,
    React.createElement('th', null, 'Firstname'),
    React.createElement("th", null, 'Lastname')
  ),
    React.createElement('tbody',null,
    React.createElement('tr', null,
    React.createElement('td', null, 'Janet'),
    React.createElement("td", null, 'James')
  ),
    React.createElement('tr', null,
    React.createElement('td', null, 'John'),
    React.createElement("td", null, 'Jameson')
    )
  )
),
  document.getElementById('root')
);
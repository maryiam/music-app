import React from 'react';
import { Route, Link } from 'react-router-dom';

function Breadcrumb(props) {
  const previous = props.previous;
  const title = props.title;
  const ItemComponent = (props) => {
    return (
      <BreadcrumbsItem
        title={title}
        data={previous}
        {...props}
      />
    );
  }
  return (
    <div className='container'>
      <Route path='/:path' component={ItemComponent} />
    </div>
  );
}

export default Breadcrumb;


function BreadcrumbsItem(props) {
  const items = props.data || [];
  items.push({
    title: props.title,
    path: props.location.pathname,
    active: true
  })
  const breadcrumbItems = items.map((item, key) =>
    item.active ?
      (<li className='active' key={key}>
        {item.title}
      </li>)
      :
      (<li key={key}>
        <Link to={{ pathname: item.path, state: item.state }}>
          {item.title}
        </Link>
      </li>)
  );

  return (
    <ol className='breadcrumb'>
      <li><Link to='/'>Recherche</Link></li>
      {breadcrumbItems}
    </ol>
  );
}

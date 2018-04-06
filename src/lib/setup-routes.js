import React from 'react';
import { Route } from 'react-router-dom';

/*
  DEPRECATED
*/
export function mapChildren(children) {
  children.map((child) => (
    <Route key={child.prototype.path} exact path={child.prototype.path} component={child} />
  ))
}

/*
  DEPRECATED
*/
export function setupRoutes(pages) {
  return pages.map((page) => {
    if(page.children && page.children.length > 0) {
      return (
        <Route key={page.component.prototype.path} exact path={page.component.prototype.path} component={page.component}>
          {mapChildren(page.children)}
        </Route>
      )
    }
    else {
      return (
        <Route key={page.component.prototype.path} exact path={page.component.prototype.path} component={page.component} />
      )
    }
  })
}
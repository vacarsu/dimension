import React from 'react';
import { Route } from 'react-router';

export function mapChildren(children) {
  children.map((child) => (
    <Route key={child.prototype.path} path={child.prototype.path} component={child} />
  ))
}

export function setupRoutes(pages) {
  return pages.map((page) => {
    if(page.children && page.children.length > 0) {
      return (
        <Route key={page.component.prototype.path} path={page.component.prototype.path} component={page.component}>
          {mapChildren(page.children)}
        </Route>
      )
    }
    else {
      return (
        <Route key={page.component.prototype.path} path={page.component.prototype.path} component={page.component} />
      )
    }
  })
}
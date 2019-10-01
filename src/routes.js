import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { MaintenancePageLayout } from '@commercetools-frontend/application-components';
import { InjectReducers } from '@commercetools-frontend/application-shell';
import { useIsAuthorized } from '@commercetools-frontend/permissions';

import {
  RestrictedByPermissions,
  permission
} from '@commercetools-frontend/permissions';
import MainView from './components/main-view';
import { PERMISSIONS } from './constants';

const PageUnauthorized = () => <div>{'Unauthorized'}</div>;
PageUnauthorized.displayName = 'PageUnauthorized';

const ApplicationRoutes = ({ match }) => (
  <RestrictedByPermissions
  // define permissions with new permissions import here 
    permissions={[PERMISSIONS.ViewDeveloperSettings]}
    unauthorizedComponent={PageUnauthorized}
    shouldMatchSomePermissions={true}
  >
    <Switch>
      <Route
        path={`${match.path}/some-other-route`}
        render={() => <div>{'Nothing to see'}</div>}
      />
      <Route render={routerProps => <MainView match={routerProps.match} />} />
    </Switch>
  </RestrictedByPermissions>
);
ApplicationRoutes.displayName = 'ApplicationRoutes';
ApplicationRoutes.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      projectKey: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ApplicationRoutes;

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Text } from '@commercetools-frontend/ui-kit';
import messages from './messages';
import {Query} from 'react-apollo';
import {GRAPHQL_TARGETS} from '@commercetools-frontend/constants';
import {UserQuery} from './user.graphql';

const createQueryVariables = custom => ({
target: GRAPHQL_TARGETS.MERCHANT_CENTER_BACKEND,
...custom,
});

const User = () => (
  <Query
    query={UserQuery}
    variables={createQueryVariables()}
  >
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      return (
        <Text.Headline elementType="h1">
          {`Current Logged In User: ${data.me.firstName + ' ' + data.me.lastName}`}
          <br />
          {`ID: ${data.me.id}`}
          <br />
          {`Email: ${data.me.email}`}
        </Text.Headline>
      );
    }}
  </Query>
);
export default User;

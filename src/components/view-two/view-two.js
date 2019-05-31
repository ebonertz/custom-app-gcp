import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Text } from '@commercetools-frontend/ui-kit';
import messages from './messages';
import {Query} from 'react-apollo';
import {GRAPHQL_TARGETS} from '@commercetools-frontend/constants';
import {StatesQuery} from './state.graphql';

const createQueryVariables = custom => ({
target: GRAPHQL_TARGETS.COMMERCETOOLS_PLATFORM,
});



const States = () => (
  <Query
  query={StatesQuery}
  variables={createQueryVariables()}
  >
    {({ loading, error, data }) => {
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    return (
        <Text.Headline elementType="h1">
          {`States: ${JSON.stringify(data.states.results)}`}
        </Text.Headline>
      );
    }}
  </Query>
);

export default States;

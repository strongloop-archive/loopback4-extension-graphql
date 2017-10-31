// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: @loopback/graphql
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {CoreBindings} from '@loopback/core';

export namespace GraphQLBindings {
  // RestServer-specific bindings
  export const CONFIG = `${CoreBindings.APPLICATION_CONFIG}#graphql`;
  export const PORT = 'graphql.port';
  export const HANDLER = 'graphql.handler';

  export const API_SPEC = 'graphql.apiSpec';
  export const SEQUENCE = 'graphql.sequence';
}

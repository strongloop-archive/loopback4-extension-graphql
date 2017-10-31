// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: @loopback/rest
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {
  Component,
  CoreBindings,
  ProviderMap,
  Server,
  Application,
} from '@loopback/core';
import {inject, Constructor} from '@loopback/context';
import {GraphQLBindings} from './keys';

export class GrpcComponent implements Component {
  providers: ProviderMap = {};
  servers: {
    [name: string]: Constructor<Server>;
  } = {};

  constructor(
    @inject(CoreBindings.APPLICATION_INSTANCE) app: Application,
    @inject(GraphQLBindings.CONFIG) config?: GrpcComponentConfig,
  ) {
    if (!config) config = {};
  }
}

export interface GrpcComponentConfig {}

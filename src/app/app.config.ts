import { OpaqueToken } from '@angular/core';

export let APP_CONFIG = new OpaqueToken('app.config');

export interface AppConfig {
  apiEndpoint: string;
  apiKey: string;
}

export const FOOTBALL_TERRAIN_CONFIG: AppConfig = {
  apiEndpoint: 'http://api.football-data.org/v1/',
  apiKey: ''
};

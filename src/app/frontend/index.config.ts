// Copyright 2017 The Kubernetes Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {InjectionToken} from '@angular/core';
import {MatTooltipDefaultOptions} from '@angular/material/tooltip';

export const CONFIG_DI_TOKEN = new InjectionToken<Config>('kd.config');

interface LANGUAGE {
  value: string;
  label: string;
}
export interface Config {
  authTokenCookieName: string;
  skipLoginPageCookieName: string;
  csrfHeaderName: string;
  authTokenHeaderName: string;
  defaultNamespace: string;
  authModeCookieName: string;
}

export const CONFIG: Config = {
  authTokenCookieName: 'jweToken',
  authTokenHeaderName: 'jweToken',
  csrfHeaderName: 'X-CSRF-TOKEN',
  skipLoginPageCookieName: 'skipLoginPage',
  defaultNamespace: 'default',
  authModeCookieName: 'authMode',
};

// Override default material tooltip values.
export const KD_TOOLTIP_DEFAULT_OPTIONS: MatTooltipDefaultOptions = {
  showDelay: 500,
  hideDelay: 0,
  touchendHideDelay: 0,
};

export const AVAILABLE_LANGUAGES: LANGUAGE[] = [
  {
    label: 'Deutsche',
    value: 'de',
  },
  {
    label: 'English',
    value: 'en',
  },
  {
    label: '日本語',
    value: 'ja',
  },
  {
    label: '한국어',
    value: 'ko',
  },
  {
    label: '中文',
    value: 'zh-Hans',
  },
  {
    label: '台湾中文',
    value: 'zh-Hant',
  },
  {
    label: '香港中文',
    value: 'zh-Hant-HK',
  },
  {
    label: 'فارسی',
    value: 'fa',
  },
];

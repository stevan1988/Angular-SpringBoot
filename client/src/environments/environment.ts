// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  BACKEND_URL: window.location.protocol + '//' + window.location.hostname + ':' + 8080,
  WS_BACKEND_URL: 'ws://' + window.location.hostname + ':' + 8080,
  DOCUMENT_VALUES: {'BACKEND_URL': window.location.protocol + '//' + window.location.hostname + ':' + 8080},
  GIT_DOCUMENTS_URL: 'https://github.com/stevan1988/Angular-SpringBoot/tree/master/server/src/main/resources/documents/'
};

export const environment = {
  production: true,
  BACKEND_URL : window.location.protocol + '//' + window.location.hostname + ':' + window.location.port,
  WS_BACKEND_URL : 'ws://' + window.location.hostname + ':' + window.location.port,
  DOCUMENT_VALUES: {'BACKEND_URL': window.location.protocol + '//' + window.location.hostname + ':' + window.location.port},
  GIT_DOCUMENTS_URL: 'https://github.com/stevan1988/Angular-SpringBoot/tree/master/server/src/main/resources/documents/'

};

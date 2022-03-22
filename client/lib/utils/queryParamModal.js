import Router from 'next/router';
import { queryStringToObject, addToQueryString, omitFromQueryString } from './url';

const open = param =>
  Router.push({
    pathname: location.pathname,
    search: addToQueryString(location.search, { [`modal-${param}`]: true }),
  });

const close = param =>
  Router.push({
    pathname: location.pathname,
    search: omitFromQueryString(location.search, [`modal-${param}`]),
  });

const isOpen = param => !!queryStringToObject(location.search)[`modal-${param}`];

export const createQueryParamModalHelpers = param => ({
  open: () => open(param),
  close: () => close(param),
  isOpen: () => isOpen(param),
});

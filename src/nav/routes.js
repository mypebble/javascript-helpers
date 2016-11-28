/** Return the full URL for the given route */
export function reverse(name, routeArgs={}) {
  const schoolRoot = `/school/${routeArgs.organisation}/`;

  const routes = {
    dashboard: schoolRoot,
    donation: `${schoolRoot}donation/`,
    project: `${schoolRoot}project/`,
    volunteer: `${schoolRoot}volunteer/`,
    sponsor: `${schoolRoot}sponsor/`,
    contact: `${schoolRoot}name/`,
    costcentre: `${schoolRoot}account/`,
    bank: `${schoolRoot}account/bank/`,
    group: `${schoolRoot}name/group/`,
    support: `/main/support/`,
    choose: '/main/schools/change/'
  };

  return routes[name];
}

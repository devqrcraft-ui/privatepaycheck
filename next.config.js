/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    const states = [
      'alabama','alaska','arizona','arkansas','california','colorado',
      'connecticut','delaware','florida','georgia','hawaii','idaho',
      'illinois','indiana','iowa','kansas','kentucky','louisiana',
      'maine','maryland','massachusetts','michigan','minnesota',
      'mississippi','missouri','montana','nebraska','nevada',
      'new-hampshire','new-jersey','new-mexico','new-york',
      'north-carolina','north-dakota','ohio','oklahoma','oregon',
      'pennsylvania','rhode-island','south-carolina','south-dakota',
      'tennessee','texas','utah','vermont','virginia','washington',
      'west-virginia','wisconsin','wyoming'
    ];
    const stateRedirects = states.map(s => ({
      source: `/hourly-paycheck-calculator/${s}`,
      destination: '/hourly-paycheck-calculator',
      permanent: true,
    }));
    return [
      { source: '/hr', destination: '/hourly-paycheck-calculator', permanent: true },
      { source: '/week', destination: '/hourly-paycheck-calculator', permanent: true },
      ...stateRedirects,
    ];
  },
};
module.exports = nextConfig;

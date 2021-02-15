/** DEV or Prod 모드 설정 */
const buildMode = 'prod';
/** API 주소 */
const apiUrl = `${buildMode === 'dev' ? 'http://localhost:3000' : 'https://lms.altridedge.com'}`;

export { buildMode, apiUrl };

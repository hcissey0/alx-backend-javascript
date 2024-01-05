import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);

  const results = await Promise.allSettled([signUpPromise, uploadPromise]);
  console.log(results);
  return results.map(({ status, value, reason }) => ({
    status,
    value: status === 'fulfilled' ? value : reason,
  }));
}

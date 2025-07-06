import { ResolveFn } from '@angular/router';

export const answerResolver: ResolveFn<'yes' | 'no'> = async (route, state) => {
  const { answer } = await (await fetch('https://yesno.wtf/api')).json();
  return answer;
};

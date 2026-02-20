import readline from 'node:readline';

export function ask(question: string, defaultYes = true) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const hint = defaultYes ? '[Y/n]' : '[y/N]';

  return new Promise<boolean>((resolve) => {
    rl.question(`${question} ${hint} `, (answer) => {
      rl.close();

      const input = answer.trim().toLowerCase();

      if (!input) {
        return resolve(defaultYes);
      }

      if (['y', 'yes'].includes(input)) {
        return resolve(true);
      }
      if (['n', 'no'].includes(input)) {
        return resolve(false);
      }

      resolve(false);
    });
  });
}

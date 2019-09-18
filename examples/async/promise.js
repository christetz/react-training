function deplay(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
      // reject(new Error('Fehler'));
    }, 1000);
  });
}

// const timeoutPromise = deplay('OK1');

// timeoutPromise
//   .then(() => deplay('OK2'))
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

// console.log('Done');

doSome();

async function doSome() {
  try {
    const value1 = await deplay('OK1');
    console.log({ value1 });
    const value2 = await deplay(value1);
    console.log({ value2 });
  } catch (error) {
    console.error('Foo');
  }
}

Promise.all([deplay('j'), deplay('l')]).then(data => console.log({ data }));

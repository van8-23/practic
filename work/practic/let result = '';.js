first: for (let i = 0; i < 5; i++) {
  console.log(`First level: ${i}`);

  for (let j = 0; j < 5; j++) {
    console.log(`Second level: ${j}`);

    for (let k = 0; k < 5; k++) {
      if (k === 3) continue first;
      console.log(`Third level: ${k}`);
    }
  }
}

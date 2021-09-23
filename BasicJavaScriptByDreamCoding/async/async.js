// async & await
// clear style of using promise :)

// 1. async
async function fetchUser() {
    // do network reqeust in 10 secs....
    return 'ellie';
  }
  
  const user = fetchUser();
  user.then(console.log);
  console.log(user);
  /**Promise[[Prototype]]: 
   * Promise[[PromiseState]]: "fulfilled"
   * [[PromiseResult]]: "ellie"
   * 
   * ellie
   */
  

  // 2. await ✨
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function getApple() {
    await delay(2000);
    return '🍎';
  }
  
  async function getBanana() {
    await delay(1000);
    return '🍌';
  }
  
  async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
  }
  
  pickFruits().then(console.log);                   // 🍎 + 🍌
  
  // 3. useful APIs ✨
  function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then(fruits =>
      fruits.join(' + ')
    );
  }
  pickAllFruits().then(console.log);                   // 🍎 + 🍌
  
  function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
  }
  
  pickOnlyOne().then(console.log);                   // 🍌
  
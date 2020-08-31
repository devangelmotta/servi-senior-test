export const syncProccesing = async callback =>{

  new Promise((resolve, reject) => {
      callback()
      return resolve(true); 
  });
}


const convertDuration = (minutes) => {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
  
    if (h >= 1) {
      return `${h}ч ${m}м`;
    } else {
      return `${m}м`;
    }
  }
    
  export default convertDuration;
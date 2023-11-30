export function formatNumber(number) {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + "M";
  } else if (number >= 1000) {
    return (number / 1000).toFixed(0) + "K";
  } else {
    return number?.toString();
  }
}

export function formatTime(seconds) {
  if(seconds===null){
    return 'Live'
  }
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
  
    const parts = [];
  
    if (hours > 0) {
      const formattedHours = String(hours).padStart(2, '0');
      parts.push(`${formattedHours}`);
    }
  
    if (minutes > 0 || hours > 0) {
      const formattedMinutes = String(minutes).padStart(2, '0');
      parts.push(`${formattedMinutes}`);
    }
  
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    parts.push(`${formattedSeconds}`);
  
    return parts.join(':');
  }
  
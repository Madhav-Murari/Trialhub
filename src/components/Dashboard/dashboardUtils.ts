import { TimeCollection } from "./dashboardTypes";

function padZero(number: number): string {
    return number.toString().padStart(2, "0");
  }

export function calculateTotalTimeWorked(entry: TimeCollection): string {
    const clockInTime = new Date(`1970-01-01T${entry.clock_in_time}`);
    const clockOutTime = new Date(`1970-01-01T${entry.clock_out_time}`);
    const timeDiff = clockOutTime.getTime() - clockInTime.getTime();
  
    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDiff / 1000) % 60);
  
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  }
  

  
export function calculateHeight(entry: TimeCollection): string {
    const clockInTime = new Date(`1970-01-01T${entry.clock_in_time}`);
    const clockOutTime = new Date(`1970-01-01T${entry.clock_out_time}`);
    const timeDiff = clockOutTime.getTime() - clockInTime.getTime();
  
    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
  
    return `${hours}`;
  }
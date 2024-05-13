import { validate, errors } from "com"

function isMeetingDone(meeting) {
    // Obtener la fecha actual
    const currentDate = new Date()
    
    const meetingDate = new Date(meeting.date)
    
    return meetingDate < currentDate
  }
  
  // Ejemplo de uso:
  const meetingDate = '2024-05-10T15:00:00'; // Fecha y hora del meeting en formato ISO
  const meetingDone = isMeetingDone(meetingDate);
  
  if (meetingDone) {
    console.log('El meeting ya ha pasado de fecha.');
    // Permitir que los participantes hagan un review
  } else {
    console.log('El meeting aún no ha pasado de fecha.');
    // No permitir hacer un review hasta que el meeting haya pasado
  }
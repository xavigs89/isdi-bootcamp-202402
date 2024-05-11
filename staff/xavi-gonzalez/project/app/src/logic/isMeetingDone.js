import { validate, errors } from "com"

function isMeetingDone(meetingDate) {
    // Obtener la fecha actual
    const currentDate = new Date();
    
    // Convertir la fecha del meeting a objeto Date
    const meetingDateTime = new Date(meetingDate);
    
    // Comparar la fecha actual con la fecha del meeting
    // Si la fecha actual es posterior a la fecha del meeting, devuelve true, de lo contrario, devuelve false
    return currentDate > meetingDateTime;
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
const responses: { [key: number]: string } = {
  0: '⚠️ Error desconocido: no se pudo completar la solicitud antes de llegar al servidor. Revisa tu conexión o intenta nuevamente.',
  200: '✅ Solicitud completada con éxito: el servidor devolvió los datos solicitados.',
  201: '✅ Recurso creado o modificado correctamente en el servidor.',
  202: 'ℹ️ Solicitud aceptada: se procesará más tarde (tarea en segundo plano).',
  204: '✅ Operación exitosa: el recurso fue eliminado o no hay contenido que devolver.',
  400: '⚠️ Solicitud inválida: hay un error en los datos enviados y no se realizó ningún cambio.',
  401: '🔒 Acceso no autorizado: es necesario iniciar sesión o validar credenciales.',
  403: '⛔ Acceso prohibido: el usuario está bloqueado o no tiene permisos para este recurso.',
  404: '🔍 No encontrado: el recurso solicitado no existe o no está disponible.',
  406: '📄 Formato no aceptado: el tipo de respuesta solicitado no es compatible.',
  409: '⚠️ Conflicto: ya existe un recurso con los mismos datos.',
  410: '🗑️ Recurso eliminado permanentemente y no disponible.',
  422: '❌ Error de validación: los datos enviados no cumplen los requisitos.',
  500: '💥 Error interno: ocurrió un problema en el servidor.',
  502: '🌐 Error de puerta de enlace: el servidor intermedio recibió una respuesta inválida.',
  503: '🚧 Servicio no disponible: el servidor está sobrecargado o en mantenimiento temporal.',
  504: '⏳ Tiempo de espera agotado: no hubo respuesta a tiempo desde el servidor.',
};

export default responses;

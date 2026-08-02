# Guía Completa: Configurar Google Sheets para Waitlist

## Paso 1: Crear la Google Sheet

1. Ve a [Google Sheets](https://sheets.google.com)
2. Crea una nueva hoja de cálculo
3. Nombra la hoja (ej: "Waitlist YURA")
4. En la primera fila, agrega estos encabezados:
   - **Columna A**: `Fecha`
   - **Columna B**: `Email`
   - **Columna C**: `Subject`
5. Guarda la hoja

> **`Subject` es la materia que enseña el docente** (el campo "¿Qué materia enseñas?" del
> formulario de registro). El formulario de novedades solo pide el correo, así que esas filas
> llegan con `Subject` vacío.
>
> **¿Ya tenías la hoja con dos columnas?** Agrega `Subject` en `C1`. Las filas antiguas se quedan
> con la celda vacía; no hay que migrar nada.

## Paso 2: Crear el Apps Script

1. En tu Google Sheet, ve a **Extensiones** → **Apps Script**
2. Se abrirá un editor de código
3. Borra todo el código que viene por defecto
4. Pega este código:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Obtener email y subject (materia) desde FormData o JSON
    let email = null;
    let subject = '';

    if (e.parameter && e.parameter.email) {
      // Si viene como FormData
      email = e.parameter.email;
      subject = e.parameter.subject || '';
    } else if (e.postData && e.postData.contents) {
      // Si viene como JSON
      const data = JSON.parse(e.postData.contents);
      email = data.email;
      subject = data.subject || '';
    }

    // Validar que el email no esté vacío
    if (!email || email.trim() === '') {
      return ContentService
        .createTextOutput(JSON.stringify({ success: false, error: 'Email vacío' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    email = email.trim();
    subject = String(subject).trim();

    // Validar formato de email básico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return ContentService
        .createTextOutput(JSON.stringify({ success: false, error: 'Email inválido' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Verificar si el email ya existe
    const rows = sheet.getDataRange().getValues();
    for (let i = 1; i < rows.length; i++) {
      if (String(rows[i][1]).trim().toLowerCase() === email.toLowerCase()) {
        // Si ya estaba registrado sin materia y ahora sí la mandó, completamos la columna C
        if (subject && !String(rows[i][2] || '').trim()) {
          sheet.getRange(i + 1, 3).setValue(subject);
          return ContentService
            .createTextOutput(JSON.stringify({ success: true, message: 'Subject actualizado' }))
            .setMimeType(ContentService.MimeType.JSON);
        }

        return ContentService
          .createTextOutput(JSON.stringify({ success: false, error: 'Email ya registrado' }))
          .setMimeType(ContentService.MimeType.JSON);
      }
    }

    // Agregar la fila: Fecha | Email | Subject
    sheet.appendRow([new Date(), email, subject]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Registro guardado correctamente' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ message: 'Waitlist API funcionando' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

5. Guarda el proyecto (Ctrl+S o Cmd+S)
6. Nombra el proyecto (ej: "Waitlist Handler")

> **Si ya tenías un Apps Script desplegado**, reemplaza el código por este y crea una **nueva
> implementación** (Desplegar → Gestionar implementaciones → editar → "Nueva versión"). Si solo
> guardas el archivo, la web app sigue sirviendo la versión anterior y `Subject` no se guardará.

## Paso 3: Desplegar como Web App

1. En el editor de Apps Script, haz clic en **Desplegar** → **Nueva implementación**
2. Haz clic en el icono de engranaje ⚙️ junto a "Tipo" y selecciona **Aplicación web**
3. Configura:
   - **Descripción**: "Waitlist API"
   - **Ejecutar como**: "Yo" (tu cuenta)
   - **Quién tiene acceso**: "Cualquiera" (importante para que funcione desde tu sitio)
4. Haz clic en **Desplegar**
5. **Autoriza el acceso** cuando te lo pida:
   - Haz clic en "Revisar permisos"
   - Selecciona tu cuenta de Google
   - Haz clic en "Avanzado" → "Ir a [nombre del proyecto] (no seguro)"
   - Haz clic en "Permitir"
6. **Copia la URL de la aplicación web** (algo como: `https://script.google.com/macros/s/.../exec`)
   - Esta es tu `PUBLIC_GOOGLE_SCRIPT_URL`

## Paso 4: Configurar en tu Proyecto Astro

1. Crea un archivo `.env` en la raíz del proyecto (si no existe)
2. Agrega esta línea:

```env
PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/TU_ID_AQUI/exec
```

**Reemplaza `TU_ID_AQUI` con la URL que copiaste en el paso anterior.**

3. Reinicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Paso 5: Probar

1. Abre tu sitio en el navegador
2. Ve a la sección **Crear cuenta** (`#crear-cuenta`)
3. Ingresa un email de prueba y una materia (ej: `derecho penal`)
4. Haz clic en "Pide acceso anticipado"
5. Verifica en tu Google Sheet que la fila tenga las tres columnas: fecha, email y materia

También puedes probar la sección **Novedades** (`#novedades`): guarda solo el email y deja
`Subject` vacío.

## Qué manda cada formulario

| Formulario                        | `email` | `subject`                    |
| :-------------------------------- | :------ | :--------------------------- |
| Crear cuenta (`#crear-cuenta`)    | sí      | sí — la materia que enseña   |
| Novedades (`#novedades`)          | sí      | vacío                        |

El envío vive en `src/scripts/waitlist.ts`; los dos formularios usan la misma función
`submitToSheet({ email, subject })`.

## Solución de Problemas

### Error: "Configuración faltante"
- Verifica que el archivo `.env` existe y tiene `PUBLIC_GOOGLE_SCRIPT_URL`
- Reinicia el servidor después de crear/modificar `.env`

### La columna `Subject` llega vacía desde "Crear cuenta"
- Asegúrate de haber creado una **nueva versión** de la implementación tras cambiar el script
- Verifica en **Ver** → **Registros de ejecución** que `e.parameter.subject` llega con valor

### Error: "Email ya registrado"
- El script verifica duplicados automáticamente
- Si el email existía sin materia y ahora la mandas, el script completa la columna `C` en vez de rechazar
- Si quieres permitir duplicados, elimina esa validación del código

### Error CORS
- Google Apps Script con `mode: 'no-cors'` no devuelve respuesta, pero funciona
- El registro se guarda aunque veas un "error" en la consola
- Para ver respuestas reales, necesitarías usar un proxy o cambiar la configuración

### No se guardan los registros
- Verifica que la hoja tenga los encabezados correctos (Fecha, Email, Subject)
- Verifica que el script tenga permisos para editar la hoja
- Revisa los logs en Apps Script: **Ver** → **Registros de ejecución**

## Notas Importantes

- Los registros se guardan con la fecha y hora automáticamente
- El script valida duplicados para evitar emails repetidos
- Puedes exportar los datos desde Google Sheets cuando quieras
- La URL de la aplicación web es pública, pero solo acepta emails válidos

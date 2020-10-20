export const indexTemplate = (content) => `
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Skillbox</title>
    <script src="/static/client.js" type="application/javascript"></script>
  </head>
  <body>
    <div id="react-root">${content}</div>
  </body>
</html>
`;

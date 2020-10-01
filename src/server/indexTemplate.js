export default (content) => `
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Skillbox</title>
    <script src="/static/client.js" type="application/javascript"></script>
  </head>
  <body>
    <div id="react-root">${content}</div>
  </body>
</html>
`;

1. все требования реализованы
2. долго боролся с несколькими вызовами fetch в useEffect (useEffect в create-react-app на отладочном
   сервере запускается два раза), потом задача решилась с помощью promiseAll
3. репозиторий находится здесь https://github.com/rom38/f4_hw
4. в нем две папки front  и back_2
5. в back_2:
  1. cd back_2
  2. pip install -r req.txt
  3. python manage.py runserver
6. в front:
  1. cd front
  2. npm install
  3. npm start
7. Поскольку разработку вел на удаленном сервере, чтобы два порта не прокидывать
   и не бороться с CORS, настроил проксификацию url путей api в файле front/src/setupProxy.js,
   поэтому все пути в fetch вида "/api/..."
8. front по адресу http://127.0.0.1:3000/api/openapi/
9. back по адресу http://127.0.0.1:8000
10. логин:пароль для back  admin:11
11. схема openapi по адресу /api/openapi или http://127.0.0.1:8000/api/openapi/ или http://127.0.0.1:3000/api/openapi/
12. на главной странице категории блюд, каждая категория
    ссылается на список блюд, каждая строка в списке ссылается на описание блюда,
    получается три уровня
13. также есть navbar, где есть ссылки на главную страницу, страницу about, страницу swagger
14. swagger реализован на стороне клиента


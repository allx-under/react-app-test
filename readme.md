# React test app

React-test-app is app to keep track of your spending. You can both add and
remove purchases to your family list. The database is made through the mockapi
application and the list is loaded from the server. The infinite loader was not
used, as there is no need to implement it in the project, as the list can be
from 5 to 15 rows. But the react virtualized library was used to speed up
loading the list. The state manager was not added because there is no global
state, which is necessary to use this API.

## Features

- Total money spent you can see in the left bottom corner
- Add new purchase with description
- Remove from list and from database

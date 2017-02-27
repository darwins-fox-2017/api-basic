# api-basic
## REST API

API basic routes:

|       Route      |  HTTP   | Description |
|------------------|---------|-------------|
|/api/hello?name={name}   |   GET   | Mencetak pada halaman "hello,{name}" |


user routes:

|       Route      |  HTTP   | Description |
|------------------|---------|-------------|
|/api/users/       |   GET   | Memperoleh semua data USER |
|/api/users/:id    |   GET   | Memperoleh data satu USER dengan id tertentu |
|/api/users        |   POST  | Membuat data user baru |
|/api/users/:id    |  DELETE | Menghapus data user dengan id tertentu |
|/api/users/:id    |    PUT  | Membuat perubahan pada data user yang memiliki id tertentu |
|/api/users/:id       |   PATCH   | Membuat perubahan data yang spesifik pada user |


filter routes:

|       Route      |  HTTP   | Description |
|------------------|---------|-------------|
|/api/users?name="{name}"      |   GET   | Memperoleh {name} yang sesuai pada users |
|/api/users/name="{na}"   |   GET   | Memperoleh kalimat yang mengandung {na} pada users  |

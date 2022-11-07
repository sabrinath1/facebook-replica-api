import Route from '@ioc:Adonis/Core/Route'

Route.post('/users/register', 'Users/Register.store')
Route.get('/users/register/:key', 'Users/Register.show')
Route.put('/users/register', 'Users/Register.update')

Route.get('/users', 'Users/Main.show').middleware('auth')
Route.put('users', 'Users/Main.update').middleware('auth')

Route.put('/user/avatar', 'User/Avatar.update').middleware('auth')

Route.delete('/user/avatar', 'User/Avatar.destroy').middleware('auth')

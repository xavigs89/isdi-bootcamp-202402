import Component from "../../core/Component.mjs";


class UserList extends Component {
    constructor () {
        super ("ul")


        this.addClass("user-list")

        //funcion

            users.forEach(user => {
                const userItem = new Component('li');
                userItem.setText(user.username);
                userItem.addClass('user-list__item');
    
                if (user.status === 'online')
                    userItem.addClass('user-list__item--online');
                else
                    userItem.addClass('user-list__item--offline');
    
                userItem.onClick(() => {
                    this.onUserSelected(user);
                });
    
                this.add(userItem);
            });
        }
    
        onUserSelected(user) {
            // Implementar la lógica para manejar la selección de usuario
        }
    }




export default UserList
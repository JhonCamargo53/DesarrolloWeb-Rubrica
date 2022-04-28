import React from 'react' //rafce
import Form from './Form';
import { UserCard } from './UserCard';

const userInitialList = [{ id: "1", name: "Andres", lastName: "De la Hoz", age: 19, address: "Cra 21" },
{ id: "2", name: "Pablo", lastName: "Flores", age: 21, address: "Cra 18" },
{ id: "3", name: "Jorge", lastName: "Pulido", age: 26, address: "Cra 28" },
{ id: "4", name: "Juan", lastName: "Rondon", age: 17, address: "Cra 17" }];

const UserCrud = () => {

    const [userList, setUserList] = React.useState(userInitialList)

    const createUser = (newUser) => {
        setUserList([...userList, newUser]);
    }

    const deleteUser = (id) => {
        const newUserList = userList.filter(user => user.id != id);
        setUserList(newUserList);
    }

    const getUserList = () => {
        return userList;
    }

    return (
        <div>
            <Form getUserList={getUserList} createUser={createUser} />
            <UserCard getUserList={getUserList} deleteUser={deleteUser} />
        </div>
    )
}

export default UserCrud

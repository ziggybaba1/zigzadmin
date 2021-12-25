import "./newuser.scss";

function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form  className="newUserForm">
                <div className="newUserItem">
                    <label htmlFor="">Username</label>
                    <input type="text" name="" id="" placeholder="Ayuba4" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Full Nname</label>
                    <input type="text" name="" id="" placeholder="Ayuba James" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Email</label>
                    <input type="email" name="" id="" placeholder="ayuba@gmail.com" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Password</label>
                    <input type="password" name="" id="" placeholder="1234555" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Phone</label>
                    <input type="text" name="" id="" placeholder="+2348130000000" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Address</label>
                    <input type="text" name="" id="" placeholder="Apo district, Abuja" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Gender</label>
                    <div className="rowUserGender">
                        <input type="radio" name="gender" id="male" value="male"  />
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female"  />
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="other" value="other"  />
                        <label for="other">Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Gender</label>
                    <select name="" id="" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">Yes</option>
                    </select>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}

export default NewUser
